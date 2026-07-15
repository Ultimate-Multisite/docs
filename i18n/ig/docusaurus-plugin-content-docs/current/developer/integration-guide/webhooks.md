---
title: Ijikwa Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Ijikwa Webhook

Mepụta ebe njedebe webhook ahaziri iche iji nata mmemme site na ọrụ mpụga ma mekọrịta data na Ultimate Multisite.

## Ebe Njedebe Webhook Ahaziri Iche {#custom-webhook-endpoint}

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

## Ihe Nchekwa A Ga-atụle {#security-considerations}

- Na-enyocha mbinye aka webhook mgbe niile site n'iji HMAC ma ọ bụ nzuzo e kesara
- Jiri `permission_callback` na ụzọ REST gị — etinyela ya na `__return_true` na production
- Nyochaa ma sachapụ data payload niile na-abata tupu i mee ihe na ya
- Weghachite koodu ọnọdụ HTTP kwesịrị ekwesị (200 maka ihe ịga nke ọma, 400 maka arịrịọ na-adịghị mma)
