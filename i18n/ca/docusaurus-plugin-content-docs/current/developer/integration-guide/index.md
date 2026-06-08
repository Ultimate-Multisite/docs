---
title: Guia d'integració
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# Guia d'integració

Aquesta guia cobreix patrons d'integració comuns amb Ultimate Multisite, incloent la connexió a serveis externs, la creació de passarelles de pagament personalitzades i la gestió de webhooks.

## Integració amb CRM

Sincronitza les dades dels clients amb el teu CRM quan hi ha clients nous que s'hi cadu.

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

## Integració d'anàlítica

Rastreja esdeveniments clau de negoci durant el cicle de vida del client:

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

## Pròxims passos

- [Desenvolupament de passarelles personalitzades](./custom-gateway) — Crea la teva pròpia passarella de pagament
- [Gestió de webhooks](./webhooks) — Crea punts d'extrama webhook personalitzats
