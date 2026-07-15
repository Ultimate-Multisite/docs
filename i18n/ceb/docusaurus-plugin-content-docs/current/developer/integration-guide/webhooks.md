---
title: Pagdumala sa Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Pagdumala sa Webhook

Paghimo ug pinasahi nga mga kataposang punto sa webhook aron modawat og mga panghitabo gikan sa gawasnong mga serbisyo ug ipatugma ang datos sa Ultimate Multisite.

## Pinasahing Kataposang Punto sa Webhook {#custom-webhook-endpoint}

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

## Mga Konsiderasyon sa Seguridad {#security-considerations}

- Kanunay pamatud-i ang mga pirma sa webhook gamit ang HMAC o usa ka gipaambit nga sekreto
- Gamita ang `permission_callback` sa imong REST nga ruta — ayaw gyud kini ibutang sa `__return_true` sa produksyon
- I-validate ug limpyohi ang tanang mosulod nga datos sa payload sa dili pa kini gamiton
- Ibalik ang angay nga mga HTTP status code (200 alang sa kalamposan, 400 alang sa dili maayong mga hangyo)
