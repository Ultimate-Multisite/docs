---
title: সংযোজন নির্দেশিকা
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# ইন্টিগ্ৰেচন গাইড

এই গাইডটোৱে Ultimate Multisite লগত সাধাৰণ ইন্টিগ্ৰেচন ধৰণসমূহ কভার কৰে। ইয়াৰ ভিতৰত বাহ্যিক সেৱাসমূহৰ সৈতে সংযোগ কৰা, নিজৰ পেমেন্ট গেটৱে বিল্ড কৰা, আৰু webhook ব্যৱস্থাপনা কৰা অন্তৰ্ভুক্ত।

## CRM ইন্টিগ্ৰেচন

নতুন ग्राहकাই নাম লেখোলে তেওঁলোকৰ তথ্য আপোনাৰ CRM লগত সিঙ্ক কৰক:

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

## Analytics ইন্টিগ্ৰেচন

ग्राहकৰ জীৱনচক্ৰৰ বিভিন্ন ধাপে মুখ্য ব্যৱসায়িক ঘটনাসমূহ ট্ৰেক কৰক:

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

## পৰৱৰ্তী পদক্ষেপসমূহ

- [Custom Gateway Development](./custom-gateway) — নিজৰ পেমেন্ট গেটৱে বিল্ড কৰক
- [Webhook Handling](./webhooks) — কাস্টম webhook end-point সৃষ্টি কৰক
