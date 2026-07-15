---
title: Webhook నిర్వహణ
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# వెబ్‌హుక్ హ్యాండ్లింగ్

ఎక్స్టర్నల్ సర్వీసుల నుండి వచ్చే ఈవెంట్‌లను స్వీకరించడానికి మరియు Ultimate Multisite తో డేటాను సింక్ చేయడానికి కస్టమ్ వెబ్‌హుక్ ఎండ్‌పాయింట్‌లను సృష్టించండి.

## Custom Webhook Endpoint {#custom-webhook-endpoint}

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

## Security Considerations {#security-considerations}

- ఎల్లప్పుడూ HMAC లేదా షేర్డ్ సీక్రెట్‌ని ఉపయోగించి వెబ్‌హుక్ సిగ్నేచర్లను ధృవీకరించండి.
- మీ REST రూట్‌లో `permission_callback` ఉపయోగించండి — ప్రొడక్షన్‌లో ఎప్పుడూ దీనిని `__return_true` గా సెట్ చేయవద్దు.
- దానిపై చర్య తీసుకునే ముందు వచ్చే అన్ని పేలోడ్ డేటాను ధృవీకరించి (Validate) మరియు శుభ్రం చేయండి (Sanitize).
- తగిన HTTP స్టేటస్ కోడ్‌లను తిరిగి ఇవ్వండి (విజయానికి 200, చెడ్డ అభ్యర్థనలకు 400).
