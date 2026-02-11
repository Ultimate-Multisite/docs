---
title: Webhook-Verarbeitung
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook-Verarbeitung

Erstellen Sie benutzerdefinierte Webhook-Endpunkte, um Ereignisse von externen Diensten zu empfangen und Daten mit Ultimate Multisite zu synchronisieren.

## Benutzerdefinierter Webhook-Endpunkt

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

## Sicherheitsüberlegungen

- Verifizieren Sie immer Webhook-Signaturen mit HMAC oder einem gemeinsamen Geheimnis
- Verwenden Sie ein `permission_callback` auf Ihrer REST-Route — setzen Sie es niemals in der Produktion auf `__return_true`
- Validieren und bereinigen Sie alle eingehenden Payload-Daten, bevor Sie darauf reagieren
- Geben Sie geeignete HTTP-Statuscodes zurück (200 für Erfolg, 400 für fehlerhafte Anfragen)
