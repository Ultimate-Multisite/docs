---
title: ইন্টিগ্রেশন গাইড
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ইন্টিগ্রেশন গাইড

এই গাইডে Ultimate Multisite-এর সঙ্গে সাধারণ ইন্টিগ্রেশন প্যাটার্নগুলো আলোচনা করা হয়েছে, যার মধ্যে বাহ্যিক সার্ভিসে সংযোগ, কাস্টম পেমেন্ট গেটওয়ে তৈরি, এবং webhook পরিচালনা অন্তর্ভুক্ত।

আলাদা tenant অবকাঠামোর জন্য, sovereign tenant bootstrap, migration verification, SSO, এবং teardown নির্দেশনার জন্য [Multi-Tenancy Integration](./multi-tenancy) দেখুন।

## CRM ইন্টিগ্রেশন {#crm-integration}

নতুন গ্রাহক সাইন আপ করলে আপনার CRM-এ গ্রাহকের ডেটা সিঙ্ক করুন:

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

## Analytics ইন্টিগ্রেশন {#analytics-integration}

গ্রাহক লাইফসাইকেলজুড়ে গুরুত্বপূর্ণ ব্যবসায়িক ইভেন্ট ট্র্যাক করুন:

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

## পরবর্তী ধাপ {#next-steps}

- [কাস্টম গেটওয়ে ডেভেলপমেন্ট](./custom-gateway) — নিজের পেমেন্ট গেটওয়ে তৈরি করুন
- [Webhook পরিচালনা](./webhooks) — কাস্টম webhook endpoint তৈরি করুন
- [Multi-Tenancy Integration](./multi-tenancy) — sovereign tenant lifecycle flow-এর সঙ্গে ইন্টিগ্রেট করুন
