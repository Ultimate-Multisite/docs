---
title: Obrada webhookova
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Rukovanje webhookovima

Izradite prilagođene webhook krajnje točke za primanje događaja iz vanjskih usluga i sinkronizaciju podataka s Ultimate Multisite.

## Prilagođena webhook krajnja točka {#custom-webhook-endpoint}

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

## Sigurnosna razmatranja {#security-considerations}

- Uvijek provjerite webhook potpise pomoću HMAC-a ili dijeljene tajne
- Upotrijebite `permission_callback` na svojoj REST ruti — nikada ga ne postavljajte na `__return_true` u produkciji
- Provjerite valjanost i sanitizirajte sve dolazne podatke korisnog tereta prije nego što djelujete na temelju njih
- Vratite odgovarajuće HTTP statusne kodove (200 za uspjeh, 400 za neispravne zahtjeve)
