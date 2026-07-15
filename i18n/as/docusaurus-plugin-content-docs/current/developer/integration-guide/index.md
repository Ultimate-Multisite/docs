---
title: একত্ৰীকৰণ নিৰ্দেশিকা
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# সংযোজন নিৰ্দেশিকা

এই নিৰ্দেশিকাত Ultimate Multisite-ৰ সৈতে সাধাৰণ সংযোজন ধৰণসমূহ সামৰি লোৱা হৈছে, য’ত বাহ্যিক সেৱাসমূহৰ সৈতে সংযোগ কৰা, স্বনিৰ্বাচিত পেমেণ্ট গেটৱে নিৰ্মাণ কৰা, আৰু webhooks পৰিচালনা কৰা অন্তৰ্ভুক্ত।

বিচ্ছিন্ন tenant আন্তঃগাঁথনিৰ বাবে, sovereign tenant bootstrap, migration verification, SSO, আৰু teardown নিৰ্দেশনাৰ বাবে [Multi-Tenancy Integration](./multi-tenancy) চাওক।

## CRM সংযোজন {#crm-integration}

নতুন গ্ৰাহকে sign up কৰিলে গ্ৰাহকৰ তথ্য আপোনাৰ CRM-লৈ sync কৰক:

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

## Analytics সংযোজন {#analytics-integration}

গ্ৰাহক জীৱনচক্ৰজুৰি মুখ্য ব্যৱসায়িক ঘটনাসমূহ track কৰক:

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

## পৰৱৰ্তী পদক্ষেপ {#next-steps}

- [স্বনিৰ্বাচিত Gateway উন্নয়ন](./custom-gateway) — আপোনাৰ নিজা পেমেণ্ট গেটৱে নিৰ্মাণ কৰক
- [Webhook পৰিচালনা](./webhooks) — স্বনিৰ্বাচিত webhook endpoint সৃষ্টি কৰক
- [Multi-Tenancy Integration](./multi-tenancy) — sovereign tenant lifecycle flows-ৰ সৈতে সংযোজন কৰক
