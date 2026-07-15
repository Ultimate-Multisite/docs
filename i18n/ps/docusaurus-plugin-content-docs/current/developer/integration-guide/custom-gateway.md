---
title: د ګمرکي Gateway پراختیا
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# د Custom Gateway جوړول

تاسو کولی شئ د `Base_Gateway` کلاس په غځولو سره د تادیې دودیزې دروازې جوړې کړئ.

## د Gateway کلاس {#gateway-class}

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

## Gateway ثبت کړئ {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## مهمې طریقې {#key-methods}

| طریقه | موخه |
|--------|---------|
| `process_single_payment()` | یو ځلنی تادیات سمبالول |
| `process_signup()` | تکراري ګډونونه تنظیمول |
| `process_refund()` | د بېرته ورکړې غوښتنې سمبالول |
| `get_payment_methods()` | د یو پیرودونکي لپاره خوندي شوي د تادیې طریقې بېرته ورکول |

## د تکراري غړیتوبونو لپاره د نوي کولو اعتبارلیکونه {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 د gateway ادغامونو ته اجازه ورکوي چې راپور ورکړي ایا یو تکراري غړیتوب، مخکې له دې چې `auto_renew` خوندي شي، د بیا کارېدونکي نوي کولو اعتبارلیک لري که نه. `wu_membership_has_renewal_credential` هوک کړئ او بېرته ورکړئ:

- `true` کله چې غړیتوب د gateway ګډون، د بلینګ تړون، vault token، یا ورته بیا کارېدونکې د تادیې طریقه ولري.
- `false` کله چې gateway پوهېږي چې تکراري اعتبارلیک نشته یا د کار وړ نه دی.
- `null` د ځان ایستلو لپاره او اصلي چلند بې‌بدله ساتلو لپاره.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

کله چې یو gateway `false` بېرته ورکوي، Ultimate Multisite غړیتوب د اتومات نوي کولو له نافعالېدو سره خوندي کوي او د ورک اعتبارلیک نښه ساتي. د مدیرانو خبرولو، د بیا-اجازې جریان پیلولو، یا د ملاتړ یادښتونو زیاتولو لپاره `wu_membership_renewal_credential_missing` وکاروئ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

وروسته له دې چې نوی بیا کارېدونکی اعتبارلیک خوندي شي، د خپل gateway د بریالي بیا-اجازې جریان د یوې برخې په توګه د ورک اعتبارلیک نښه پاکه کړئ.

## لارښوونې {#tips}

- د ناکامۍ پر مهال تل `WP_Error` بېرته ورکړئ، څو Ultimate Multisite د تېروتنې ښکاره کول سمبال کړي
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- د gateway-ځانګړي ثبتولو لپاره `wu_log_add()` وکاروئ

## د AI connector provider وړتیاوې {#ai-connector-provider-capabilities}

دودیز ادغامونه چې د AI connector پر بنسټ عملیات رابولي، باید د Anthropic Max v1.3.0 لپاره له AI Provider سره معرفي شوي ملاتړ شوي OAuth provider ټولګې سره سمون ولري:

| Provider | د وړتیا یادښتونه |
|---|---|
| **Anthropic Max** | د موجود OAuth Account pool کاري جریان ملاتړ کوي. کله چې د connector غوښتنې proxy کوئ، د Anthropic د وسیلې-کارونې payloadونه، په شمول د تشو وسیلو آرې او د تګ-راتګ thinking لاسلیکونه، وساتئ. |
| **OpenAI ChatGPT/Codex** | د OAuth pool کاري جریان او د connector-ملاتړ شوو عملیاتو لپاره بشپړ د وسیلو-ملاتړ چلند ملاتړ کوي. د وسیلو تعریفونه او د وسیلې-رابلنې پایلې د Codex-ځانګړي وسیلې metadata له لرې کولو پرته تېر کړئ. |
| **Google AI Pro** | د OAuth pool کاري جریان او SDK-پر بنسټ provider ادغام ملاتړ کوي. د غوښتنو د لېږدولو مخکې، د OAuth له بشپړېدو وروسته د provider Accountونه تازه کړئ. |

د Cursor Pro ادغام او تنظیم لارې لرې شوې دي. Cursor Pro د ټاکل کېدونکي provider په توګه مه ثبتوئ او په دودیزو connector UIs کې د Cursor-ځانګړې OAuth لارښوونې مه وړاندې کوئ.

د sandboxed یا headless چاپېریالونو لپاره، د لاسي OAuth بدیل مسیر ښکاره کړئ، څو مدیران بېرته راستنې شوې د اجازې ډاټا ولګوي او د اتومات browser redirect پر تکیې پرته د Account نښلون بشپړ کړي.
