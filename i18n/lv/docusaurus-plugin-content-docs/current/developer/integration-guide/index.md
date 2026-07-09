---
title: Integrācijas ceļvedis
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrācijas ceļvedis

Šis ceļvedis aptver biežākos integrācijas modeļus ar Ultimate Multisite, tostarp savienošanu ar ārējiem pakalpojumiem, pielāgotu maksājumu vārteju izveidi un webhook apstrādi.

Izolētai tenant infrastruktūrai skatiet [Multi-Tenancy integrāciju](./multi-tenancy), lai iegūtu norādījumus par suverēna tenant sākotnējo iestatīšanu, migrācijas pārbaudi, SSO un noņemšanu.

## CRM integrācija

Sinhronizējiet klientu datus ar savu CRM, kad reģistrējas jauni klienti:

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

## Analītikas integrācija

Izsekojiet galvenos biznesa notikumus visā klienta dzīves ciklā:

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

## Nākamās darbības

- [Pielāgotas vārtejas izstrāde](./custom-gateway) — Izveidojiet savu maksājumu vārteju
- [Webhook apstrāde](./webhooks) — Izveidojiet pielāgotus webhook endpointus
- [Multi-Tenancy integrācija](./multi-tenancy) — Integrējiet ar suverēna tenant dzīves cikla plūsmām
