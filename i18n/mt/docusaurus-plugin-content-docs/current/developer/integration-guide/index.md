---
title: Gwida għall-Integrazzjoni
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Gwida għall-Integrazzjoni

Din il-gwida tkopri mudelli komuni ta' integrazzjoni ma' Ultimate Multisite, inkluż il-konnessjoni ma' servizzi esterni, il-bini ta' gateways tal-ħlas personalizzati, u l-immaniġġjar ta' webhooks.

Għal infrastruttura iżolata ta' tenant, ara [Integrazzjoni Multi-Tenancy](./multi-tenancy) għal gwida dwar bootstrap ta' tenant sovran, verifika tal-migrazzjoni, SSO, u teardown.

## Integrazzjoni CRM {#crm-integration}

Issinkronizza d-data tal-klijenti mas-CRM tiegħek meta klijenti ġodda jirreġistraw:

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

## Integrazzjoni tal-Analitika {#analytics-integration}

Segwi avvenimenti kummerċjali ewlenin matul iċ-ċiklu tal-ħajja tal-klijent:

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

## Passi li Jmiss {#next-steps}

- [Żvilupp ta' Gateway Personalizzat](./custom-gateway) — Ibni l-gateway tal-ħlas tiegħek stess
- [Immaniġġjar ta' Webhooks](./webhooks) — Oħloq punti ta' tmiem tal-webhook personalizzati
- [Integrazzjoni Multi-Tenancy](./multi-tenancy) — Integra ma' flussi taċ-ċiklu tal-ħajja ta' tenant sovran
