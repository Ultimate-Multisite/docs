---
title: Webhook व्यवस्थापन
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook व्यवस्थापन {#webhook-handling}

बाह्य सेवाहरूबाट घटनाहरू प्राप्त गर्न र Ultimate Multisite सँग डेटा समक्रमण गर्न अनुकूल Webhook अन्त्यबिन्दुहरू सिर्जना गर्नुहोस्।

## अनुकूल Webhook अन्त्यबिन्दु {#custom-webhook-endpoint}

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

## सुरक्षा विचारहरू {#security-considerations}

- HMAC वा साझा गोप्य प्रयोग गरेर Webhook हस्ताक्षरहरू सधैं प्रमाणित गर्नुहोस्
- आफ्नो REST मार्गमा `permission_callback` प्रयोग गर्नुहोस् — उत्पादनमा यसलाई कहिल्यै `__return_true` मा सेट नगर्नुहोस्
- त्यसमा कार्य गर्नु अघि सबै आगमन payload डेटा मान्य गर्नुहोस् र सफा गर्नुहोस्
- उपयुक्त HTTP स्थिति कोडहरू फर्काउनुहोस् (सफलताका लागि 200, खराब अनुरोधहरूका लागि 400)
