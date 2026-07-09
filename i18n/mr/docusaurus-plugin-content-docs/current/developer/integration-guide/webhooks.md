---
title: वेबहुक व्यवस्थापन
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# वेबहुक हाताळणी (Webhook Handling) {#webhook-handling}

बाह्य सेवांकडून इव्हेंट्स (events) प्राप्त करण्यासाठी आणि Ultimate Multisite सोबत डेटा सिंक करण्यासाठी कस्टम वेबहुक एंडपॉइंट्स तयार करा.

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

## सुरक्षा विचार (Security Considerations) {#security-considerations}

*   नेहमी HMAC किंवा सामायिक गुप्त (shared secret) वापरून वेबहुक सिग्नेचरची पडताळणी करा.
*   तुमच्या REST रूटवर `permission_callback` वापरा — प्रोडक्शनमध्ये (production) कधीही ते `__return_true` सेट करू नका.
*   त्यावर प्रक्रिया करण्यापूर्वी सर्व येणाऱ्या payload डेटाची पडताळणी (validate) आणि स्वच्छता (sanitize) करा.
*   योग्य HTTP स्टेटस कोड परत करा (उदा. यशस्वीतेसाठी 200, चुकीच्या विनंत्यांसाठी 400).
