---
title: Canllaw Integreiddio
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Canllaw Integreiddio

Mae’r canllaw hwn yn ymdrin â phatrymau integreiddio cyffredin gyda Ultimate Multisite, gan gynnwys cysylltu â gwasanaethau allanol, adeiladu pyrth talu personol, a thrin webhooks.

Ar gyfer seilwaith tenantiaid ynysig, gweler [Integreiddio Aml-denantiaeth](./multi-tenancy) am ganllawiau cychwyn tenantiaid sofran, gwirio mudo, SSO, a datgymalu.

## Integreiddio CRM {#crm-integration}

Cydamserwch ddata cwsmeriaid â’ch CRM pan fydd cwsmeriaid newydd yn cofrestru:

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

## Integreiddio Dadansoddeg {#analytics-integration}

Traciwch ddigwyddiadau busnes allweddol ar draws cylch bywyd y cwsmer:

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

## Camau Nesaf {#next-steps}

- [Datblygu Porth Personol](./custom-gateway) — Adeiladwch eich porth talu eich hun
- [Trin Webhooks](./webhooks) — Crëwch endpoints webhook personol
- [Integreiddio Aml-denantiaeth](./multi-tenancy) — Integreiddiwch â llifoedd cylch bywyd tenantiaid sofran
