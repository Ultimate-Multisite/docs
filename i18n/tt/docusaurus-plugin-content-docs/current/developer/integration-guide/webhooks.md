---
title: Webhook эшкәртү
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook эшкәртү

Тышкы хезмәтләрдән вакыйгалар кабул итү һәм мәгълүматны Ultimate Multisite белән синхронлау өчен махсус webhook нокталары булдырыгыз.

## Махсус Webhook ноктасы

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

## Иминлек мәсьәләләре

- Webhook имзаларын HMAC яки уртак сер ярдәмендә һәрвакыт тикшерегез
- REST маршрутыгызда `permission_callback` кулланыгыз — production мохитендә аны беркайчан да `__return_true` итеп куймагыз
- Килгән барлык йөкләнеш мәгълүматларын эшкәртү алдыннан тикшерегез һәм чистартыгыз
- Тиешле HTTP статус кодларын кайтарыгыз (уңыш өчен 200, дөрес булмаган сораулар өчен 400)
