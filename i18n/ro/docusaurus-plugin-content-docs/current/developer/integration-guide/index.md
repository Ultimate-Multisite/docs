---
title: Ghid de integrare
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Ghid de integrare {#integration-guide}

Acest ghid acoperă tipare comune de integrare cu Ultimate Multisite, inclusiv conectarea la servicii externe, construirea de gateway-uri de plată personalizate și gestionarea webhook-urilor.

Pentru infrastructura de tenant izolată, consultați [Integrarea Multi-Tenancy](./multi-tenancy) pentru bootstrap-ul tenant-ului suveran, verificarea migrării, SSO și îndrumări pentru teardown.

## Integrare CRM {#crm-integration}

Sincronizați datele clienților cu CRM-ul dvs. atunci când clienții noi se înregistrează:

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

## Integrare analytics {#analytics-integration}

Urmăriți evenimentele-cheie de business pe parcursul ciclului de viață al clientului:

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

## Pașii următori {#next-steps}

- [Dezvoltare gateway personalizat](./custom-gateway) — Construiți-vă propriul gateway de plată
- [Gestionarea webhook-urilor](./webhooks) — Creați endpoint-uri webhook personalizate
- [Integrare Multi-Tenancy](./multi-tenancy) — Integrați-vă cu fluxurile ciclului de viață al tenant-ului suveran
