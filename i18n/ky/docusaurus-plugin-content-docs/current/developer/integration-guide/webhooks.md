---
title: Вебхуктарды иштетүү
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook иштетүү

Тышкы кызматтардан окуяларды алуу жана дайындарды Ultimate Multisite менен шайкештештирүү үчүн ыңгайлаштырылган webhook акыркы чекиттерин түзүңүз.

## Ыңгайлаштырылган Webhook акыркы чекити

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

## Коопсуздук жагдайлары

- Webhook колтамгаларын HMAC же жалпы сыр аркылуу ар дайым текшериңиз
- REST маршрутуңузда `permission_callback` колдонуңуз — production чөйрөсүндө аны эч качан `__return_true` кылып койбоңуз
- Кирген бардык payload дайындарын иштетүүдөн мурун текшерип, тазалаңыз
- Тийиштүү HTTP абал коддорун кайтарыңыз (ийгилик үчүн 200, туура эмес сурамдар үчүн 400)
