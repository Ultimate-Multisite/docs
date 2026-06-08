---
title: सानुकूल गेटवे विकास
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# कस्टम गेटवे डेव्हलपमेंट

तुम्ही `Base_Gateway` क्लासला एक्सटेंड करून कस्टम पेमेंट गेटवे तयार करू शकता.

## गेटवे क्लास

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

## गेटवे रजिस्टर करणे

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## महत्त्वाचे मेथड्स

| Method | उद्देश |
|--------|---------|
| `process_single_payment()` | एकदाच होणारे पेमेंट हाताळणे |
| `process_signup()` | पुनरावृत्ती होणारे सबस्क्रिप्शन सेट करणे |
| `process_refund()` | रिफंड विनंत्या हाताळणे |
| `get_payment_methods()` | ग्राहकासाठी सेव्ह केलेले पेमेंट मेथड्स परत करणे |

## टिप्स

- अयशस्वी झाल्यास नेहमी `WP_Error` परत करा, जेणेकरून Ultimate Multisite ला एरर डिस्प्ले हाताळता येईल.
- तुमचा गेटवे कोणते पेमेंट प्रकार हाताळतो हे घोषित करण्यासाठी `$this->supports` सेट करा (`one-time`, `recurring`).
- गेटवे-विशिष्ट लॉगिंगसाठी `wu_log_add()` वापरा.
