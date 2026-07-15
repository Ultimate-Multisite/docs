---
title: Webhook-en kudeaketa
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook-en kudeaketa

Sortu webhook amaiera-puntu pertsonalizatuak kanpoko zerbitzuetatik gertaerak jasotzeko eta datuak Ultimate Multisite-rekin sinkronizatzeko.

## Webhook amaiera-puntu pertsonalizatua {#custom-webhook-endpoint}

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

## Segurtasun-kontuan hartu beharrekoak {#security-considerations}

- Egiaztatu beti webhook sinadurak HMAC edo sekretu partekatu bat erabiliz
- Erabili `permission_callback` bat zure REST ibilbidean — ez ezarri inoiz `__return_true` gisa ekoizpenean
- Baliozkotu eta garbitu sarrerako payload datu guztiak haiekin jardun aurretik
- Itzuli HTTP egoera-kode egokiak (200 arrakastarako, 400 eskaera okerretarako)
