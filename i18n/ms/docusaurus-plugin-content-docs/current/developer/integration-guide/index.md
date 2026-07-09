---
title: Panduan Integrasi
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Panduan Integrasi

Panduan ini merangkumi corak integrasi biasa dengan Ultimate Multisite, termasuk menyambung kepada perkhidmatan luaran, membina gerbang pembayaran tersuai, dan mengendalikan webhook.

Untuk infrastruktur penyewa terpencil, lihat [Integrasi Multi-Tenancy](./multi-tenancy) untuk panduan bootstrap penyewa berdaulat, pengesahan migrasi, SSO, dan teardown.

## Integrasi CRM

Segerakkan data pelanggan ke CRM anda apabila pelanggan baharu mendaftar:

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

## Integrasi Analitik

Jejaki peristiwa perniagaan utama merentasi kitaran hayat pelanggan:

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

## Langkah Seterusnya

- [Pembangunan Gerbang Tersuai](./custom-gateway) — Bina gerbang pembayaran anda sendiri
- [Pengendalian Webhook](./webhooks) — Cipta endpoint webhook tersuai
- [Integrasi Multi-Tenancy](./multi-tenancy) — Integrasikan dengan aliran kitaran hayat penyewa berdaulat
