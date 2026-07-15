---
title: مدیریت وب‌هوک
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# مدیریت Webhook

نحوه ایجاد Endpointهای Webhook سفارشی برای دریافت رویدادها از سرویس‌های خارجی و همگام‌سازی داده‌ها با Ultimate Multisite.

## Endpoint Webhook سفارشی {#custom-webhook-endpoint}

```php
// ثبت Endpoint Webhook
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

## ملاحظات امنیتی {#security-considerations}

- همیشه امضای Webhook را با استفاده از HMAC یا یک کلید مخفی مشترک (shared secret) تأیید کنید.
- در مسیر REST خود از یک `permission_callback` استفاده کنید — هرگز آن را در محیط Production روی `__return_true` قرار ندهید.
- تمام داده‌های دریافتی در Payload را اعتبارسنجی (validate) و پاکسازی (sanitize) کنید قبل از اینکه با آن‌ها عملی انجام دهید.
- کدهای وضعیت HTTP مناسب را برگردانید (مثلاً ۲۰۰ برای موفقیت، و ۴۰۰ برای درخواست‌های نامعتبر).
