---
title: توسعه دروازه سفارشی
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# توسعه درگاه پرداخت سفارشی

شما می‌توانید با ارث‌بری (extending) از کلاس `Base_Gateway`، درگاه‌های پرداخت سفارشی بسازید.

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
| `process_single_payment()` | مدیریت پرداخت‌های یک‌باره |
| `process_signup()` | راه‌اندازی اشتراک‌های تکرارشونده |
| `process_refund()` | مدیریت درخواست‌های استرداد وجه (Refund) |
| `get_payment_methods()` | بازگرداندن روش‌های پرداخت ذخیره‌شده برای یک مشتری |

## Tips

- همیشه در صورت شکست، `WP_Error` برگردانید تا Ultimate Multisite بتواند نمایش خطا را مدیریت کند.
- برای اعلام اینکه درگاه پرداخت شما چه نوع پرداخت‌هایی را پشتیبانی می‌کند، `$this->supports` را تنظیم کنید (`one-time`، `recurring`).
- برای لاگ‌برداری مخصوص درگاه پرداخت، از `wu_log_add()` استفاده کنید.
