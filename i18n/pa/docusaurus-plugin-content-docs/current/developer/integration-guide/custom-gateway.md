---
title: ਕਸਟਮ Gateway ਵਿਕਾਸ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ਕਸਟਮ ਗੇਟਵੇ ਵਿਕਾਸ {#custom-gateway-development}

ਤੁਸੀਂ `Base_Gateway` ਕਲਾਸ ਨੂੰ ਵਧਾ ਕੇ ਕਸਟਮ ਭੁਗਤਾਨ ਗੇਟਵੇ ਬਣਾ ਸਕਦੇ ਹੋ।

## ਗੇਟਵੇ ਕਲਾਸ {#gateway-class}

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

## ਗੇਟਵੇ ਰਜਿਸਟਰ ਕਰੋ {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ਮੁੱਖ ਵਿਧੀਆਂ {#key-methods}

| ਵਿਧੀ | ਉਦੇਸ਼ |
|--------|---------|
| `process_single_payment()` | ਇੱਕ-ਵਾਰ ਦੇ ਭੁਗਤਾਨ ਸੰਭਾਲੋ |
| `process_signup()` | ਦੁਹਰਾਈਆਂ ਜਾਣ ਵਾਲੀਆਂ ਸਬਸਕ੍ਰਿਪਸ਼ਨਾਂ ਸੈੱਟ ਅੱਪ ਕਰੋ |
| `process_refund()` | ਰਿਫੰਡ ਬੇਨਤੀਆਂ ਸੰਭਾਲੋ |
| `get_payment_methods()` | ਗਾਹਕ ਲਈ ਸੰਭਾਲੀਆਂ ਭੁਗਤਾਨ ਵਿਧੀਆਂ ਵਾਪਸ ਕਰੋ |

## ਦੁਹਰਾਈਆਂ ਜਾਣ ਵਾਲੀਆਂ ਮੈਂਬਰਸ਼ਿਪਾਂ ਲਈ ਨਵੀਨੀਕਰਨ ਪ੍ਰਮਾਣ-ਪੱਤਰ {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ਗੇਟਵੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ ਨੂੰ ਇਹ ਰਿਪੋਰਟ ਕਰਨ ਦਿੰਦਾ ਹੈ ਕਿ ਕੀ ਕਿਸੇ ਦੁਹਰਾਈ ਜਾਣ ਵਾਲੀ ਮੈਂਬਰਸ਼ਿਪ ਕੋਲ `auto_renew` ਨੂੰ ਸਥਾਈ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਮੁੜ ਵਰਤੋਂਯੋਗ ਨਵੀਨੀਕਰਨ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਹੈ। `wu_membership_has_renewal_credential` ਨੂੰ ਹੁੱਕ ਕਰੋ ਅਤੇ ਵਾਪਸ ਕਰੋ:

- `true` ਜਦੋਂ ਮੈਂਬਰਸ਼ਿਪ ਕੋਲ ਗੇਟਵੇ ਸਬਸਕ੍ਰਿਪਸ਼ਨ, ਬਿਲਿੰਗ ਸਮਝੌਤਾ, ਵਾਲਟ ਟੋਕਨ, ਜਾਂ ਸਮਕੱਖ ਮੁੜ ਵਰਤੋਂਯੋਗ ਭੁਗਤਾਨ ਵਿਧੀ ਹੋਵੇ।
- `false` ਜਦੋਂ ਗੇਟਵੇ ਜਾਣਦਾ ਹੋਵੇ ਕਿ ਦੁਹਰਾਈ ਜਾਣ ਵਾਲਾ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਗੁੰਮ ਹੈ ਜਾਂ ਵਰਤਣਯੋਗ ਨਹੀਂ ਹੈ।
- `null` ਬਾਹਰ ਰਹਿਣ ਲਈ ਅਤੇ ਡਿਫਾਲਟ ਵਿਵਹਾਰ ਨੂੰ ਬਦਲਿਆ ਬਿਨਾਂ ਰੱਖਣ ਲਈ।

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ਜਦੋਂ ਕੋਈ ਗੇਟਵੇ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ, Ultimate Multisite ਮੈਂਬਰਸ਼ਿਪ ਨੂੰ ਆਟੋ-ਨਵੀਨੀਕਰਨ ਅਯੋਗ ਨਾਲ ਸੰਭਾਲਦਾ ਹੈ ਅਤੇ ਗੁੰਮ-ਪ੍ਰਮਾਣ-ਪੱਤਰ ਚਿੰਨ੍ਹ ਸੰਭਾਲਦਾ ਹੈ। ਪਰਸ਼ਾਸਕਾਂ ਨੂੰ ਸੂਚਿਤ ਕਰਨ, ਮੁੜ-ਅਧਿਕਾਰਕਰਨ ਪ੍ਰਵਾਹ ਸ਼ੁਰੂ ਕਰਨ, ਜਾਂ ਸਹਾਇਤਾ ਨੋਟ ਜੋੜਨ ਲਈ `wu_membership_renewal_credential_missing` ਵਰਤੋ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

ਨਵਾਂ ਮੁੜ ਵਰਤੋਂਯੋਗ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਸੰਭਾਲੇ ਜਾਣ ਤੋਂ ਬਾਅਦ, ਆਪਣੇ ਗੇਟਵੇ ਦੇ ਸਫਲ ਮੁੜ-ਅਧਿਕਾਰਕਰਨ ਪ੍ਰਵਾਹ ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਗੁੰਮ-ਪ੍ਰਮਾਣ-ਪੱਤਰ ਚਿੰਨ੍ਹ ਸਾਫ਼ ਕਰੋ।

## ਸੁਝਾਅ {#tips}

- ਅਸਫਲਤਾ ’ਤੇ ਹਮੇਸ਼ਾ `WP_Error` ਵਾਪਸ ਕਰੋ ਤਾਂ ਜੋ Ultimate Multisite ਤਰੁੱਟੀ ਦਿਖਾਵਟ ਸੰਭਾਲ ਸਕੇ
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ਗੇਟਵੇ-ਖਾਸ ਲੌਗਿੰਗ ਲਈ `wu_log_add()` ਵਰਤੋ

## AI ਕਨੈਕਟਰ ਪਰਦਾਤਾ ਸਮਰੱਥਾਵਾਂ {#ai-connector-provider-capabilities}

AI ਕਨੈਕਟਰ-ਸਹਾਇਤ ਕਾਰਵਾਈਆਂ ਨੂੰ ਕਾਲ ਕਰਨ ਵਾਲੀਆਂ ਕਸਟਮ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ ਨੂੰ AI Provider for Anthropic Max v1.3.0 ਨਾਲ ਪੇਸ਼ ਕੀਤੇ ਸਮਰਥਿਤ OAuth ਪਰਦਾਤਾ ਸੈੱਟ ਨਾਲ ਮਿਲਾਉਣਾ ਚਾਹੀਦਾ ਹੈ:

| ਪਰਦਾਤਾ | ਸਮਰੱਥਾ ਨੋਟ |
|---|---|
| **Anthropic Max** | ਮੌਜੂਦਾ OAuth Account ਪੂਲ ਵਰਕਫਲੋ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। ਕਨੈਕਟਰ ਬੇਨਤੀਆਂ ਨੂੰ ਪ੍ਰਾਕਸੀ ਕਰਦੇ ਸਮੇਂ Anthropic ਟੂਲ-ਵਰਤੋਂ ਪੇਲੋਡਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖੋ, ਜਿਸ ਵਿੱਚ ਖਾਲੀ ਟੂਲ ਐਰੇ ਅਤੇ ਰਾਊਂਡ-ਟ੍ਰਿਪ ਸੋਚਣ ਵਾਲੇ ਦਸਤਖ਼ਤ ਸ਼ਾਮਲ ਹਨ। |
| **OpenAI ChatGPT/Codex** | OAuth ਪੂਲ ਵਰਕਫਲੋ ਅਤੇ ਕਨੈਕਟਰ-ਸਮਰਥਿਤ ਕਾਰਵਾਈਆਂ ਲਈ ਪੂਰੇ ਟੂਲ-ਸਹਾਇਤਾ ਵਿਵਹਾਰ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। Codex-ਖਾਸ ਟੂਲ ਮੈਟਾਡਾਟਾ ਹਟਾਏ ਬਿਨਾਂ ਟੂਲ ਪਰਿਭਾਸ਼ਾਵਾਂ ਅਤੇ ਟੂਲ-ਕਾਲ ਨਤੀਜਿਆਂ ਨੂੰ ਅੱਗੇ ਭੇਜੋ। |
| **Google AI Pro** | OAuth ਪੂਲ ਵਰਕਫਲੋ ਅਤੇ SDK-ਸਹਾਇਤ ਪਰਦਾਤਾ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। ਬੇਨਤੀਆਂ ਰੂਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ OAuth ਪੂਰਨਤਾ ਤੋਂ ਬਾਅਦ ਪਰਦਾਤਾ Accounts ਰਿਫ੍ਰੈਸ਼ ਕਰੋ। |

Cursor Pro ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਅਤੇ ਸੈੱਟਅੱਪ ਮਾਰਗ ਹਟਾ ਦਿੱਤੇ ਗਏ ਹਨ। Cursor Pro ਨੂੰ ਚੁਣਨਯੋਗ ਪਰਦਾਤਾ ਵਜੋਂ ਰਜਿਸਟਰ ਨਾ ਕਰੋ ਜਾਂ ਕਸਟਮ ਕਨੈਕਟਰ UIs ਵਿੱਚ Cursor-ਖਾਸ OAuth ਨਿਰਦੇਸ਼ ਪੇਸ਼ ਨਾ ਕਰੋ।

ਸੈਂਡਬਾਕਸ ਜਾਂ ਹੈਡਲੈੱਸ ਵਾਤਾਵਰਣਾਂ ਲਈ, ਮੈਨੂਅਲ OAuth ਫਾਲਬੈਕ ਮਾਰਗ ਪ੍ਰਗਟ ਕਰੋ ਤਾਂ ਜੋ ਪਰਸ਼ਾਸਕ ਵਾਪਸ ਆਇਆ ਅਧਿਕਾਰਕਰਨ ਡਾਟਾ ਪੇਸਟ ਕਰ ਸਕਣ ਅਤੇ ਆਟੋਮੈਟਿਕ ਬ੍ਰਾਊਜ਼ਰ ਰੀਡਾਇਰੈਕਟ ’ਤੇ ਨਿਰਭਰ ਕੀਤੇ ਬਿਨਾਂ Account ਕਨੈਕਸ਼ਨ ਪੂਰਾ ਕਰ ਸਕਣ।
