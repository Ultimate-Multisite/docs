---
title: بەڕێوەبردنی Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# مامەڵەکردن لەگەڵ Webhook

خاڵەکۆتاییە تایبەتەکانی webhook دروست بکە بۆ وەرگرتنی ڕووداوەکان لە خزمەتگوزارییە دەرەکییەکان و هاوکاتکردنەوەی داتا لەگەڵ Ultimate Multisite.

## خاڵەکۆتایی Webhookی تایبەت

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

## تێبینییەکانی ئاسایش

- هەمیشە واژۆکانی webhook بە بەکارهێنانی HMAC یان نهێنییەکی هاوبەش پشتڕاست بکەوە
- لەسەر ڕێڕەوی REST ـەکەت `permission_callback` بەکاربهێنە — هەرگیز لە بەرهەمهێناندا دایمەنێ بە `__return_true`
- هەموو داتای هاتووی payload پێش کارکردن لەسەری پشتڕاست و پاک بکەوە
- کۆدە دۆخە گونجاوەکانی HTTP بگەڕێنەوە (200 بۆ سەرکەوتن، 400 بۆ داواکارییە خراپەکان)
