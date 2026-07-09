---
title: Webhook apdorojimas
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook apdorojimas {#webhook-handling}

Sukurkite pasirinktinius webhook galinius taškus, kad gautumėte įvykius iš išorinių paslaugų ir sinchronizuotumėte duomenis su Ultimate Multisite.

## Pasirinktinis webhook galinis taškas {#custom-webhook-endpoint}

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

## Saugumo aspektai {#security-considerations}

- Visada tikrinkite webhook parašus naudodami HMAC arba bendrinamą paslaptį
- Savo REST maršrute naudokite `permission_callback` — niekada nenustatykite jo į `__return_true` gamybinėje aplinkoje
- Patikrinkite ir išvalykite visus gaunamus naudingosios apkrovos duomenis prieš imdamiesi veiksmų
- Grąžinkite tinkamus HTTP būsenos kodus (200 sėkmės atveju, 400 netinkamoms užklausoms)
