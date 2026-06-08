---
title: Uendelezaji wa Milango Maalum
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Kuunda Milango ya Malipo Maalum

Unaweza kuunda milango ya malipo maalum kwa kuimarisha (extend) darasa la `Base_Gateway`.

## Darasa la Gateway

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

## Kusajili Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mifumo Mikuu (Key Methods)

| Njia | Madhumuni |
|--------|---------|
| `process_single_payment()` | Inashughulikia malipo ya mara moja |
| `process_signup()` | Kuandaa usajili wa mara kwa mara |
| `process_refund()` | Kushughulikia maombi ya kurejesha pesa (refund) |
| `get_payment_methods()` | Kurudisha njia za malipo zilizohifadhiwa kwa mteja |

## Vidokezo

- Daima rudisha `WP_Error` unapokumbana na hitilafu ili Ultimate Multisite iweze kushughulikia kuonyesha makosa.
- Weka `$this->supports` ili kutangaza aina gani za malipo gateway yako inashughulikia (`one-time`, `recurring`).
- Tumia `wu_log_add()` kwa ajili ya kurekodi (logging) taarifa maalum za gateway.
