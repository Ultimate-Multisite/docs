---
title: بىرلەشتۈرۈش قوللانمىسى
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# بىرلەشتۈرۈش قوللانمىسى {#integration-guide}

بۇ قوللانما Ultimate Multisite بىلەن كۆپ ئۇچرايدىغان بىرلەشتۈرۈش ئەندىزىلىرىنى، جۈملىدىن سىرتقى مۇلازىمەتلەرگە ئۇلاش، خاس ھەق تۆلەش دەرۋازىلىرىنى قۇرۇش ۋە webhookلارنى بىر تەرەپ قىلىشنى ئۆز ئىچىگە ئالىدۇ.

ئايرىم ئىجارىدار ئۇل ئەسلىھەسى ئۈچۈن، مۇستەقىل ئىجارىدارنى باشلاش، كۆچۈرۈشنى دەلىللەش، SSO ۋە چۇۋۇپ تاشلاش يېتەكچىلىكى ھەققىدە [كۆپ ئىجارىدارلىق بىرلەشتۈرۈش](./multi-tenancy) نى كۆرۈڭ.

## CRM بىرلەشتۈرۈش {#crm-integration}

يېڭى خېرىدارلار تىزىملاتقاندا خېرىدار سانلىق مەلۇماتلىرىنى CRMىڭىزغا ماسقەدەملەڭ:

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

## تەھلىل بىرلەشتۈرۈش {#analytics-integration}

خېرىدار ھاياتلىق دەۋرى بويىچە مۇھىم سودا ۋەقەلىرىنى ئىزلاڭ:

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

## كېيىنكى قەدەملەر {#next-steps}

- [خاس ھەق تۆلەش دەرۋازىسى ئېچىش](./custom-gateway) — ئۆزىڭىزنىڭ ھەق تۆلەش دەرۋازىسىنى قۇرۇڭ
- [Webhook بىر تەرەپ قىلىش](./webhooks) — خاس webhook ئاخىرقى نۇقتىلىرىنى قۇرۇڭ
- [كۆپ ئىجارىدارلىق بىرلەشتۈرۈش](./multi-tenancy) — مۇستەقىل ئىجارىدار ھاياتلىق دەۋرى ئېقىملىرى بىلەن بىرلەشتۈرۈڭ
