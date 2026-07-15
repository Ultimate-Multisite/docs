---
title: Fitantanana Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Fitantanana Webhook

Mamoròna endpoint webhook namboarina manokana handraisana hetsika avy amin’ny tolotra ivelany sy hampifanarahana angona amin’ny Ultimate Multisite.

## Endpoint Webhook Namboarina Manokana {#custom-webhook-endpoint}

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

## Hevitra Momba ny Fiarovana {#security-considerations}

- Hamarino foana ny sonia webhook amin’ny fampiasana HMAC na tsiambaratelo iombonana
- Mampiasà `permission_callback` amin’ny lalana REST-nao — aza apetraka ho `__return_true` mihitsy izany amin’ny tontolo famokarana
- Hamarino sy diovy avokoa ny angona payload miditra rehetra alohan’ny hanaovana hetsika aminy
- Avereno ny kaody sata HTTP mifanaraka (200 ho an’ny fahombiazana, 400 ho an’ny fangatahana tsy mety)
