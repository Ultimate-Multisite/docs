---
title: Nangani Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Penanganan Webhook {#webhook-handling}

Gawe endpoint webhook kustom kanggo nampa kedadeyan saka layanan njaba lan nyelarasake data karo Ultimate Multisite.

## Endpoint Webhook Kustom {#custom-webhook-endpoint}

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

## Pertimbangan Keamanan {#security-considerations}

- Tansah verifikasi tandha tangan webhook nganggo HMAC utawa rahasia bareng
- Gunakake `permission_callback` ing rute REST sampeyan — aja tau disetel dadi `__return_true` ing produksi
- Validasi lan resiki kabeh data payload sing mlebu sadurunge ditindakake
- Balekake kode status HTTP sing trep (200 kanggo kasil, 400 kanggo panjaluk sing salah)
