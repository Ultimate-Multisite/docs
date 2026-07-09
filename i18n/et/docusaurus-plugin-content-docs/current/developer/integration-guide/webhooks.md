---
title: Webhookide käsitlemine
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhookide käsitlemine {#webhook-handling}

Loo kohandatud webhookide lõpp-punktid, et võtta vastu sündmusi välistest teenustest ja sünkroonida andmeid Ultimate Multisite’iga.

## Kohandatud webhooki lõpp-punkt {#custom-webhook-endpoint}

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

## Turvakaalutlused {#security-considerations}

- Kontrolli alati webhookide allkirju HMAC-i või jagatud saladuse abil
- Kasuta oma REST-marsruudil `permission_callback`-i — ära kunagi määra selleks tootmiskeskkonnas `__return_true`
- Valideeri ja puhasta kõik sissetuleva payloadi andmed enne nende põhjal tegutsemist
- Tagasta sobivad HTTP olekukoodid (200 õnnestumise korral, 400 vigaste päringute korral)
