---
title: စိတ်ကြိုက် Gateway ဖွံ့ဖြိုးတိုးတက်ရေး
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# စိတ်ကြိုက် Gateway ဖွံ့ဖြိုးတည်ဆောက်ခြင်း {#custom-gateway-development}

`Base_Gateway` class ကို တိုးချဲ့၍ စိတ်ကြိုက် ငွေပေးချေမှု gateway များ ဖန်တီးနိုင်သည်။

## Gateway Class {#gateway-class}

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## Gateway ကို မှတ်ပုံတင်ခြင်း {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## အဓိက Methods {#key-methods}

| Method | ရည်ရွယ်ချက် |
|--------|---------|
| `process_single_payment()` | တစ်ကြိမ်တည်း ငွေပေးချေမှုများကို ကိုင်တွယ်သည် |
| `process_signup()` | ထပ်တလဲလဲ subscription များကို ပြင်ဆင်သတ်မှတ်သည် |
| `process_refund()` | ငွေပြန်အမ်းရန် တောင်းဆိုမှုများကို ကိုင်တွယ်သည် |
| `get_payment_methods()` | customer အတွက် သိမ်းဆည်းထားသော ငွေပေးချေမှုနည်းလမ်းများကို ပြန်ပေးသည် |

## ထပ်တလဲလဲ membership များအတွက် renewal credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 တွင် gateway integration များသည် `auto_renew` ကို သိမ်းဆည်းမထားမီ ထပ်တလဲလဲ membership တစ်ခုတွင် ပြန်သုံးနိုင်သော renewal credential ရှိမရှိကို သတင်းပို့နိုင်သည်။ `wu_membership_has_renewal_credential` ကို hook လုပ်ပြီး အောက်ပါတို့ကို ပြန်ပေးပါ-

- membership တွင် gateway subscription၊ billing agreement၊ vault token သို့မဟုတ် ၎င်းနှင့်ညီမျှသော ပြန်သုံးနိုင်သည့် ငွေပေးချေမှုနည်းလမ်း ရှိပါက `true`။
- ထပ်တလဲလဲ credential မရှိကြောင်း သို့မဟုတ် အသုံးမပြုနိုင်ကြောင်း gateway က သိရှိပါက `false`။
- မပါဝင်လိုပြီး မူလအပြုအမူကို မပြောင်းဘဲ ထားလိုပါက `null`။

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

gateway က `false` ပြန်ပေးသောအခါ Ultimate Multisite သည် membership ကို auto-renewal ပိတ်ထားပြီး သိမ်းဆည်းကာ missing-credential marker တစ်ခု သိမ်းထားသည်။ စီမံခန့်ခွဲသူများကို အသိပေးရန်၊ re-authorization flow တစ်ခု စတင်ရန် သို့မဟုတ် support notes ထည့်ရန် `wu_membership_renewal_credential_missing` ကို အသုံးပြုပါ-

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

ပြန်သုံးနိုင်သော credential အသစ်တစ်ခု သိမ်းဆည်းပြီးနောက် သင်၏ gateway ၏ အောင်မြင်သော re-authorization flow ၏ အစိတ်အပိုင်းအဖြစ် missing-credential marker ကို ရှင်းလင်းပါ။

## အကြံပြုချက်များ {#tips}

- မအောင်မြင်ပါက Ultimate Multisite က အမှားပြသမှုကို ကိုင်တွယ်နိုင်ရန် `WP_Error` ကို အမြဲ ပြန်ပေးပါ
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-specific logging အတွက် `wu_log_add()` ကို အသုံးပြုပါ

## AI connector provider လုပ်ဆောင်နိုင်စွမ်းများ {#ai-connector-provider-capabilities}

AI connector-backed လုပ်ဆောင်ချက်များကို ခေါ်သည့် စိတ်ကြိုက် integration များသည် AI Provider for Anthropic Max v1.3.0 နှင့် မိတ်ဆက်ထားသော ပံ့ပိုးထားသည့် OAuth provider စုစည်းမှုနှင့် ကိုက်ညီသင့်သည်-

| Provider | လုပ်ဆောင်နိုင်စွမ်း မှတ်စုများ |
|---|---|
| **Anthropic Max** | ရှိပြီးသား OAuth Account pool workflow ကို ပံ့ပိုးသည်။ connector request များကို proxy လုပ်သည့်အခါ empty tool arrays နှင့် round-trip thinking signatures အပါအဝင် Anthropic tool-use payloads များကို မပြောင်းလဲဘဲ ထိန်းသိမ်းပါ။ |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow နှင့် connector-supported operations အတွက် tool-support အပြည့်အစုံကို ပံ့ပိုးသည်။ tool definitions နှင့် tool-call results များကို Codex-specific tool metadata မဖယ်ရှားဘဲ ဆက်လက်ပေးပို့ပါ။ |
| **Google AI Pro** | OAuth pool workflow နှင့် SDK-backed provider integration ကို ပံ့ပိုးသည်။ request များကို route မလုပ်မီ OAuth ပြီးဆုံးပြီးနောက် provider Account များကို refresh လုပ်ပါ။ |

Cursor Pro integration နှင့် setup pathways များကို ဖယ်ရှားပြီးဖြစ်သည်။ Cursor Pro ကို ရွေးချယ်နိုင်သော provider အဖြစ် မှတ်ပုံမတင်ပါနှင့်၊ သို့မဟုတ် စိတ်ကြိုက် connector UI များတွင် Cursor-specific OAuth လမ်းညွှန်ချက်များ မပြပါနှင့်။

sandboxed သို့မဟုတ် headless ပတ်ဝန်းကျင်များအတွက် စီမံခန့်ခွဲသူများသည် ပြန်ရရှိသော authorization data ကို paste လုပ်ပြီး automatic browser redirect အပေါ် မမူတည်ဘဲ Account ချိတ်ဆက်မှု ပြီးစီးစေရန် manual OAuth fallback path ကို ဖော်ပြပေးပါ။
