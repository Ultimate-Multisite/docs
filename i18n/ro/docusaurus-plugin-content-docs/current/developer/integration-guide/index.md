---
title: Ghid de Integrare
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# Ghid de Integrare

Acest ghid acoperă tiparele comune de integrare cu Ultimate Multisite, incluzând conectarea la servicii externe, crearea de gateway-uri de plată personalizate și gestionarea webhook-urilor.

## Integrarea cu CRM

Sincronizați datele clienților cu CRM-ul pentru a vă asigura că sunt actualizate când clienții se înscriu:

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

## Integrarea cu Analitica

Urmăriți evenimentele cheie din afaceri pe tot parcursul ciclului de viață al clientului:

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

## Pași Următori

- [Custom Gateway Development](./custom-gateway) — Creați propriul gateway de plată
- [Webhook Handling](./webhooks) — Creați puncte de intrare (endpoints) webhook personalizate
