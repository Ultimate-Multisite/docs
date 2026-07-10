---
title: Trajtimi i Webhook-eve
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Trajtimi i Webhook-ëve {#webhook-handling}

Krijoni endpoint-e të personalizuara webhook për të marrë ngjarje nga shërbime të jashtme dhe për të sinkronizuar të dhënat me Ultimate Multisite.

## Endpoint i personalizuar Webhook {#custom-webhook-endpoint}

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

## Konsiderata sigurie {#security-considerations}

- Verifikoni gjithmonë nënshkrimet e webhook duke përdorur HMAC ose një sekret të përbashkët
- Përdorni një `permission_callback` në rrugën tuaj REST — mos e vendosni kurrë në `__return_true` në prodhim
- Validoni dhe pastroni të gjitha të dhënat hyrëse të payload-it përpara se të veproni mbi to
- Ktheni kodet e përshtatshme të statusit HTTP (200 për sukses, 400 për kërkesa të gabuara)
