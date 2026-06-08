---
title: कस्टम गेटवे डेवलपमेंट
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# कस्टम गेटवे डेवलपमेंट

आप `Base_Gateway` क्लास को एक्सटेंड करके कस्टम पेमेंट गेटवे बना सकते हैं।

## गेटवे क्लास (Gateway Class)

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

## गेटवे रजिस्टर करना (Register the Gateway)

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## मुख्य मेथड्स (Key Methods)

| Method | उद्देश्य |
|--------|---------|
| `process_single_payment()` | एक बार के भुगतान को संभालना |
| `process_signup()` | आवर्ती सब्सक्रिप्शन सेट करना |
| `process_refund()` | रिफंड अनुरोधों को संभालना |
| `get_payment_methods()` | ग्राहक के लिए सहेजे गए पेमेंट मेथड्स वापस करना |

## सुझाव (Tips)

- हमेशा `WP_Error` रिटर्न करें, खासकर जब कोई विफलता हो, ताकि Ultimate Multisite एरर डिस्प्ले को संभाल सके।
- यह बताने के लिए कि आपका गेटवे कौन से पेमेंट प्रकार संभालता है (`one-time`, `recurring`), `$this->supports` सेट करें।
- गेटवे-विशिष्ट लॉगिंग के लिए `wu_log_add()` का उपयोग करें।
