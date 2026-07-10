---
title: Jesyon Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Jesyon Webhook {#webhook-handling}

Kreye pwen tèminal webhook pèsonalize pou resevwa evènman ki soti nan sèvis ekstèn epi senkronize done ak Ultimate Multisite.

## Pwen Tèminal Webhook Pèsonalize {#custom-webhook-endpoint}

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

## Konsiderasyon Sekirite {#security-considerations}

- Toujou verifye siyati webhook yo lè w sèvi ak HMAC oswa yon sekrè pataje
- Sèvi ak yon `permission_callback` sou wout REST ou a — pa janm mete li sou `__return_true` nan pwodiksyon
- Valide epi netwaye tout done payload k ap antre yo anvan ou aji sou yo
- Retounen kòd estati HTTP ki apwopriye (200 pou siksè, 400 pou move demann)
