---
title: Webhook-håndtering
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Håndtering af webhooks {#webhook-handling}

Opret tilpassede webhook-slutpunkter for at modtage hændelser fra eksterne tjenester og synkronisere data med Ultimate Multisite.

## Tilpasset webhook-slutpunkt {#custom-webhook-endpoint}

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

## Sikkerhedsovervejelser {#security-considerations}

- Verificér altid webhook-signaturer med HMAC eller en delt hemmelighed
- Brug en `permission_callback` på din REST-rute — sæt den aldrig til `__return_true` i produktion
- Validér og rens alle indkommende nyttelastdata, før du handler på dem
- Returnér passende HTTP-statuskoder (200 for succes, 400 for ugyldige anmodninger)
