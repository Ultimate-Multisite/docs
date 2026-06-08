---
title: Xüsusi Gateway İnkişafı
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Xüsusi Gateway İnkişafı

`Base_Gateway` sinifini genişləndirərək xüsusi ödəniş gatewayləri yarada bilərsiniz.

## Gateway Sinifi

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

## Gateway-i Qeydiyyatdan Keçirmək

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Əsas Metodlar

| Method | Məqsədi |
|--------|---------|
| `process_single_payment()` | Bir dəfəlik ödənişləri idarə etmək |
| `process_signup()` | Təkrar olan abunəlikləri qurmaq |
| `process_refund()` | Təvdiə (refund) sorğularını idarə etmək |
| `get_payment_methods()` | Müştəri üçün yadda saxlanılmış ödəniş üsullarını qaytarır |

## Məsləhətlər

- Başarı olmadığı zaman həmişə `WP_Error` qaytarın ki, Ultimate Multisite səhv göstəricisini idarə edə bilsin.
- Gateway-inizin hansı ödəniş növlərini dəstəklədiyini bildirmək üçün `$this->supports` dəyərini təyin edin (`one-time`, `recurring`).
- Gateway-ə xas loglama üçün `wu_log_add()` istifadə edin.
