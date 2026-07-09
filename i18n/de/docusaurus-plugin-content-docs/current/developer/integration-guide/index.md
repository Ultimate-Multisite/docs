---
title: Integrationsleitfaden
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrationsleitfaden {#integration-guide}

Dieser Leitfaden behandelt gängige Integrationsmuster mit Ultimate Multisite, einschließlich der Anbindung an externe Dienste, der Erstellung eigener Zahlungsgateways und der Verarbeitung von Webhooks.

Für isolierte Mandanteninfrastruktur siehe [Multi-Tenancy-Integration](./multi-tenancy) für Anleitungen zu souveränem Mandanten-Bootstrap, Migrationsverifizierung, SSO und Teardown.

## CRM-Integration {#crm-integration}

Synchronisiere Kundendaten mit deinem CRM, wenn sich neue Kunden registrieren:

```php
add_action('wu_customer_post_create', 'sync_customer_to_crm');

function sync_customer_to_crm($customer) {
    $crm_api = new Your_CRM_API();

    $crm_api->create_contact([
        'email' => $customer->get_email(),
        'name' => $customer->get_display_name(),
        'signup_date' => $customer->get_date_registered(),
        'plan' => $customer->get_membership()->get_plan()->get_name()
    ]);

    // Store CRM ID for future reference
    $customer->add_meta('crm_contact_id', $crm_api->get_last_contact_id());
}
```

## Analytics-Integration {#analytics-integration}

Verfolge wichtige Geschäftsereignisse über den gesamten Kundenlebenszyklus hinweg:

```php
add_action('wu_checkout_completed', 'track_conversion', 10, 3);
add_action('wu_membership_status_to_cancelled', 'track_churn');
add_action('wu_payment_failed', 'track_payment_failure');

function track_conversion($payment, $customer, $membership) {
    // Google Analytics 4
    gtag('event', 'purchase', [
        'transaction_id' => $payment->get_id(),
        'value' => $payment->get_total(),
        'currency' => $payment->get_currency(),
        'items' => [
            [
                'item_id' => $membership->get_plan()->get_id(),
                'item_name' => $membership->get_plan()->get_name(),
                'category' => 'subscription',
                'quantity' => 1,
                'price' => $payment->get_total()
            ]
        ]
    ]);
}
```

## Nächste Schritte {#next-steps}

- [Entwicklung eines eigenen Gateways](./custom-gateway) — Erstelle dein eigenes Zahlungsgateway
- [Webhook-Verarbeitung](./webhooks) — Erstelle eigene Webhook-Endpunkte
- [Multi-Tenancy-Integration](./multi-tenancy) — Integriere dich in souveräne Mandanten-Lebenszyklusabläufe
