---
title: حسب ضرورت گيٽ وي جي ترقي
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ڪسٽم Gateway ڊولپمينٽ {#custom-gateway-development}

توهان `Base_Gateway` ڪلاس کي وڌائي ڪسٽم ادائيگي gateways ٺاهي سگهو ٿا.

## Gateway ڪلاس {#gateway-class}

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

## Gateway رجسٽر ڪريو {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## اهم طريقا {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | هڪ-وقتي ادائيگيون سنڀاليو |
| `process_signup()` | ٻيهر ٿيندڙ subscriptions سيٽ اپ ڪريو |
| `process_refund()` | refund درخواستون سنڀاليو |
| `get_payment_methods()` | customer لاءِ محفوظ ٿيل ادائيگي جا طريقا واپس ڪريو |

## ٻيهر ٿيندڙ memberships لاءِ renewal اسناد {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway integrations کي اجازت ڏئي ٿو ته اهي رپورٽ ڪن ته ڇا ٻيهر ٿيندڙ membership وٽ `auto_renew` محفوظ ٿيڻ کان اڳ ٻيهر استعمال لائق renewal سند آهي. `wu_membership_has_renewal_credential` کي hook ڪريو ۽ واپس ڪريو:

- `true` جڏهن membership وٽ gateway subscription، billing agreement، vault token، يا برابر ٻيهر استعمال لائق ادائيگي جو طريقو هجي.
- `false` جڏهن gateway کي خبر هجي ته ٻيهر ٿيندڙ سند غائب يا ناقابلِ استعمال آهي.
- `null` opt out ڪرڻ لاءِ ۽ default رويي کي اڻبدليل رکڻ لاءِ.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

جڏهن gateway `false` واپس ڪري ٿو، Ultimate Multisite membership کي auto-renewal بند سان محفوظ ڪري ٿو ۽ غائب-سند جو marker محفوظ ڪري ٿو. منتظمين کي اطلاع ڏيڻ، re-authorization وهڪرو شروع ڪرڻ، يا support نوٽس شامل ڪرڻ لاءِ `wu_membership_renewal_credential_missing` استعمال ڪريو:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

نئين ٻيهر استعمال لائق سند محفوظ ٿيڻ کان پوءِ پنهنجي gateway جي ڪامياب re-authorization وهڪري جي حصي طور غائب-سند marker صاف ڪريو.

## صلاحون {#tips}

- ناڪامي تي هميشه `WP_Error` واپس ڪريو ته جيئن Ultimate Multisite غلطي جي ڏيک کي سنڀالي سگهي
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-مخصوص logging لاءِ `wu_log_add()` استعمال ڪريو

## AI connector provider صلاحيتون {#ai-connector-provider-capabilities}

ڪسٽم integrations جيڪي AI connector-backed عملن کي call ڪن ٿيون، انهن کي AI Provider for Anthropic Max v1.3.0 سان متعارف ڪرايل supported OAuth provider سيٽ سان هم آهنگ ٿيڻ گهرجي:

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | موجوده OAuth account pool workflow کي support ڪري ٿو. connector درخواستن کي proxy ڪندي Anthropic tool-use payloads محفوظ رکو، جنهن ۾ خالي tool arrays ۽ round-trip thinking signatures شامل آهن. |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow ۽ connector-supported عملن لاءِ مڪمل tool-support رويي کي support ڪري ٿو. tool definitions ۽ tool-call نتيجا Codex-specific tool metadata هٽائڻ کان سواءِ گذاريو. |
| **Google AI Pro** | OAuth pool workflow ۽ SDK-backed provider integration کي support ڪري ٿو. OAuth مڪمل ٿيڻ کان پوءِ درخواستن جي routing کان اڳ provider accounts refresh ڪريو. |

Cursor Pro integration ۽ setup رستا هٽايا ويا آهن. Cursor Pro کي selectable provider طور رجسٽر نه ڪريو يا ڪسٽم connector UIs ۾ Cursor-specific OAuth هدايتون پيش نه ڪريو.

sandboxed يا headless ماحولن لاءِ، manual OAuth fallback path ظاهر ڪريو ته جيئن منتظمين واپس آيل authorization data پيسٽ ڪري سگهن ۽ automatic browser redirect تي ڀاڙڻ کان سواءِ account connection مڪمل ڪري سگهن.
