---
title: Integrációs útmutató
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrációs útmutató {#integration-guide}

Ez az útmutató az Ultimate Multisite gyakori integrációs mintáit mutatja be, beleértve a külső szolgáltatásokhoz való csatlakozást, az egyéni fizetési gateway-ek építését és a webhookok kezelését.

Izolált bérlői infrastruktúrához lásd: [Multi-Tenancy integráció](./multi-tenancy) a szuverén bérlő bootstrapelésére, migrációs ellenőrzésére, SSO-jára és lebontási útmutatására vonatkozóan.

## CRM-integráció {#crm-integration}

Szinkronizáld az ügyféladatokat a CRM-edbe, amikor új ügyfelek regisztrálnak:

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

## Analitikai integráció {#analytics-integration}

Kövesd nyomon a kulcsfontosságú üzleti eseményeket az ügyfél-életciklus során:

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

## Következő lépések {#next-steps}

- [Egyéni gateway-fejlesztés](./custom-gateway) — Építsd meg a saját fizetési gateway-edet
- [Webhook-kezelés](./webhooks) — Hozz létre egyéni webhook endpointokat
- [Multi-Tenancy integráció](./multi-tenancy) — Integráld a szuverén bérlő életciklus-folyamataival
