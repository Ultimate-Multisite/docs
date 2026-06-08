---
title: Webhook Hantering
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook Hantering

Skep aangepaste webhook-eindpunte om gebeurtenisse van eksterne dienste te ontvang en data met Ultimate Multisite te sinkroniseer.

## Aangepaste Webhook-Eindpunt

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

## Sekuriteitsoorwegings

- Verifieer altyd webhook-handtekeninge met behulp van HMAC of 'n gedeelde geheim.
- Gebruik 'n `permission_callback` op jou REST-roete — stel dit nooit op `__return_true` in produksie nie.
- Valideer en saneer al die inkomende payload-data voordat jy daarop optree.
- Gee die toepaslike HTTP-statuskoedes terug (200 vir sukses, 400 vir swak versoek).
