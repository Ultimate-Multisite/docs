---
title: Webhook боловсруулалт
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook боловсруулах {#webhook-handling}

Гадаад үйлчилгээнүүдээс үйл явдлууд хүлээн авч, өгөгдлийг Ultimate Multisite-тай синк хийхийн тулд өөрийн webhook төгсгөлийн цэгүүдийг үүсгэнэ үү.

## Өөрийн webhook төгсгөлийн цэг {#custom-webhook-endpoint}

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

## Аюулгүй байдлын анхаарах зүйлс {#security-considerations}

- Webhook гарын үсгийг HMAC эсвэл хамтран ашиглах нууц түлхүүрээр үргэлж баталгаажуулна уу
- REST чиглэл дээрээ `permission_callback` ашиглана уу — production орчинд үүнийг хэзээ ч `__return_true` гэж бүү тохируул
- Ирж буй бүх payload өгөгдөл дээр үйлдэл хийхээсээ өмнө баталгаажуулж, цэвэрлэнэ үү
- Тохирох HTTP төлөвийн кодуудыг буцаана уу (амжилттай бол 200, буруу хүсэлт бол 400)
