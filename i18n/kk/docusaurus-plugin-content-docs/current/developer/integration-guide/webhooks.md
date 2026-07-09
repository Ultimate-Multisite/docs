---
title: Webhook-ты өңдеу
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook өңдеу {#webhook-handling}

Сыртқы қызметтерден оқиғаларды қабылдау және деректерді Ultimate Multisite-пен синхрондау үшін пайдаланушы webhook соңғы нүктелерін жасаңыз.

## Пайдаланушы webhook соңғы нүктесі {#custom-webhook-endpoint}

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

## Қауіпсіздік considerations {#security-considerations}

- Webhook қолтаңбаларын HMAC немесе ортақ құпия арқылы әрқашан тексеріңіз
- REST бағдарыңызда `permission_callback` пайдаланыңыз — өндірістік ортада оны ешқашан `__return_true` етіп орнатпаңыз
- Келіп түсетін барлық payload деректерін әрекет жасамас бұрын тексеріп, тазалаңыз
- Тиісті HTTP күй кодтарын қайтарыңыз (сәттілік үшін 200, қате сұраулар үшін 400)
