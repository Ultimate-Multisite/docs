---
title: Webhook kezelése
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook Kezelése

Készítsen saját webhook végpontokat (endpoints), hogy külső szolgáltatásoktól érkező eseményeket fogadjon el, és szinkronizálja az adatokat az Ultimate Multisite-tal.

## Saját Webhook Végpont (Custom Webhook Endpoint)

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

## Biztonsági Megfontolások (Security Considerations)

- Mindig ellenőrizze a webhook aláírásait HMAC-ot vagy megosztott titkot használva.
- Használjon `permission_callback`-ot a REST útvonalán (route) — soha ne állítsa `__return_true`-ra a produkcióban.
- Ellenőrizze és tisztítsa (sanitize) az összes érkező payload adatot, mielőtt bármilyen műveletet végezne velőll.
- Adja vissza megfelelő HTTP státusz kódokat (200 sikerekre, 400 rossz kérésekre).
