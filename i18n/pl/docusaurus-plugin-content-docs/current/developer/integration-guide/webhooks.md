---
title: Obsługa Webhooków
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Obsługa Webhooków

Utwórz niestandardowe punkty końcowe webhooków, aby odbierać zdarzenia z zewnętrznych usług i synchronizować dane z Ultimate Multisite.

## Niestandardowy Punkt Końcowy Webhooka {#custom-webhook-endpoint}

```php
// Rejestruj punkt końcowy webhooka
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

## Uwagi dotyczące bezpieczeństwa {#security-considerations}

- Zawsze weryfikuj podpisy webhooków za pomocą HMAC lub współdzielonego sekretu.
- Używaj `permission_callback` dla swojej trasy REST — nigdy nie ustawiaj go na `__return_true` w środowisku produkcyjnym.
- Waliduj i oczyszczaj wszystkie przychodzące dane (payload) przed ich wykorzystaniem.
- Zwracaj odpowiednie kody statusu HTTP (200 dla sukcesu, 400 dla błędnych żądań).
