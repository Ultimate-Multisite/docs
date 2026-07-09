---
title: Integrationsvejledning
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrationsguide

Denne guide dækker almindelige integrationsmønstre med Ultimate Multisite, herunder tilslutning til eksterne tjenester, opbygning af brugerdefinerede betalingsgateways og håndtering af webhooks.

For isoleret tenant-infrastruktur, se [Multi-Tenancy-integration](./multi-tenancy) for vejledning om sovereign tenant bootstrap, migreringsverifikation, SSO og nedlukning.

## CRM-integration

Synkroniser kundedata til dit CRM, når nye kunder tilmelder sig:

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

## Analytics-integration

Spor centrale forretningshændelser gennem kundens livscyklus:

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

## Næste trin

- [Udvikling af brugerdefineret gateway](./custom-gateway) — Byg din egen betalingsgateway
- [Webhook-håndtering](./webhooks) — Opret brugerdefinerede webhook-endpoints
- [Multi-Tenancy-integration](./multi-tenancy) — Integrer med sovereign tenant-livscyklusflows
