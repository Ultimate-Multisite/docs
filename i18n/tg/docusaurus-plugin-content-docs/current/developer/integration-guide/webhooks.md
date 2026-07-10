---
title: Коркарди Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Коркарди webhook {#webhook-handling}

Нуқтаҳои ниҳоии webhook-и фармоишӣ эҷод кунед, то рӯйдодҳоро аз хидматҳои беруна қабул карда, додаҳоро бо Ultimate Multisite ҳамоҳанг созед.

## Нуқтаи ниҳоии webhook-и фармоишӣ {#custom-webhook-endpoint}

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

## Мулоҳизаҳои амниятӣ {#security-considerations}

- Ҳамеша имзоҳои webhook-ро бо истифода аз HMAC ё сирри муштарак санҷед
- Дар масири REST-и худ `permission_callback`-ро истифода баред — дар муҳити истеҳсолӣ онро ҳеҷ гоҳ ба `__return_true` таъин накунед
- Пеш аз анҷом додани амал бар асоси он, ҳамаи додаҳои payload-и воридшавандаро санҷед ва поксозӣ кунед
- Рамзҳои мувофиқи ҳолати HTTP-ро баргардонед (200 барои муваффақият, 400 барои дархостҳои нодуруст)
