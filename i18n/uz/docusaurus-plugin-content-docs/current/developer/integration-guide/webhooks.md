---
title: Webhooklarni qayta ishlash
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook bilan ishlash

Tashqi xizmatlardan hodisalarni qabul qilish va maʼlumotlarni Ultimate Multisite bilan sinxronlash uchun maxsus webhook endpointlar yarating.

## Maxsus Webhook endpoint

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

## Xavfsizlik masalalari

- HMAC yoki umumiy maxfiy kalit yordamida webhook imzolarini har doim tekshiring
- REST marshrutingizda `permission_callback` dan foydalaning — ishchi muhitda uni hech qachon `__return_true` ga sozlamang
- Kiruvchi barcha payload maʼlumotlarini ular bilan amal bajarishdan oldin tekshiring va tozalang
- Mos HTTP status kodlarini qaytaring (muvaffaqiyat uchun 200, notoʻgʻri soʻrovlar uchun 400)
