---
title: Gutunganya Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Gutunganya Webhook

Kora ahakirwa Webhook hihariye kugira ngo wakire ibyabaye bivuye muri serivisi zo hanze kandi uhuze amakuru na Ultimate Multisite.

## Ahakirwa Webhook hihariye

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

## Ibyo kwitondera ku mutekano

- Jya ugenzura buri gihe imikono ya webhook ukoresheje HMAC cyangwa ibanga musangiye
- Koresha `permission_callback` ku nzira yawe ya REST — ntuzigere uyishyira kuri `__return_true` mu ikoreshwa nyaryo
- Emeza kandi usukure amakuru yose yinjiye mbere yo kugira icyo uyakoraho
- Subiza kode zikwiye z’imiterere ya HTTP (200 ku ntsinzi, 400 ku bisabwa bipfuye)
