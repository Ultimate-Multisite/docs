---
title: Phát triển Cổng tùy chỉnh
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Phát triển Cổng thanh toán Tùy chỉnh

Bạn có thể tạo các cổng thanh toán tùy chỉnh bằng cách kế thừa (extend) lớp `Base_Gateway`.

## Lớp Gateway

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

## Đăng ký Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Các Phương thức Chính

| Method | Mục đích |
|--------|---------|
| `process_single_payment()` | Xử lý thanh toán một lần |
| `process_signup()` | Thiết lập đăng ký định kỳ |
| `process_refund()` | Xử lý yêu cầu hoàn tiền |
| `get_payment_methods()` | Trả về các phương thức thanh toán đã lưu của khách hàng |

## Mẹo

- Luôn trả về `WP_Error` khi thất bại để Ultimate Multisite có thể xử lý hiển thị lỗi.
- Thiết lập `$this->supports` để khai báo loại thanh toán mà gateway của bạn hỗ trợ (`one-time`, `recurring`).
- Sử dụng `wu_log_add()` để ghi nhật ký (logging) dành riêng cho gateway.
