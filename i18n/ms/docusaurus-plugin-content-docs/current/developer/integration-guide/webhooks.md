---
title: Pengendalian Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Penanganan Webhook

Cipta endpoint webhook tersuai untuk menerima acara (events) daripada perkhidmatan luaran dan menyegerakkan data dengan Ultimate Multisite.

## Endpoint Webhook Tersuai

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

## Pertimbangan Keselamatan

- Sentiasa sahkan tandatangan webhook menggunakan HMAC atau rahsia kongsi (shared secret)
- Gunakan `permission_callback` pada laluan REST anda — jangan pernah tetapkan ia kepada `__return_true` dalam persekitaran pengeluaran (production)
- Sahkan (validate) dan bersihkan (sanitize) semua data payload yang masuk sebelum bertindak ke atasnya
- Kembalikan kod status HTTP yang sesuai (200 untuk kejayaan, 400 untuk permintaan yang salah/tidak sah)
