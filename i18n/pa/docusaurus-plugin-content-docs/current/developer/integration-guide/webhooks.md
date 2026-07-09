---
title: Webhook Handling
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook ਨੂੰ ਸੰਭਾਲਣਾ (Webhook Handling) {#webhook-handling}

ਬਾਹਰੀ ਸਰਵਿਸਾਂ (external services) ਤੋਂ ਘਟਨਾਵਾਂ (events) ਪ੍ਰਾਪਤ ਕਰਨ ਅਤੇ Ultimate Multisite ਨਾਲ ਡਾਟਾ ਸਿੰਕ (sync) ਕਰਨ ਲਈ ਕਸਟਮ Webhook endpoints ਬਣਾਓ।

## ਕਸਟਮ Webhook Endpoint (Custom Webhook Endpoint) {#custom-webhook-endpoint}

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

## ਸੁਰੱਖਿਆ ਵਿਚਾਰ (Security Considerations) {#security-considerations}

*   ਹਮੇਸ਼ਾ HMAC ਜਾਂ ਕਿਸੇ ਸਾਂਝੇ Secret ਦੀ ਵਰਤੋਂ ਕਰਕੇ Webhook signatures ਦੀ ਜਾਂਚ ਕਰੋ।
*   ਆਪਣੇ REST route 'ਤੇ `permission_callback` ਦੀ ਵਰਤੋਂ ਕਰੋ — ਕਦੇ ਵੀ ਇਸਨੂੰ production ਵਿੱਚ `__return_true` ਨਾ ਰੱਖੋ।
*   ਕੋਈ ਵੀ ਕੰਮ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਾਰੇ ਆਉਣ ਵਾਲੇ payload data ਨੂੰ validate (ਜਾਂਚ) ਅਤੇ sanitize (ਸਫ਼ਾਈ) ਕਰੋ।
*   ਸਹੀ HTTP status codes ਵਾਪਸ ਕਰੋ (ਸਫਲਤਾ ਲਈ 200, ਗਲਤ ਬੇਨਤੀਆਂ ਲਈ 400)।
