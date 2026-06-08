---
title: కస్టమ్ గేట్‌వే డెవలప్‌మెంట్
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# కస్టమ్ గేట్‌వే డెవలప్‌మెంట్

మీరు `Base_Gateway` క్లాస్‌ను ఎక్స్‌టెండ్ చేయడం ద్వారా కస్టమ్ పేమెంట్ గేట్‌వేలను సృష్టించవచ్చు.

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

| Method | ఉద్దేశం |
|--------|---------|
| `process_single_payment()` | వన్-టైమ్ పేమెంట్‌లను నిర్వహించడం |
| `process_signup()` | పునరావృత సబ్‌స్క్రిప్షన్‌లను సెటప్ చేయడం |
| `process_refund()` | రీఫండ్ రిక్వెస్ట్‌లను నిర్వహించడం |
| `get_payment_methods()` | కస్టమర్ కోసం సేవ్ చేయబడిన పేమెంట్ పద్ధతులను తిరిగి ఇవ్వడం |

## Tips

- Ultimate Multisite లో ఎర్రర్ డిస్‌ప్లేను నిర్వహించడానికి, ఎప్పుడూ విఫలమైనప్పుడు `WP_Error` ను తిరిగి ఇవ్వండి.
- మీ గేట్‌వే ఏ రకమైన పేమెంట్ రకాలను హ్యాండిల్ చేస్తుందో ప్రకటించడానికి `$this->supports` ను సెట్ చేయండి (`one-time`, `recurring`).
- గేట్‌వేకు సంబంధించిన లాగింగ్ కోసం `wu_log_add()` ను ఉపయోగించండి.
