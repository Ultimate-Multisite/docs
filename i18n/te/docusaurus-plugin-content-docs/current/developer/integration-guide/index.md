---
title: ఎంటిగ్రేషన్ గైడ్
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# Integration Guide

ఈ గైడ్ Ultimate Multisite తో సాధారణ అనుసంధాన నమూనాలను కవర్ చేస్తుంది. ఇందులో బయటి సర్వీసులతో కనెక్ట్ చేయడం, కస్టమ్ పేమెంట్ గేట్‌వేలను తయారు చేయడం మరియు వెబ్‌హుక్స్‌ను నిర్వహించడం వంటివి ఉంటాయి.

## CRM Integration

కొత్త కస్టమర్‌లు సైన్ అప్ అయినప్పుడు వారి డేటాను మీ CRM లో సింక్ చేయండి:

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

## Analytics Integration

కస్టమర్ లైఫ్‌సైకిల్ అంతటా ముఖ్యమైన వ్యాపార ఈవెంట్‌లను ట్రాక్ చేయండి:

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

## Next Steps

- [Custom Gateway Development](./custom-gateway) — మీ సొంత పేమెంట్ గేట్‌వేను నిర్మించుకోండి
- [Webhook Handling](./webhooks) — కస్టమ్ వెబ్‌హుక్ ఎండ్‌పాయింట్‌లను సృష్టించండి
