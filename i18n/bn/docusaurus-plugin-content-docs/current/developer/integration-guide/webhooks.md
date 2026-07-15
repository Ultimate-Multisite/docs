---
title: ওয়েবহুক ব্যবস্থাপনা
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# ওয়েবহুক হ্যান্ডলিং

বাইরের সার্ভিসগুলো থেকে ইভেন্ট রিসিভ করার জন্য কাস্টম ওয়েবহুক এন্ডপয়েন্ট তৈরি করুন এবং Ultimate Multisite-এর সাথে ডেটা সিঙ্ক করুন।

## কাস্টম ওয়েবহুক এন্ডপয়েন্ট {#custom-webhook-endpoint}

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

## নিরাপত্তার দিকগুলো {#security-considerations}

*   HMAC বা একটি শেয়ার্ড সিক্রেট ব্যবহার করে সর্বদা ওয়েবহুক সিগনেচার যাচাই করুন।
*   আপনার REST রুটে একটি `permission_callback` ব্যবহার করুন — প্রোডাকশনে এটি কখনোই `__return_true` সেট করবেন না।
*   কোনো অ্যাকশন নেওয়ার আগে আসা সমস্ত পেলোড ডেটা ভ্যালিডেট এবং স্যানিটাইজ করুন।
*   উপযুক্ত HTTP স্ট্যাটাস কোড ফিরিয়ে দিন (সফলতার জন্য 200, খারাপ অনুরোধের জন্য 400)।
