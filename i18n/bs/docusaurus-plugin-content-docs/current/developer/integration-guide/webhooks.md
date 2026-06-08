---
title: Obrada Webhooka
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Upravljanje Webhookovima

Kreirajte prilagođene webhook endpoint-e kako biste primili događaje (events) s vanjskih servisa i uskladili podatke s Ultimate Multisite.

## Prilagođeni Webhook Endpoint

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

## Sigurnosne napomene

*   Uvijek provjeravajte webhook potpise (signatures) koristeći HMAC ili zajednički tajni ključ (shared secret).
*   Koristite `permission_callback` na vašoj REST ruti — nikada ga ne postavljajte na `__return_true` u produkciji.
*   Validirajte i sanitizirajte sve dolazne podatke u payload-u prije nego što na njima djelujete.
*   Vraćajte odgovarajuće HTTP status kodove (200 za uspjeh, 400 za loše zahtjeve).
