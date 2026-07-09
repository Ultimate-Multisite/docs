---
title: Gestionarea Webhook-urilor
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Gestionarea Webhook-urilor {#webhook-handling}

Creați puncte de intrare (endpoints) webhook personalizate pentru a primi evenimente de la servicii externe și pentru a sincroniza datele cu Ultimate Multisite.

## Endpoint Webhook Personalizat {#custom-webhook-endpoint}

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

## Considerații de Securitate {#security-considerations}

- Verificați întotdeauna semnăturile webhook-urilor folosind HMAC sau un secret comun.
- Folosiți un `permission_callback` pe ruta REST-ului dvs. — nu îl setați niciodată pe `__return_true` în mediul de producție.
- Validați și sanitizați toate datele payload-ului primit înainte de a acționa pe ele.
- Returnați coduri de status HTTP adecvate (200 pentru succes, 400 pentru cereri greșite).
