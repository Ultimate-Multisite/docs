---
title: वेबहूक हैंडलिंग
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook को संभालना (Webhook Handling) {#webhook-handling}

बाहरी सेवाओं से इवेंट प्राप्त करने और डेटा को Ultimate Multisite के साथ सिंक करने के लिए कस्टम वेबहुक एंडपॉइंट बनाएं।

## कस्टम वेबहुक एंडपॉइंट (Custom Webhook Endpoint) {#custom-webhook-endpoint}

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

## सुरक्षा संबंधी विचार (Security Considerations) {#security-considerations}

- हमेशा HMAC या एक साझा सीक्रेट (shared secret) का उपयोग करके वेबहुक सिग्नेचर को वेरिफाई करें।
- अपने REST रूट पर हमेशा एक `permission_callback` का उपयोग करें — इसे प्रोडक्शन में कभी भी `__return_true` पर सेट न करें।
- किसी भी एक्शन पर कार्य करने से पहले सभी आने वाले payload डेटा को वैलिडेट (validate) और सैनिटाइज (sanitize) करें।
- उचित HTTP स्टेटस कोड लौटाएं (सफलता के लिए 200, खराब अनुरोधों के लिए 400)।
