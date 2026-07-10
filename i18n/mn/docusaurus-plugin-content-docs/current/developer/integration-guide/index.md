---
title: Интеграцийн гарын авлага
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Интеграцийн гарын авлага {#integration-guide}

Энэ гарын авлага нь Ultimate Multisite-тэй түгээмэл интеграцийн хэв маягуудыг хамарна, үүнд гадаад үйлчилгээнүүдтэй холбогдох, өөрийн төлбөрийн гарцууд бүтээх, мөн webhooks боловсруулах зэрэг орно.

Тусгаарлагдсан түрээслэгчийн дэд бүтцийн хувьд sovereign tenant bootstrap, migration verification, SSO, болон teardown зааварчилгааг [Multi-Tenancy Integration](./multi-tenancy)-аас үзнэ үү.

## CRM интеграци {#crm-integration}

Шинэ хэрэглэгчид бүртгүүлэх үед харилцагчийн өгөгдлийг таны CRM рүү синк хийнэ үү:

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

## Аналитикийн интеграци {#analytics-integration}

Харилцагчийн амьдралын мөчлөгийн туршид бизнесийн гол үйл явдлуудыг хянаарай:

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

## Дараагийн алхмууд {#next-steps}

- [Custom Gateway Development](./custom-gateway) — Өөрийн төлбөрийн гарцыг бүтээгээрэй
- [Webhook Handling](./webhooks) — Өөрийн webhook endpoint-уудыг үүсгээрэй
- [Multi-Tenancy Integration](./multi-tenancy) — Sovereign tenant амьдралын мөчлөгийн урсгалуудтай интеграц хийгээрэй
