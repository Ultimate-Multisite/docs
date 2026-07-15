---
title: Kusamalira Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Kusamalira Webhook

Pangani malo olandirira webhook achikhalidwe kuti mulandire zochitika kuchokera ku mautumiki akunja ndi kulunzanitsa data ndi Ultimate Multisite.

## Malo Olandirira Webhook Achikhalidwe {#custom-webhook-endpoint}

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

## Zinthu Zofunika pa Chitetezo {#security-considerations}

- Nthawi zonse tsimikizirani ma siginecha a webhook pogwiritsa ntchito HMAC kapena chinsinsi chogawana
- Gwiritsani ntchito `permission_callback` pa njira yanu ya REST — musayiyike kukhala `__return_true` pa malo opanga
- Tsimikizirani ndi kuyeretsa data yonse ya payload yomwe ikubwera musanachitepo kanthu
- Bwezerani ma code oyenera a HTTP status (200 pa kupambana, 400 pa zopempha zolakwika)
