---
title: Webhook Handling
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook ব্যৱস্থাপনা (Webhook Handling)

বাহ্যিক সেৱাসমূহৰ পৰা ইভেন্ট গ্ৰহণ কৰিবলৈ আৰু Ultimate Multisite লগত ডেটা সিনক্ৰণ কৰিবলৈ কাস্টম webhook end-point সৃষ্টি কৰক।

## কাস্টম Webhook End-point

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

## নিৰাপত্তা বিবেচনা (Security Considerations)

- HMAC বা এটা SHARED SECRET ব্যৱহাৰ কৰি সদায় webhook signature যাচাই কৰক।
- আপোনাৰ REST route मा এটা `permission_callback` ব্যৱহাৰ কৰক — কেতিয়াও ইয়াক প্ৰডাকচনত `__return_true` সেট নকৰিব।
- কোনো কাৰ্য্য কৰাৰ আগতে সকলো আহি থকা payload ডেটা ভ্যালিডেট (Validate) আৰু ছানitize (Sanitize) কৰক।
- উপযুক্ত HTTP status code (সাফল্যৰ বাবে 200, ভুল অনুৰোধৰ বাবে 400) फिৰক কৰক।
