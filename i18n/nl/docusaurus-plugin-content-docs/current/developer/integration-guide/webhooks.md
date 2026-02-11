---
title: Webhookverwerking
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook Afhandeling

Maak aangepaste webhook-eindpunten om gebeurtenissen van externe services te ontvangen en gegevens te synchroniseren met Ultimate Multisite.

## Aangepast Webhook-eindpunt

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

## Beveiligingsoverwegingen

- Verifieer altijd webhookhandtekeningen met HMAC of een gedeeld geheim
- Gebruik een `permission_callback` op je REST-route — stel het nooit in op `__return_true` in productie
- Valideer en filter alle binnenkomende payloadgegevens voordat je actie onderneemt
- Retourneer geschikte HTTP-statuscodes (200 voor succes, 400 voor foutieve verzoeken)
