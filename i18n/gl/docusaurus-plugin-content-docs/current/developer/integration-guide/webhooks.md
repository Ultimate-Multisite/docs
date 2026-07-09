---
title: Xestión de webhooks
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Xestión de webhooks

Crea puntos de conexión de webhook personalizados para recibir eventos de servizos externos e sincronizar datos con Ultimate Multisite.

## Punto de conexión de webhook personalizado

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

## Consideracións de seguridade

- Verifica sempre as sinaturas dos webhooks usando HMAC ou un segredo compartido
- Usa un `permission_callback` na túa ruta REST — nunca o establezas como `__return_true` en produción
- Valida e sanea todos os datos da carga útil entrante antes de actuar sobre eles
- Devolve códigos de estado HTTP axeitados (200 para éxito, 400 para solicitudes incorrectas)
