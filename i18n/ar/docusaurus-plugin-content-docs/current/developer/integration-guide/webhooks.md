---
title: معالجة الويب هوك
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# معالجة الويب هوك

إنشاء نقاط نهاية ويب هوك مخصصة لاستقبال الأحداث من الخدمات الخارجية ومزامنة البيانات مع Ultimate Multisite.

## نقطة نهاية ويب هوك مخصصة

```php
// تسجيل نقطة نهاية للويب هوك
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

## اعتبارات الأمان

- تحقق دائمًا من توقيعات الويب هوك باستخدام HMAC أو سر مشترك
- استخدم `permission_callback` في مسار REST الخاص بك — لا تقم بتعيينه إلى `__return_true` في الإنتاج
- قم بالتحقق من صحة وتطهير جميع بيانات الحمولة الواردة قبل التعامل معها
- أعد رموز الحالة HTTP المناسبة (200 للنجاح، 400 للطلبات غير الصالحة)
