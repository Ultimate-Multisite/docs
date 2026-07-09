---
title: راهنمای یکپارچه‌سازی
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# راهنمای یکپارچه‌سازی

این راهنما الگوهای رایج یکپارچه‌سازی با Ultimate Multisite را پوشش می‌دهد، از جمله اتصال به سرویس‌های خارجی، ساخت درگاه‌های پرداخت سفارشی، و مدیریت webhooks.

برای زیرساخت مستأجر ایزوله، برای راهنمایی درباره bootstrap مستأجر مستقل، تأیید مهاجرت، SSO، و teardown به [یکپارچه‌سازی چندمستأجری](./multi-tenancy) مراجعه کنید.

## یکپارچه‌سازی CRM

وقتی مشتریان جدید ثبت‌نام می‌کنند، داده‌های مشتری را با CRM خود همگام‌سازی کنید:

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

## یکپارچه‌سازی Analytics

رویدادهای کلیدی کسب‌وکار را در سراسر چرخه عمر مشتری پیگیری کنید:

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

## گام‌های بعدی

- [توسعه Gateway سفارشی](./custom-gateway) — درگاه پرداخت خودتان را بسازید
- [مدیریت Webhook](./webhooks) — endpointهای webhook سفارشی ایجاد کنید
- [یکپارچه‌سازی چندمستأجری](./multi-tenancy) — با جریان‌های چرخه عمر مستأجر مستقل یکپارچه شوید
