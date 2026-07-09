---
title: Ho sebetsana le Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Ho Sebetsana le Webhook

Theha li-endpoint tsa webhook tse ikhethileng ho amohela liketsahalo tse tsoang litšebeletsong tsa kantle le ho sync data le Ultimate Multisite.

## Endpoint ea Webhook e Ikhethileng

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

## Lintlha tsa Tšireletso

- Kamehla netefatsa mesaeno ea webhook u sebelisa HMAC kapa sephiri se arolelanoeng
- Sebelisa `permission_callback` tseleng ea hao ea REST — le ka mohla u se e behe ho `__return_true` ho production
- Netefatsa le ho hloekisa data eohle ea payload e kenang pele u nka bohato ka eona
- Khutlisa dikhoutu tse loketseng tsa boemo tsa HTTP (200 bakeng sa katleho, 400 bakeng sa dikopo tse fosahetseng)
