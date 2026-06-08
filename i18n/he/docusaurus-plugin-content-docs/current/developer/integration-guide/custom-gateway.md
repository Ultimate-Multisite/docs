---
title: פיתוח שער נתונים מותאם אישית
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# פיתוח שער תשלום מותאם אישית

ניתן ליצור שערי תשלום מותאמים אישית על ידי הרחבת המחלקה `Base_Gateway`.

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

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | טיפול בתשלומים חד-פעמיים |
| `process_signup()` | הגדרת מנויים חוזרים |
| `process_refund()` | טיפול בבקשות החזר כספי |
| `get_payment_methods()` | החזרת אמצעי תשלום שנשמרו עבור לקוח |

## Tips

- תמיד יש להחזיר `WP_Error` במקרה של כישלון, כדי ש-Ultimate Multisite יוכל לטפל בהצגת השגיאה.
- הגדר את `$this->supports` כדי להצהיר אילו סוגי תשלום ה-gateway שלך תומך בהם (`one-time`, `recurring`).
- השתמש ב-`wu_log_add()` לצורך רישום יומן (logging) ספציפי ל-gateway.
