---
title: Webhook හැසිරවීම
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook හැසිරවීම

බාහිර සේවාවලින් සිදුවීම් ලබාගෙන දත්ත Ultimate Multisite සමඟ සමමුහුර්ත කිරීමට අභිරුචි webhook අවසන් ලක්ෂ්‍ය සාදන්න.

## අභිරුචි Webhook අවසන් ලක්ෂ්‍යය

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

## ආරක්ෂක කරුණු

- HMAC හෝ හවුල් රහසක් භාවිතයෙන් webhook අත්සන් සැමවිටම සත්‍යාපනය කරන්න
- ඔබේ REST මාර්ගයේ `permission_callback` භාවිත කරන්න — නිෂ්පාදන පරිසරයේදී එය කිසිවිටෙක `__return_true` ලෙස සකසන්න එපා
- ක්‍රියා කිරීමට පෙර ලැබෙන සියලු payload දත්ත වලංගු කර පිරිසිදු කරන්න
- සුදුසු HTTP තත්ත්ව කේත ආපසු දෙන්න (සාර්ථකත්වය සඳහා 200, වැරදි ඉල්ලීම් සඳහා 400)
