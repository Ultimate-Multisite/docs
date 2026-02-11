---
title: Gestion des Webhooks
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Gestion des Webhooks

Créer des points de terminaison de webhook personnalisés pour recevoir des événements de services externes et synchroniser les données avec Ultimate Multisite.

## Point de terminaison de webhook personnalisé

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

## Considérations de sécurité

- Toujours vérifier les signatures de webhook en utilisant HMAC ou un secret partagé
- Utilisez un `permission_callback` sur votre route REST — ne le définissez jamais sur `__return_true` en production
- Validez et assainissez toutes les données de charge utile entrantes avant d'agir
- Retournez les codes d'état HTTP appropriés (200 pour le succès, 400 pour les mauvaises requêtes)
