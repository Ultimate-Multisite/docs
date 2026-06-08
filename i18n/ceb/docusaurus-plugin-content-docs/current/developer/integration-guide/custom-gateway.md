---
title: Pagpalambo sa Custom Gateway
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Paghimo og Custom Gateway

Mahimo ninyong maghimo og mga custom payment gateway pinaagi sa pag-extend sa `Base_Gateway` class.

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

## Iklat ang Gateway

(Kini ang bahin kung unsaon pag-register sa imong custom gateway.)

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mga Importante nga Pamaagi (Key Methods)

| Pamaagi (Method) | Tumong (Purpose) |
|--------|---------|
| `process_single_payment()` | Pag-handle sa mga bayad nga usa ra gyud (one-time payments) |
| `process_signup()` | Pag-set up sa recurring subscriptions |
| `process_refund()` | Pag-handle sa mga request para sa refund |
| `get_payment_methods()` | Pagbalik sa mga na-save nga payment methods para sa usa ka customer |

## Mga Tip (Tips)

- Kanunay magbalik og `WP_Error` kung adunay sayop aron mahimo sa Ultimate Multisite ang pagpakita sa error.
- I-set ang `$this->supports` aron ipahayag kung unsang mga klase sa bayad ang gi-handle sa imong gateway (`one-time`, `recurring`).
- Gamit ang `wu_log_add()` para sa logging nga espesipiko sa gateway.
