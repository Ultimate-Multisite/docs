---
title: ڕێبەری یەکگرتن
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ڕێبەری Integration

ئەم ڕێبەرە شێوازە باوەکانی Integration لەگەڵ Ultimate Multisite دەگرێتەوە، لەوانە پەیوەستبوون بە خزمەتگوزارییە دەرەکییەکان، دروستکردنی payment gateway ـی تایبەتمەند، و مامەڵەکردن لەگەڵ webhooks.

بۆ ژێرخانی کرێچیی جیاکراوە، بڕوانە [Integration ـی Multi-Tenancy](./multi-tenancy) بۆ ڕێنمایی bootstrap ـی کرێچیی سەربەخۆ، پشتڕاستکردنەوەی migration، SSO، و teardown.

## Integration ـی CRM {#crm-integration}

داتای کڕیار هاوکات بکە بۆ CRM ـەکەت کاتێک کڕیارانی نوێ خۆیان تۆمار دەکەن:

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

## Integration ـی Analytics {#analytics-integration}

ڕووداوە گرنگەکانی بازرگانی بە درێژایی سووڕی ژیانی کڕیار بەدوادا بچۆ:

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

## هەنگاوەکانی دواتر {#next-steps}

- [پەرەپێدانی Gateway ـی تایبەتمەند](./custom-gateway) — payment gateway ـی خۆت دروست بکە
- [مامەڵەکردن لەگەڵ Webhook](./webhooks) — endpoint ـی webhook ـی تایبەتمەند دروست بکە
- [Integration ـی Multi-Tenancy](./multi-tenancy) — لەگەڵ ڕەوتەکانی سووڕی ژیانی کرێچیی سەربەخۆ یەکبگرە
