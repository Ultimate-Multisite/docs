---
title: کسٹم گیٹ وے ڈویلپمنٹ
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# کسٹم گیٹ وے کی تیاری

آپ `Base_Gateway` کلاس کو بڑھا کر (extend کر کے) کسٹم پیمنٹ گیٹ وے بنا سکتے ہیں۔

## گیٹ وے کلاس

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

## گیٹ وے کو رجسٹر کرنا

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## اہم طریقے (Key Methods)

| طریقہ | مقصد |
|--------|---------|
| `process_single_payment()` | ایک بار کی ادائیگیوں کو سنبھالنا |
| `process_signup()` | بار بار ہونے والی سبسکرپشنز سیٹ کرنا |
| `process_refund()` | ریفنڈ کی درخواستوں کو سنبھالنا |
| `get_payment_methods()` | کسٹمر کے لیے محفوظ پیمنٹ طریقے واپس کرنا |

## تجاویز (Tips)

- ہمیشہ `WP_Error` واپس کریں جب کوئی خرابی ہو، تاکہ Ultimate Multisite ایرر دکھا سکے۔
- یہ بتانے کے لیے کہ آپ کا گیٹ وے کون سے پیمنٹ کی اقسام کو سنبھالتا ہے (`one-time`, `recurring`)، `$this->supports` سیٹ کریں۔
- گیٹ وے سے متعلقہ لاگنگ کے لیے `wu_log_add()` استعمال کریں۔
