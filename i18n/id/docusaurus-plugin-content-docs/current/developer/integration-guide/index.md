---
title: Panduan Integrasi
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Panduan Integrasi

Panduan ini mencakup pola integrasi umum dengan Ultimate Multisite, termasuk menghubungkan ke layanan eksternal, membangun gateway pembayaran kustom, dan menangani webhook.

Untuk infrastruktur tenant terisolasi, lihat [Integrasi Multi-Tenancy](./multi-tenancy) untuk panduan bootstrap tenant berdaulat, verifikasi migrasi, SSO, dan teardown.

## Integrasi CRM {#crm-integration}

Sinkronkan data pelanggan ke CRM Anda saat pelanggan baru mendaftar:

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

Lacak peristiwa bisnis utama di sepanjang siklus hidup pelanggan:

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

## Langkah Berikutnya {#next-steps}

- [Pengembangan Gateway Kustom](./custom-gateway) — Bangun gateway pembayaran Anda sendiri
- [Penanganan Webhook](./webhooks) — Buat endpoint webhook kustom
- [Integrasi Multi-Tenancy](./multi-tenancy) — Integrasikan dengan alur siklus hidup tenant berdaulat
