---
title: Ġestjoni tal-Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Immaniġġjar tal-Webhook

Oħloq punti tat-tmiem webhook personalizzati biex tirċievi avvenimenti minn servizzi esterni u tissinkronizza d-dejta ma’ Ultimate Multisite.

## Punt tat-Tmiem Webhook Personalizzat

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

## Konsiderazzjonijiet ta’ Sigurtà

- Dejjem ivverifika l-firem tal-webhook billi tuża HMAC jew sigriet kondiviż
- Uża `permission_callback` fuq ir-rotta REST tiegħek — qatt issettjah għal `__return_true` fil-produzzjoni
- Ivvalida u naddaf id-dejta kollha tal-payload li tidħol qabel taġixxi fuqha
- Irritorna kodiċijiet ta’ status HTTP xierqa (200 għal suċċess, 400 għal talbiet ħżiena)
