---
title: Gestió de Webhooks
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Gestion de Webhooks

Crea punts d'acció (endpoints) de webhook personalitzats per rebre esdeveniments de serveis externs i sincronitzar dades amb Ultimate Multisite.

## Punt d'acció (Endpoint) de Webhook Personalitzat

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

## Consideracions de Seguretat

*   Verifica sempre les signatures del webhook utilitzant HMAC o un secret compartit.
*   Utilitza un `permission_callback` a la teva ruta REST; mai el·l·ot a `__return_true` en producció.
*   Valida i neteja totes les dades de la càrrega (payload) entrantes abans d'actuar-hi.
*   Devolvia els codis d'estat HTTP adequats (200 per a èxit, 400 per a sol·licitades incorrectes).
