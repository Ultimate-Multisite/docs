---
title: Integratiounsuleedung
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integratiounsguide

Dëse Guide deckt heefeg Integratiounsmustere mat Ultimate Multisite of, inklusiv d'Verbanne mat externe Servicer, d'Opbaue vu personaliséierte Bezuel-Gateways an d'Ëmgoe mat Webhooks.

Fir isoléiert Tenant-Infrastruktur, kuckt [Multi-Tenancy-Integratioun](./multi-tenancy) fir Uleedung iwwer souveränen Tenant-Bootstrap, Migratiounsverifikatioun, SSO an Ofbau.

## CRM-Integratioun {#crm-integration}

Synchroniséiert Clientsdaten mat Ärem CRM, wann nei Clienten sech umellen:

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

## Analytics-Integratioun {#analytics-integration}

Verfollegt wichteg Geschäftsevenementer iwwer de ganze Client-Liewenszyklus:

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

## Nächst Schrëtt {#next-steps}

- [Entwécklung vun engem personaliséierte Gateway](./custom-gateway) — Baut Ären eegene Bezuel-Gateway
- [Ëmgang mat Webhooks](./webhooks) — Erstellt personaliséiert Webhook-Endpunkten
- [Multi-Tenancy-Integratioun](./multi-tenancy) — Integréiert mat souveränen Tenant-Liewenszyklus-Flëss
