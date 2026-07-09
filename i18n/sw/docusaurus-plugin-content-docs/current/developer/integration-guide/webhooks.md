---
title: Ushughulikiaji wa Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Kushughulikia Webhook {#webhook-handling}

Tengeneza sehemu maalum za webhook ili kupokea matukio kutoka huduma za nje na kuunganisha data na Ultimate Multisite.

## Sehemu Maalum ya Webhook {#custom-webhook-endpoint}

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

## Mambo ya Kuzingatia Usalama {#security-considerations}

- Daima angalia saini za webhook kwa kutumia HMAC au siri ya pamoja
- Tumia `permission_callback` kwenye njia yako ya REST — kamwe usuiweke `__return_true` katika hali halisi (production)
- Thibitisha na safisha (sanitize) data zote zinazoingia (payload) kabla ya kutumia
- Rudisha vitendo vya HTTP vinavyofaa (200 kwa mafanikio, 400 kwa maombi mabaya)
