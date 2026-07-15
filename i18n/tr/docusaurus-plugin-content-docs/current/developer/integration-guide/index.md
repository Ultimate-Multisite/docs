---
title: Entegrasyon Kılavuzu
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Entegrasyon Kılavuzu

Bu kılavuz, harici hizmetlere bağlanma, özel ödeme ağ geçitleri oluşturma ve webhook’ları işleme dahil olmak üzere Ultimate Multisite ile yaygın entegrasyon kalıplarını kapsar.

İzole kiracı altyapısı için egemen kiracı bootstrap, geçiş doğrulama, SSO ve kaldırma rehberliği amacıyla [Multi-Tenancy Entegrasyonu](./multi-tenancy) bölümüne bakın.

## CRM Entegrasyonu {#crm-integration}

Yeni müşteriler kaydolduğunda müşteri verilerini CRM’inize senkronize edin:

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

## Analytics Entegrasyonu {#analytics-integration}

Müşteri yaşam döngüsü boyunca temel iş olaylarını takip edin:

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

## Sonraki Adımlar {#next-steps}

- [Özel Gateway Geliştirme](./custom-gateway) — Kendi ödeme ağ geçidinizi oluşturun
- [Webhook İşleme](./webhooks) — Özel webhook endpoint’leri oluşturun
- [Multi-Tenancy Entegrasyonu](./multi-tenancy) — Egemen kiracı yaşam döngüsü akışlarıyla entegre edin
