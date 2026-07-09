---
title: دليل التكامل
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# دليل التكامل {#integration-guide}

يغطي هذا الدليل أنماط التكامل الشائعة مع Ultimate Multisite، بما في ذلك الاتصال بخدمات خارجية، وبناء بوابات دفع مخصصة، والتعامل مع webhooks.

للبنية التحتية المعزولة للمستأجرين، راجع [تكامل تعدد المستأجرين](./multi-tenancy) للحصول على إرشادات تمهيد المستأجر السيادي، والتحقق من الترحيل، وSSO، والإزالة.

## تكامل CRM {#crm-integration}

زامن بيانات العملاء إلى CRM الخاص بك عند تسجيل عملاء جدد:

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

## تكامل التحليلات {#analytics-integration}

تتبّع أحداث الأعمال الرئيسية عبر دورة حياة العميل:

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

## الخطوات التالية {#next-steps}

- [تطوير بوابة مخصصة](./custom-gateway) — ابنِ بوابة الدفع الخاصة بك
- [التعامل مع Webhook](./webhooks) — أنشئ endpoints مخصصة لـ webhook
- [تكامل تعدد المستأجرين](./multi-tenancy) — تكامل مع تدفقات دورة حياة المستأجر السيادي
