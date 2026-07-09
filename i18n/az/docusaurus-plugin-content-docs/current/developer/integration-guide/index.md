---
title: İnteqrasiya bələdçisi
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# İnteqrasiya Bələdçisi

Bu bələdçi Ultimate Multisite ilə ümumi inteqrasiya nümunələrini əhatə edir, o cümlədən xarici xidmətlərə qoşulma, fərdi ödəniş gateway-lərinin qurulması və webhook-ların idarə edilməsi.

İzolyasiya olunmuş tenant infrastrukturu üçün suveren tenant bootstrap-u, miqrasiya yoxlaması, SSO və söndürmə üzrə təlimatlar üçün [Multi-Tenancy İnteqrasiyası](./multi-tenancy) bölməsinə baxın.

## CRM İnteqrasiyası

Yeni müştərilər qeydiyyatdan keçdikdə müştəri məlumatlarını CRM-inizlə sinxronlaşdırın:

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

## Analytics İnteqrasiyası

Müştəri həyat dövrü boyunca əsas biznes hadisələrini izləyin:

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

## Növbəti Addımlar

- [Fərdi Gateway İnkişafı](./custom-gateway) — Öz ödəniş gateway-inizi yaradın
- [Webhook İdarəetməsi](./webhooks) — Fərdi webhook endpoint-ləri yaradın
- [Multi-Tenancy İnteqrasiyası](./multi-tenancy) — Suveren tenant həyat dövrü axınları ilə inteqrasiya edin
