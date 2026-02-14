---
title: تطوير بوابة مخصصة
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# تطوير بوابة مخصصة

يمكنك إنشاء بوابات دفع مخصصة عن طريق توسيع فئة `Base_Gateway`.

## فئة البوابة

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

## تسجيل البوابة

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## الطرق الرئيسية

| الطريقة | الغرض |
|--------|---------|
| `process_single_payment()` | معالجة المدفوعات لمرة واحدة |
| `process_signup()` | إعداد الاشتراكات المتكررة |
| `process_refund()` | معالجة طلبات الاسترداد |
| `get_payment_methods()` | إرجاع طرق الدفع المحفوظة للعميل |

## نصائح

- أرجع دائمًا `WP_Error` عند الفشل حتى يتمكن Ultimate Multisite من معالجة عرض الخطأ
- اضبط `$this->supports` لتحديد أنواع المدفوعات التي تديرها البوابة (`one-time`, `recurring`)
- استخدم `wu_log_add()` لتسجيل سجلات خاصة بالبوابة
