---
title: การจัดการ Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook Handling

สร้าง endpoint webhooks แบบกำหนดเองเพื่อรับเหตุการณ์ (events) จากบริการภายนอก และซิงค์ข้อมูลกับ Ultimate Multisite

## Custom Webhook Endpoint

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

## Security Considerations

- ควรตรวจสอบลายเซ็น (signature) ของ webhook เสมอ โดยใช้ HMAC หรือ Shared Secret
- ใช้ `permission_callback` สำหรับ REST route ของคุณเสมอ — ห้ามตั้งค่าเป็น `__return_true` ในสภาพแวดล้อมจริง (production)
- ตรวจสอบความถูกต้อง (Validate) และทำความสะอาด (Sanitize) ข้อมูล payload ที่เข้ามาทั้งหมดก่อนนำไปใช้งาน
- ส่งคืน HTTP status code ที่เหมาะสม (เช่น 200 สำหรับสำเร็จ, 400 สำหรับคำขอที่ไม่ถูกต้อง)
