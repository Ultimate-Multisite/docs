---
title: Webhook ನಿರ್ವಹಣೆ
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# ವೆಬ್‌ಹುಕ್ ನಿರ್ವಹಣೆ (Webhook Handling)

ಬಾಹ್ಯ ಸೇವೆಗಳಿಂದ (external services) ಘಟನೆಗಳನ್ನು (events) ಸ್ವೀಕರಿಸಲು ಮತ್ತು Ultimate Multisite ಜೊತೆ ಡೇಟಾವನ್ನು ಸಿಂಕ್ (sync) ಮಾಡಲು ಕಸ್ಟಮ್ ವೆಬ್‌ಹುಕ್ ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗಳನ್ನು ರಚಿಸಿ.

## ಕಸ್ಟಮ್ ವೆಬ್‌ಹುಕ್ ಎಂಡ್‌ಪಾಯಿಂಟ್ (Custom Webhook Endpoint) {#custom-webhook-endpoint}

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

## ಭದ್ರತಾ ಪರಿಗಣನೆಗಳು (Security Considerations) {#security-considerations}

*   ಯಾವಾಗಲೂ HMAC ಅಥವಾ ಹಂಚಿಕೆಯ ರಹಸ್ಯವನ್ನು (shared secret) ಬಳಸಿ ವೆಬ್‌ಹುಕ್ ಸಹಿಗಳನ್ನು (signatures) ಪರಿಶೀಲಿಸಿ.
*   ನಿಮ್ಮ REST ಮಾರ್ಗದಲ್ಲಿ (route) `permission_callback` ಬಳಸಿ — ಪ್ರೊಡಕ್ಷನ್‌ನಲ್ಲಿ (production) ಇದನ್ನು ಎಂದಿಗೂ `__return_true` ಎಂದು ಹೊಂದಿಸಬೇಡಿ.
*   ಯಾವುದೇ ಕ್ರಿಯೆ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಬರುವ ಎಲ್ಲಾ ಪೇಲೋಡ್ (payload) ಡೇಟಾವನ್ನು ವ್ಯಾಲಿಡೇಟ್ (validate) ಮತ್ತು ಸ್ಯಾನಿಟೈಸ್ (sanitize) ಮಾಡಿ.
*   ಸೂಕ್ತ HTTP ಸ್ಟೇಟಸ್ ಕೋಡ್‌ಗಳನ್ನು (status codes) ಮರಳಿ ನೀಡಿ (ಉದಾಹರಣೆಗೆ, ಯಶಸ್ಸಿಗೆ 200, ಕೆಟ್ಟ ವಿನಂತಿಗೆ 400).
