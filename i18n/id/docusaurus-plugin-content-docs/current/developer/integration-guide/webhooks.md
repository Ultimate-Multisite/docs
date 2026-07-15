---
title: Penanganan Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Penanganan Webhook

Buat endpoint webhook kustom agar Anda bisa menerima *event* (kejadian) dari layanan eksternal dan menyinkronkan data dengan Ultimate Multisite.

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

- Selalu verifikasi tanda tangan (*signature*) webhook menggunakan HMAC atau *shared secret* (rahasia bersama).
- Gunakan `permission_callback` pada *route* REST Anda — jangan pernah mengaturnya ke `__return_true` di lingkungan produksi.
- Validasi dan bersihkan (*sanitize*) semua data *payload* yang masuk sebelum Anda bertindak berdasarkan data tersebut.
- Kembalikan kode status HTTP yang sesuai (200 untuk sukses, 400 untuk permintaan yang salah/gagal).
