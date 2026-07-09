---
title: Phát triển cổng tùy chỉnh
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Phát triển Gateway tùy chỉnh

Bạn có thể tạo các gateway thanh toán tùy chỉnh bằng cách mở rộng class `Base_Gateway`.

## Class Gateway

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

## Các phương thức chính

| Phương thức | Mục đích |
|--------|---------|
| `process_single_payment()` | Xử lý các khoản thanh toán một lần |
| `process_signup()` | Thiết lập các đăng ký định kỳ |
| `process_refund()` | Xử lý các yêu cầu hoàn tiền |
| `get_payment_methods()` | Trả về các phương thức thanh toán đã lưu cho một khách hàng |

## Thông tin xác thực gia hạn cho các gói thành viên định kỳ

Ultimate Multisite v2.13.0 cho phép các tích hợp gateway báo cáo liệu một gói thành viên định kỳ có thông tin xác thực gia hạn có thể tái sử dụng hay không trước khi `auto_renew` được lưu. Hook `wu_membership_has_renewal_credential` và trả về:

- `true` khi gói thành viên có một gói đăng ký gateway, thỏa thuận thanh toán, vault token, hoặc phương thức thanh toán có thể tái sử dụng tương đương.
- `false` khi gateway biết thông tin xác thực định kỳ bị thiếu hoặc không thể sử dụng.
- `null` để không tham gia và giữ nguyên hành vi mặc định không thay đổi.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Khi một gateway trả về `false`, Ultimate Multisite lưu gói thành viên với tính năng tự động gia hạn bị tắt và lưu một dấu hiệu thiếu thông tin xác thực. Sử dụng `wu_membership_renewal_credential_missing` để thông báo cho quản trị viên, bắt đầu luồng ủy quyền lại, hoặc thêm ghi chú hỗ trợ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Xóa dấu hiệu thiếu thông tin xác thực như một phần trong luồng ủy quyền lại thành công của gateway của bạn sau khi một thông tin xác thực có thể tái sử dụng mới được lưu.

## Mẹo

- Luôn trả về `WP_Error` khi thất bại để Ultimate Multisite có thể xử lý hiển thị lỗi
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Sử dụng `wu_log_add()` để ghi log dành riêng cho gateway

## Khả năng của nhà cung cấp trình kết nối AI

Các tích hợp tùy chỉnh gọi các thao tác dựa trên trình kết nối AI nên phù hợp với tập hợp nhà cung cấp OAuth được hỗ trợ đã giới thiệu với AI Provider for Anthropic Max v1.3.0:

| Nhà cung cấp | Ghi chú về khả năng |
|---|---|
| **Anthropic Max** | Hỗ trợ workflow nhóm Account OAuth hiện có. Giữ nguyên các payload sử dụng công cụ của Anthropic, bao gồm các mảng công cụ rỗng và chữ ký suy nghĩ khứ hồi, khi proxy các yêu cầu trình kết nối. |
| **OpenAI ChatGPT/Codex** | Hỗ trợ workflow nhóm OAuth và đầy đủ hành vi hỗ trợ công cụ cho các thao tác được trình kết nối hỗ trợ. Truyền các định nghĩa công cụ và kết quả gọi công cụ xuyên suốt mà không loại bỏ siêu dữ liệu công cụ dành riêng cho Codex. |
| **Google AI Pro** | Hỗ trợ workflow nhóm OAuth và tích hợp nhà cung cấp dựa trên SDK. Làm mới các Account nhà cung cấp sau khi hoàn tất OAuth trước khi định tuyến yêu cầu. |

Tích hợp và các lộ trình thiết lập Cursor Pro đã bị gỡ bỏ. Không đăng ký Cursor Pro làm nhà cung cấp có thể chọn hoặc trình bày hướng dẫn OAuth dành riêng cho Cursor trong UI trình kết nối tùy chỉnh.

Đối với các môi trường sandbox hoặc headless, hãy hiển thị đường dẫn dự phòng OAuth thủ công để quản trị viên có thể dán dữ liệu ủy quyền được trả về và hoàn tất kết nối Account mà không phụ thuộc vào chuyển hướng trình duyệt tự động.
