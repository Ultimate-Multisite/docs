---
title: Webhook-håndtering
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Håndtering av webhooks

Opprett egendefinerte webhook-endepunkter for å motta hendelser fra eksterne tjenester og synkronisere data med Ultimate Multisite.

## Egendefinert webhook-endepunkt

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

## Sikkerhetshensyn

*   Verifiser alltid webhook-signaturer ved hjelp av HMAC eller en delt hemmelig nøkkel.
*   Bruk en `permission_callback` på REST-ruten din — sett aldri den til `__return_true` i produksjon.
*   Valider og rens alle innkommende payload-data før du handler på dem.
*   Returner passende HTTP-statuskoder (200 for suksess, 400 for feil forespørsler).
