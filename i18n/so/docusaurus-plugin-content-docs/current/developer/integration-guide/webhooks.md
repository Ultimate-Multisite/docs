---
title: Maareynta Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Maareynta Webhook

Abuur baro webhook oo gaar ah si aad dhacdooyin uga hesho adeegyo dibadeed oo aad xogta ula waafajiso Ultimate Multisite.

## Barta Webhook ee Gaarka ah {#custom-webhook-endpoint}

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

## Tixgelinno Amni {#security-considerations}

- Had iyo jeer xaqiiji saxiixyada webhook adigoo adeegsanaya HMAC ama sir la wadaago
- Adeegso `permission_callback` marinkaaga REST — waligaa ha u dejin `__return_true` gudaha deegaanka wax-soo-saarka
- Xaqiiji oo nadiifi dhammaan xogta payload ee soo gelaysa ka hor intaadan ku dhaqmin
- Soo celi koodhadhka xaaladda HTTP ee ku habboon (200 guul, 400 codsiyo khaldan)
