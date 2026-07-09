---
title: ინტეგრაციის სახელმძღვანელო
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ინტეგრაციის სახელმძღვანელო

ეს სახელმძღვანელო მოიცავს Ultimate Multisite-თან ინტეგრაციის გავრცელებულ ნიმუშებს, მათ შორის გარე სერვისებთან დაკავშირებას, მორგებული გადახდის gateway-ების შექმნას და webhook-ების დამუშავებას.

იზოლირებული tenant ინფრასტრუქტურისთვის იხილეთ [Multi-Tenancy ინტეგრაცია](./multi-tenancy) სუვერენული tenant-ის bootstrap-ის, მიგრაციის ვერიფიკაციის, SSO-ისა და teardown-ის სახელმძღვანელოდ.

## CRM ინტეგრაცია

დაასინქრონეთ customer-ის მონაცემები თქვენს CRM-თან, როდესაც ახალი customer-ები დარეგისტრირდებიან:

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

## ანალიტიკის ინტეგრაცია

თვალყური ადევნეთ მთავარ ბიზნეს მოვლენებს customer-ის სასიცოცხლო ციკლის განმავლობაში:

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

## შემდეგი ნაბიჯები

- [მორგებული gateway-ის შემუშავება](./custom-gateway) — შექმენით თქვენი საკუთარი გადახდის gateway
- [Webhook-ების დამუშავება](./webhooks) — შექმენით მორგებული webhook endpoint-ები
- [Multi-Tenancy ინტეგრაცია](./multi-tenancy) — ინტეგრირდით სუვერენული tenant-ის სასიცოცხლო ციკლის ნაკადებთან
