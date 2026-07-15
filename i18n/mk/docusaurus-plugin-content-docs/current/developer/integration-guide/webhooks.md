---
title: Обработка на вебхукови
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Ракување со webhook-и

Создајте прилагодени webhook крајни точки за да примате настани од надворешни услуги и да синхронизирате податоци со Ultimate Multisite.

## Прилагодена webhook крајна точка {#custom-webhook-endpoint}

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

## Безбедносни напомени {#security-considerations}

- Секогаш проверувајте ги webhook потписите користејќи HMAC или споделена тајна
- Користете `permission_callback` на вашата REST рута — никогаш не го поставувајте на `__return_true` во продукција
- Валидирајте ги и исчистете ги сите дојдовни податоци од корисниот товар пред да дејствувате врз нив
- Враќајте соодветни HTTP статусни кодови (200 за успех, 400 за лоши барања)
