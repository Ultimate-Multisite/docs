---
title: Integratsiya qo‘llanmasi
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integratsiya qo‘llanmasi

Ushbu qo‘llanma Ultimate Multisite bilan keng tarqalgan integratsiya andozalarini, jumladan tashqi xizmatlarga ulanish, maxsus to‘lov shlyuzlarini yaratish va webhooklarni qayta ishlashni qamrab oladi.

Ajratilgan tenant infratuzilmasi uchun sovereign tenant bootstrap, migratsiyani tekshirish, SSO va teardown bo‘yicha yo‘riqnoma uchun [Multi-Tenancy integratsiyasi](./multi-tenancy) sahifasiga qarang.

## CRM integratsiyasi

Yangi mijozlar ro‘yxatdan o‘tganda mijoz ma’lumotlarini CRM’ingizga sinxronlang:

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

## Analytics integratsiyasi

Mijoz hayotiy sikli bo‘ylab asosiy biznes hodisalarini kuzating:

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

## Keyingi qadamlar

- [Maxsus Gateway ishlab chiqish](./custom-gateway) — O‘zingizning to‘lov shlyuzingizni yarating
- [Webhooklarni qayta ishlash](./webhooks) — Maxsus webhook endpointlarini yarating
- [Multi-Tenancy integratsiyasi](./multi-tenancy) — Sovereign tenant hayotiy sikli oqimlari bilan integratsiya qiling
