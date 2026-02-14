---
title: دليل التكامل
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# دليل التكامل

يغطي هذا الدليل الأنماط الشائعة للتكامل مع Ultimate Multisite، بما في ذلك الاتصال بالخدمات الخارجية، وبناء بوابات دفع مخصصة، ومعالجة Webhooks.

## تكامل CRM

مزامنة بيانات العملاء مع CRM الخاص بك عند تسجيل عملاء جدد:

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

## تكامل التحليلات

تتبع الأحداث التجارية الرئيسية عبر دورة حياة العميل:

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

## الخطوات التالية

- [تطوير بوابة دفع مخصصة](./custom-gateway) — بناء بوابة دفع خاصة بك
- [معالجة Webhooks](./webhooks) — إنشاء نقاط نهاية Webhook مخصصة
