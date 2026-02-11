---
title: Manipulação de Webhooks
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Manipulação de Webhooks

Crie endpoints de webhook personalizados para receber eventos de serviços externos e sincronizar dados com o Ultimate Multisite.

## Endpoint de Webhook Personalizado

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

## Considerações de Segurança

- Sempre verifique as assinaturas de webhook usando HMAC ou um segredo compartilhado
- Use um `permission_callback` na sua rota REST — nunca defina como `__return_true` em produção
- Valide e sanitize todos os dados de payload recebidos antes de agir sobre eles
- Retorne códigos de status HTTP apropriados (200 para sucesso, 400 para solicitações inválidas)
