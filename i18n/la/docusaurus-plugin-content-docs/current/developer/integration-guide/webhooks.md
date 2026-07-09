---
title: Tractatio Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook Tractatio {#webhook-handling}

Crea proprios webhook terminos ut eventa a servitiis externis accipias et data cum Ultimate Multisite synchronizes.

## Proprius Webhook Terminus {#custom-webhook-endpoint}

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

## Considerationes Securitatis {#security-considerations}

- Semper verifica subscriptiones webhook utens HMAC aut secreto communi
- Utere `permission_callback` in tua REST via — numquam eam ad `__return_true` in productione constitue
- Valida et purga omnia data payload intrantia antequam ex eis agas
- Redde codices status HTTP idoneos (200 pro successu, 400 pro petitionibus malis)
