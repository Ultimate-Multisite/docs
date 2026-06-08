---
title: Pagbuo ng Custom Gateway
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Pagbuo ng Sariling Gateway

Maaari kang gumawa ng sarili mong payment gateway sa pamamagitan ng pag-extend sa `Base_Gateway` class.

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

## Pagpaparehistro ng Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mga Pangunahing Method

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Para sa paghawak ng mga bayad na isang beses lang |
| `process_signup()` | Para mag-set up ng mga subscription na paulit-ulit |
| `process_refund()` | Para sa paghawak ng mga hiling na refund |
| `get_payment_methods()` | Ipapalabas ang mga naka-save na paraan ng pagbabayad para sa isang customer |

## Mga Tip

- Kailangan mong palaging mag-return ng `WP_Error` kapag may failure para ma-handle ng Ultimate Multisite ang pagpapakita ng error
- I-set ang `$this->supports` para ipahayag kung anong uri ng bayad ang kaya ng gateway mo (`one-time`, `recurring`)
- Gamitin ang `wu_log_add()` para sa pag-log na specific sa gateway
