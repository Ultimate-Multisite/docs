---
title: সংযুক্তি নির্দেশিকা
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# ইন্টিগ্রেশন গাইড

এই গাইডটি Ultimate Multisite-এর সাথে সাধারণ ইন্টিগ্রেশন প্যাটার্নগুলো কভার করে। এর মধ্যে রয়েছে বাইরের সার্ভিসগুলোর সাথে কানেক্ট করা, কাস্টম পেমেন্ট গেটওয়ে তৈরি করা এবং ওয়েবহুকস (webhooks) হ্যান্ডেল করা।

## CRM ইন্টিগ্রেশন

যখন নতুন গ্রাহক সাইন আপ করবেন, তখন তাদের ডেটা আপনার CRM-এ সিঙ্ক (sync) করুন:

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

## অ্যানালিটিক্স ইন্টিগ্রেশন

গ্রাহকের জীবনচক্র জুড়ে গুরুত্বপূর্ণ ব্যবসায়িক ইভেন্টগুলো ট্র্যাক করুন:

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

## পরবর্তী পদক্ষেপ

- [Custom Gateway Development](./custom-gateway) — আপনার নিজস্ব পেমেন্ট গেটওয়ে তৈরি করুন
- [Webhook Handling](./webhooks) — কাস্টম ওয়েবহুক এন্ডপয়েন্ট তৈরি করুন
