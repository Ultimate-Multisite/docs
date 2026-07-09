---
title: Sprievodca integráciou
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Sprievodca integráciou

Tento sprievodca pokrýva bežné integračné vzory s Ultimate Multisite vrátane pripájania k externým službám, vytvárania vlastných platobných brán a spracovania webhookov.

Pre izolovanú infraštruktúru nájomcov si pozrite [Integrácia Multi-Tenancy](./multi-tenancy), kde nájdete pokyny k suverénnemu spusteniu nájomcu, overeniu migrácie, SSO a zrušeniu.

## Integrácia CRM

Synchronizujte údaje zákazníkov do svojho CRM, keď sa zaregistrujú noví zákazníci:

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

## Integrácia analytiky

Sledujte kľúčové obchodné udalosti naprieč životným cyklom zákazníka:

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

## Ďalšie kroky

- [Vývoj vlastnej brány](./custom-gateway) — Vytvorte si vlastnú platobnú bránu
- [Spracovanie webhookov](./webhooks) — Vytvorte vlastné endpointy webhookov
- [Integrácia Multi-Tenancy](./multi-tenancy) — Integrujte sa so suverénnymi tokmi životného cyklu nájomcov
