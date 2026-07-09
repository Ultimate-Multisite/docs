---
title: Pandhuan Integrasi
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Pandhuan Integrasi {#integration-guide}

Pandhuan iki nyakup pola integrasi umum karo Ultimate Multisite, kalebu nyambung menyang layanan eksternal, mbangun payment gateway khusus, lan nangani webhooks.

Kanggo infrastruktur tenant sing kapisah, delengen [Integrasi Multi-Tenancy](./multi-tenancy) kanggo pandhuan bootstrap tenant sovereign, verifikasi migrasi, SSO, lan teardown.

## Integrasi CRM {#crm-integration}

Sinkronake data pelanggan menyang CRM nalika pelanggan anyar ndhaptar:

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

## Integrasi Analytics {#analytics-integration}

Lacak acara bisnis utama ing saindhenging siklus urip pelanggan:

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

## Langkah Sabanjure {#next-steps}

- [Pangembangan Gateway Khusus](./custom-gateway) — Bangun payment gateway sampeyan dhewe
- [Nangani Webhook](./webhooks) — Gawe endpoint webhook khusus
- [Integrasi Multi-Tenancy](./multi-tenancy) — Integrasikake karo alur siklus urip tenant sovereign
