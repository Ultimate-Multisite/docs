---
title: Pangangasiwa ng Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Pangangasiwa ng Webhook {#webhook-handling}

Gumawa ng mga pasadyang endpoint ng webhook upang makatanggap ng mga kaganapan mula sa mga panlabas na serbisyo at i-sync ang datos sa Ultimate Multisite.

## Pasadyang Endpoint ng Webhook {#custom-webhook-endpoint}

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

## Mga Pagsasaalang-alang sa Seguridad {#security-considerations}

- Palaging beripikahin ang mga lagda ng webhook gamit ang HMAC o isang pinagsasaluhang lihim
- Gumamit ng `permission_callback` sa iyong REST route — huwag kailanman itakda ito sa `__return_true` sa production
- I-validate at linisin ang lahat ng papasok na datos ng payload bago kumilos batay dito
- Magbalik ng angkop na mga HTTP status code (200 para sa tagumpay, 400 para sa masasamang request)
