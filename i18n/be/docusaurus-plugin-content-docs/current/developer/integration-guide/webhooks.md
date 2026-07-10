---
title: Апрацоўка вебкакаўт
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Апрацоўка Webhook {#webhook-handling}

Стварыце ўласныя Webhook-адрэсы, каб прымаць паведамленні ад знешніх сэрвісаў і разагнаць дадзеныя з Ultimate Multisite.

## Уласны адрэс Webhook {#custom-webhook-endpoint}

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

## Аспекты бяспекі {#security-considerations}

- Заўсёды праверка sygnatur Webhook праз HMAC або агульны пароль (shared secret)
- Выкарыстоўвайце `permission_callback` для вашага REST-маршруту — ніколі не ўсталёўвайце яго ў `__return_true` у прадакшэн-рэжыме
- Прымярнайце і санітарызуйце ўсе прыходзячыя дадзеныя ў загрузцы (payload) перш чым вы будзеце імі карыстацца
- Павярніце адпаведныя HTTP-коды стану (200 для поспеху, 400 для непадрабязных запытаў)
