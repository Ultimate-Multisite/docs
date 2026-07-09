---
title: Whakahaere Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Te Whakahaere Webhook {#webhook-handling}

Waihangatia he pito mutunga webhook ritenga hei whiwhi takahanga mai i ngā ratonga o waho, hei tukutahi raraunga hoki ki Ultimate Multisite.

## Pito Mutunga Webhook Ritenga {#custom-webhook-endpoint}

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

## Ngā Whakaaro Haumarutanga {#security-considerations}

- Manatokona ngā waitohu webhook i ngā wā katoa mā te HMAC, mā tētahi muna tiritahi rānei
- Whakamahia tētahi `permission_callback` ki tō ara REST — kaua rawa e tautuhi ki `__return_true` i te taiao whakaputa
- Manatokona, whakapaingia hoki ngā raraunga payload katoa e tae mai ana i mua i te whakamahi
- Whakahokia ngā waehere tūnga HTTP e tika ana (200 mō te angitu, 400 mō ngā tono hē)
