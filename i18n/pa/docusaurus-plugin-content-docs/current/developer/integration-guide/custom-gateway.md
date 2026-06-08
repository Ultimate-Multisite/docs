---
title: ਕਸਟਮ ਗੇਟਵੇ ਡਿਵੈਲਪਮੈਂਟ
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# ਕਸਟਮ ਪੇਮੈਂਟ ਗੇਟਵੇ ਕਿਵੇਂ ਬਣਾਉਣ

ਤੁਸੀਂ `Base_Gateway` class ਨੂੰ extend ਕਰਕੇ ਕਸਟਮ ਪੇਮੈਂਟ ਗੇਟਵੇ ਬਣਾ ਸਕਦੇ ਹੋ।

## Gateway Class

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

## Register the Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Key Methods

| Method | ਮਕਸਦ |
|--------|---------|
| `process_single_payment()` | ਇੱਕ ਵਾਰ ਦੇ ਪੇਮੈਂਟ ਨੂੰ ਸੰਭਾਲਣਾ |
| `process_signup()` | ਲਗਾਤਾਰ (recurring) ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਸੈੱਟ ਕਰਨਾ |
| `process_refund()` | ਰਿਫੰਡ ਦੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਸੰਭਾਲਣਾ |
| `get_payment_methods()` | ਗਾਹਕ ਲਈ ਸੇਵ ਕੀਤੇ ਪੇਮੈਂਟ ਦੇ ਤਰੀਕੇ ਵਾਪਸ ਕਰਨਾ |

## Tips

- ਹਮੇਸ਼ਾ `WP_Error` ਵਾਪਸ ਕਰੋ ਜੇ ਕੋਈ ਗਲਤੀ ਹੋਵੇ, ਤਾਂ ਜੋ Ultimate Multisite ਗਲਤੀ ਦਿਖਾ ਸਕਦਾ ਹੋਵੇ
- ਇਹ ਦੱਸਣ ਲਈ ਕਿ ਤੁਹਾਡਾ ਗੇਟਵੇ ਕਿਹੜੇ ਪੇਮੈਂਟ ਕਿਸਮਾਂ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ (`one-time`, `recurring`), `$this->supports` ਸੈੱਟ ਕਰੋ
- ਗੇਟਵੇ ਨਾਲ ਸਬੰਧਤ ਲੌਗਿੰਗ ਲਈ `wu_log_add()` ਦੀ ਵਰਤੋਂ ਕਰੋ
