---
title: Обробка вебхуків
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Обробка Webhook

Створіть власні кінцеві точки webhook, щоб отримувати події від зовнішніх сервісів та синхронізувати дані з Ultimate Multisite.

## Власна кінцева точка Webhook

```php
// Реєструємо кінцеву точку webhook
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

## Застереження щодо безпеки

*   Завжди перевіряйте підписи webhook за допомогою HMAC або спільного секрету
*   Використовуйте `permission_callback` для вашого REST route — ніколи не встановлюйте його на `__return_true` у production
*   Валідуйте та санітуйте всі вхідні дані payload перед тим, як діяти з ними
*   Повертайте відповідні HTTP status codes (200 для успіху, 400 для некоректних запитів)
