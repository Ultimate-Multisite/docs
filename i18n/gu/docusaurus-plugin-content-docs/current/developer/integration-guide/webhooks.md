---
title: વેબહૂક સંચાલન
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# વેબહૂક હેન્ડલિંગ

બહારની સર્વિસમાંથી ઇવેન્ટ્સ મેળવવા અને Ultimate Multisite સાથે ડેટા sync કરવા માટે કસ્ટમ વેબહૂક એન્ડપોઇન્ટ્સ બનાવો.

## કસ્ટમ વેબહૂક એન્ડપોઇન્ટ {#custom-webhook-endpoint}

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

## સુરક્ષા બાબતો {#security-considerations}

- હંમેશા HMAC અથવા shared secret નો ઉપયોગ કરીને વેબહૂક સિગ્નેચર (webhook signatures) ની ચકાસણી કરો.
- તમારા REST route પર `permission_callback` નો ઉપયોગ કરો — પ્રોડક્શનમાં ક્યારેય તેને `__return_true` પર સેટ કરશો નહીં.
- તેના પર કાર્ય કરતા પહેલા આવતા તમામ payload ડેટાને validate અને sanitize કરો.
- યોગ્ય HTTP સ્ટેટસ કોડ્સ પરત કરો (સફળતા માટે 200, ખોટા વિનંતીઓ માટે 400).
