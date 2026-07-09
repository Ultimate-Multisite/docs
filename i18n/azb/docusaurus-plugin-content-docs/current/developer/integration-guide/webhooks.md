---
title: Webhook İşleme
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook İşlemleri {#webhook-handling}

Harici servislerden gelen olayları almak ve verileri Ultimate Multisite ile senkronize etmek için özel webhook endpoint'leri oluşturun.

## Özel Webhook Endpoint'i {#custom-webhook-endpoint}

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

## Güvenlik Hususları {#security-considerations}

- Webhook imzalarını her zaman HMAC veya paylaşılan bir sır (shared secret) kullanarak doğrulayın.
- REST rotanızda bir `permission_callback` kullanın — asla üretim ortamında (production) bunu `__return_true` olarak ayarlamayın.
- İşlem yapmadan önce gelen tüm payload verilerini doğrulayın (validate) ve temizleyin (sanitize).
- Uygun HTTP durum kodlarını döndürün (başarı için 200, hatalı istekler için 400).
