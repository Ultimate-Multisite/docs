---
title: ڪسٽم گيٽ وي جي ترقي
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ڪسٽم گيٽ وي ترقي

توهان `Base_Gateway` ڪلاس کي وڌائي ڪسٽم ادائيگي گيٽ ويز ٺاهي سگهو ٿا.

## گيٽ وي ڪلاس

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

## گيٽ وي رجسٽر ڪريو

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## اهم طريقا

| طريقو | مقصد |
|--------|---------|
| `process_single_payment()` | هڪ ڀيري ٿيندڙ ادائيگيون سنڀاليو |
| `process_signup()` | بار بار ٿيندڙ سبسڪرپشنز سيٽ اپ ڪريو |
| `process_refund()` | واپسي جي درخواستن کي سنڀاليو |
| `get_payment_methods()` | گراهڪ لاءِ محفوظ ڪيل ادائيگي جا طريقا واپس ڪريو |

## بار بار ٿيندڙ رڪنيتن لاءِ تجديد سندون

Ultimate Multisite v2.13.0 گيٽ وي انٽيگريشنز کي رپورٽ ڪرڻ ڏئي ٿو ته ڇا بار بار ٿيندڙ رڪنيت وٽ `auto_renew` محفوظ ٿيڻ کان اڳ ٻيهر استعمال لائق تجديد سند آهي. `wu_membership_has_renewal_credential` کي هوڪ ڪريو ۽ واپس ڪريو:

- `true` جڏهن رڪنيت وٽ گيٽ وي سبسڪرپشن، بلنگ معاهدو، والٽ ٽوڪن، يا برابر ٻيهر استعمال لائق ادائيگي جو طريقو هجي.
- `false` جڏهن گيٽ وي ڄاڻي ٿو ته بار بار ٿيندڙ سند غائب يا ناقابل استعمال آهي.
- `null` ٻاهر نڪرڻ لاءِ ۽ ڊفالٽ رويو اڻبدليل رکڻ لاءِ.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

جڏهن گيٽ وي `false` واپس ڪري ٿو، Ultimate Multisite رڪنيت کي auto-renewal بند سان محفوظ ڪري ٿو ۽ غائب-سند جو نشان محفوظ ڪري ٿو. منتظمين کي اطلاع ڏيڻ، ٻيهر اجازت واري فلو شروع ڪرڻ، يا سپورٽ نوٽس شامل ڪرڻ لاءِ `wu_membership_renewal_credential_missing` استعمال ڪريو:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

نئين ٻيهر استعمال لائق سند محفوظ ٿيڻ کان پوءِ پنهنجي گيٽ وي جي ڪامياب ٻيهر اجازت واري فلو جي حصي طور غائب-سند جو نشان صاف ڪريو.

## صلاحون

- ناڪامي تي هميشه `WP_Error` واپس ڪريو ته جيئن Ultimate Multisite غلطي جي ڏيکاءَ کي سنڀالي سگهي
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- گيٽ وي-مخصوص لاگنگ لاءِ `wu_log_add()` استعمال ڪريو

## AI connector فراهم ڪندڙ جون صلاحيتون

ڪسٽم انٽيگريشنز جيڪي AI connector جي پٺڀرائي وارا آپريشنز سڏين ٿيون، انهن کي AI Provider for Anthropic Max v1.3.0 سان متعارف ڪرايل سپورٽ ٿيل OAuth فراهم ڪندڙ سيٽ سان هم آهنگ هجڻ گهرجي:

| فراهم ڪندڙ | صلاحيتن بابت نوٽس |
|---|---|
| **Anthropic Max** | موجوده OAuth Account pool workflow کي سپورٽ ڪري ٿو. connector درخواستن کي پراڪسي ڪندي Anthropic tool-use payloads، بشمول خالي tool arrays ۽ round-trip thinking signatures، برقرار رکو. |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow ۽ connector-supported آپريشنز لاءِ مڪمل tool-support رويي کي سپورٽ ڪري ٿو. tool definitions ۽ tool-call results کي Codex-specific tool metadata هٽائڻ کان سواءِ اڳتي موڪليو. |
| **Google AI Pro** | OAuth pool workflow ۽ SDK-backed provider integration کي سپورٽ ڪري ٿو. درخواستن جي روٽنگ کان اڳ OAuth مڪمل ٿيڻ کان پوءِ provider اڪائونٽس ريفريش ڪريو. |

Cursor Pro انٽيگريشن ۽ سيٽ اپ رستا هٽايا ويا آهن. Cursor Pro کي چونڊجڻ لائق فراهم ڪندڙ طور رجسٽر نه ڪريو يا ڪسٽم connector UIs ۾ Cursor-specific OAuth هدايتون پيش نه ڪريو.

sandboxed يا headless ماحولن لاءِ، manual OAuth fallback path ظاهر ڪريو ته جيئن منتظم واپس آيل authorization data پيسٽ ڪري سگهن ۽ خودڪار browser redirect تي ڀاڙڻ کان سواءِ account connection مڪمل ڪري سگهن.
