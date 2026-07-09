---
title: Ìṣàkóso Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Ìmúlò Webhook

Dá àwọn ibi-opin webhook àdáni láti gba àwọn ìṣẹ̀lẹ̀ láti àwọn iṣẹ́ òde àti láti mú dátà bá Ultimate Multisite mu.

## Ibi-opin Webhook Àdáni

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

## Àwọn Ohun Tó Yẹ Kí A Rò Nípa Ààbò

- Máa ṣàyẹ̀wò àwọn ìbuwọ̀lé webhook nígbà gbogbo ní lílo HMAC tàbí aṣírí tí a pín
- Lo `permission_callback` lórí ọ̀nà REST rẹ — má ṣe ṣètò rẹ sí `__return_true` nínú production
- Ṣàyẹ̀wò kí o sì sọ gbogbo dátà payload tó ń wọlé di mímọ́ kí o tó ṣiṣẹ́ lórí rẹ
- Dá àwọn kóòdù ipò HTTP tó yẹ padà (200 fún àṣeyọrí, 400 fún àwọn ìbéèrè búburú)
