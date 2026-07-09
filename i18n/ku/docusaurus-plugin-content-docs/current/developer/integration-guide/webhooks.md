---
title: Rêvebirina Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Birêvebirina webhookan {#webhook-handling}

Xalên dawî yên webhooka taybet biafirînin da ku bûyeran ji xizmetên derveyî bistînin û dane bi Ultimate Multisite re hevdem bikin.

## Xalê Dawî yê Webhooka Taybet {#custom-webhook-endpoint}

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

## Têbînîyên Ewlehiyê {#security-considerations}

- Her dem îmzeyên webhookê bi HMAC an bi veşartiyeke hevpar piştrast bikin
- Li ser rêya REST ya xwe `permission_callback` bi kar bînin — di productionê de qet wê wek `__return_true` danênin
- Berî ku li ser wan kar bikin, hemû daneyên payloada hatî pejirandin kontrol û paqij bikin
- Kodên rewşa HTTP yên guncaw vegerînin (200 ji bo serkeftinê, 400 ji bo daxwazên nebaş)
