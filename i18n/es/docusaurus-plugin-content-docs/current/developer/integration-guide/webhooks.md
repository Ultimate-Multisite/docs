---
title: Manejo de Webhooks
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Manejo de Webhooks

Crear puntos finales de webhook personalizados para recibir eventos de servicios externos y sincronizar datos con Ultimate Multisite.

## Punto final de Webhook personalizado

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

## Consideraciones de Seguridad

- Siempre verifique las firmas de webhook utilizando HMAC o un secreto compartido
- Utilice un `permission_callback` en su ruta REST — nunca lo establezca en `__return_true` en producción
- Valide y sanee todos los datos de carga entrante antes de actuar sobre ellos
- Devuelva códigos de estado HTTP apropiados (200 para éxito, 400 para solicitudes incorrectas)
