---
title: Nanganan Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Ngatur Webhook

Jieun titik panarima webhook kustom pikeun narima kajadian ti layanan éksternal jeung nyingkronkeun data jeung Ultimate Multisite.

## Titik Panarima Webhook Kustom

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

## Pertimbangan Kaamanan

- Salawasna pariksa tanda tangan webhook maké HMAC atawa rusiah babarengan
- Paké `permission_callback` dina rute REST anjeun — ulah kungsi nyetél éta jadi `__return_true` dina produksi
- Validasi jeung bersihkeun sakabéh data payload anu asup saméméh ngalakukeun tindakan kana éta
- Balikeun kode status HTTP anu luyu (200 pikeun suksés, 400 pikeun paménta anu goréng)
