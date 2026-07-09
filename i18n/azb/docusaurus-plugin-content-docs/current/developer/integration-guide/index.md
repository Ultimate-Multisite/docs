---
title: بیرلشدیرمه قولاووزو
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# بیرلشدیرمه قولاوزو {#integration-guide}

بو قولاوز Ultimate Multisite ایله یایغین بیرلشدیرمه الگو‌لاری‌نی اؤرتور؛ ائشیق سرویس‌لره باغلانماق، اؤزل اؤدنیش gateway-لری قورماق، و webhook-لاری ایداره ائتمک ده داخیل‌دیر.

آیری tenant آلت‌یاپیسی اوچون، sovereign tenant bootstrap، migration verification، SSO و teardown قولاوزلوغو اوچون [Multi-Tenancy Integration](./multi-tenancy) بؤلومونه باخین.

## CRM بیرلشدیرمه‌سی {#crm-integration}

یئنی موشتریلر قئیددن کئچنده، موشتری بیلگی‌لرینی CRM-ینیزه sync ائدین:

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

## Analytics بیرلشدیرمه‌سی {#analytics-integration}

موشتری lifecycle بویونجا اساس بیزنس اولایلاری‌نی ایزله‌یین:

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

## سونراکی آددیملار {#next-steps}

- [اؤزل Gateway گلیشدیرمه‌سی](./custom-gateway) — اؤز اؤدنیش gateway-ینیزی قورون
- [Webhook ایداره‌سی](./webhooks) — اؤزل webhook endpoint-لری یارادین
- [Multi-Tenancy Integration](./multi-tenancy) — sovereign tenant lifecycle آخین‌لاری ایله بیرلشدیرین
