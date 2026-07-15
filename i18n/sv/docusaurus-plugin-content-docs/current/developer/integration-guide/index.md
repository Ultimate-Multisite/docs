---
title: Integrationsguide
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrationsguide

Den här guiden täcker vanliga integrationsmönster med Ultimate Multisite, inklusive att ansluta till externa tjänster, bygga anpassade betalningsgateways och hantera webhooks.

För isolerad klientinfrastruktur, se [Multi-Tenancy Integration](./multi-tenancy) för sovereign tenant bootstrap, migreringsverifiering, SSO och vägledning för nedmontering.

## CRM-integration {#crm-integration}

Synkronisera kunddata till ditt CRM när nya kunder registrerar sig:

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

## Analytics-integration {#analytics-integration}

Spåra viktiga affärshändelser genom hela kundlivscykeln:

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

## Nästa steg {#next-steps}

- [Utveckling av anpassad gateway](./custom-gateway) — Bygg din egen betalningsgateway
- [Webhook-hantering](./webhooks) — Skapa anpassade webhook-endpoints
- [Multi-Tenancy Integration](./multi-tenancy) — Integrera med sovereign tenant-livscykelflöden
