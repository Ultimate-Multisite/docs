---
title: Traktado de ret-hokoj
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook-traktado

Kreu proprajn webhook-finpunktojn por ricevi eventojn de eksteraj servoj kaj sinkronigi datumojn kun Ultimate Multisite.

## Propra Webhook-finpunkto

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

## Sekurecaj konsideroj

- Ĉiam kontrolu webhook-subskribojn per HMAC aŭ komuna sekreto
- Uzu `permission_callback` ĉe via REST-itinero — neniam agordu ĝin al `__return_true` en produktado
- Validigu kaj purigu ĉiujn envenantajn ŝarĝodatumojn antaŭ ol agi surbaze de ili
- Redonu taŭgajn HTTP-statuskodojn (200 por sukceso, 400 por malbonaj petoj)
