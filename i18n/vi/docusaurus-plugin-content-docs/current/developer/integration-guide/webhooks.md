---
title: Xử lý Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Xử lý Webhook

Tạo các điểm cuối webhook tùy chỉnh để nhận sự kiện từ các dịch vụ bên ngoài và đồng bộ hóa dữ liệu với Ultimate Multisite.

## Điểm cuối Webhook Tùy chỉnh {#custom-webhook-endpoint}

```php
// Register webhook endpoint
add_action('rest_api_init', function() {
    register_rest_route('my-addon/v1', '/webhook', [
        'methods' => 'POST',
        'callback' => 'handle_my_webhook',
        'permission_callback' => 'verify_webhook_signature'
    ]);
});

function handle_my_webhook($request) {
    $payload = $request->get_json_params();

    switch ($payload['event_type']) {
        case 'customer.updated':
            $customer = wu_get_customer($payload['customer_id']);
            if ($customer) {
                $customer->set_vip($payload['data']['is_vip']);
                $customer->save();
            }
            break;

        case 'subscription.cancelled':
            $membership = wu_get_membership_by_hash($payload['subscription_id']);
            if ($membership) {
                $membership->cancel();
            }
            break;
    }

    return ['status' => 'processed'];
}

function verify_webhook_signature($request) {
    $signature = $request->get_header('X-Webhook-Signature');
    $payload = $request->get_body();
    $secret = get_option('my_webhook_secret');

    return hash_hmac('sha256', $payload, $secret) === $signature;
}
```

## Lưu ý về bảo mật {#security-considerations}

- Luôn xác minh chữ ký webhook bằng HMAC hoặc một khóa bí mật chung.
- Sử dụng `permission_callback` trên tuyến đường REST của bạn — không bao giờ đặt nó thành `__return_true` trong môi trường sản xuất (production).
- Xác thực và làm sạch tất cả dữ liệu payload nhận vào trước khi xử lý.
- Trả về các mã trạng thái HTTP phù hợp (200 cho thành công, 400 cho yêu cầu không hợp lệ).
