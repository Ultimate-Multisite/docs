---
title: Trin Webhookau
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Trin Webhook

Crëwch bwyntiau terfyn webhook personol i dderbyn digwyddiadau gan wasanaethau allanol a chysoni data ag Ultimate Multisite.

## Pwynt Terfyn Webhook Personol {#custom-webhook-endpoint}

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

## Ystyriaethau Diogelwch {#security-considerations}

- Gwiriwch lofnodion webhook bob amser gan ddefnyddio HMAC neu gyfrinach a rennir
- Defnyddiwch `permission_callback` ar eich llwybr REST — peidiwch byth â'i osod i `__return_true` mewn cynhyrchu
- Dilyswch a glanhewch holl ddata payload sy'n dod i mewn cyn gweithredu arno
- Dychwelwch godau statws HTTP priodol (200 ar gyfer llwyddiant, 400 ar gyfer ceisiadau gwael)
