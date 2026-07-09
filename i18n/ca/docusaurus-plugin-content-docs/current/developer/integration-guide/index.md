---
title: Guia d'integració
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Guia d’integració {#integration-guide}

Aquesta guia cobreix patrons d’integració habituals amb Ultimate Multisite, incloent-hi la connexió a serveis externs, la creació de passarel·les de pagament personalitzades i la gestió de webhooks.

Per a infraestructura de tenant aïllada, consulteu [Integració Multi-Tenancy](./multi-tenancy) per obtenir orientació sobre bootstrap de tenant sobirà, verificació de migracions, SSO i desmuntatge.

## Integració CRM {#crm-integration}

Sincronitzeu les dades de clients amb el vostre CRM quan es registrin clients nous:

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

## Integració d’analítiques {#analytics-integration}

Feu el seguiment d’esdeveniments empresarials clau al llarg del cicle de vida del client:

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

## Passos següents {#next-steps}

- [Desenvolupament de passarel·la personalitzada](./custom-gateway) — Creeu la vostra pròpia passarel·la de pagament
- [Gestió de webhooks](./webhooks) — Creeu endpoints de webhook personalitzats
- [Integració Multi-Tenancy](./multi-tenancy) — Integreu-vos amb fluxos del cicle de vida de tenant sobirà
