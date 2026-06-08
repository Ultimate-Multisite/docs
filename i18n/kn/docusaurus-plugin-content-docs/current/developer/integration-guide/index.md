---
title: ಸಂಯೋಜನಾ ಮಾರ್ಗದರ್ಶಿ
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# Integration Guide

ಈ ಮಾರ್ಗದರ್ಶಿಯು Ultimate Multisite ನೊಂದಿಗೆ ಸಾಮಾನ್ಯ ಸಂಯೋಜನಾ ಮಾದರಿಗಳನ್ನು ಒಳಗೊಂಡಿದೆ. ಇದರಲ್ಲಿ ಬಾಹ್ಯ ಸೇವೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸುವುದು, ಕಸ್ಟಮ್ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ನಿರ್ಮಿಸುವುದು ಮತ್ತು ವೆಬ್‌ಹುಕ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು ಸೇರಿವೆ.

## CRM Integration

ಹೊಸ ಗ್ರಾಹಕರು ನೋಂದಾಯಿಸಿದಾಗ ಅವರ ಡೇಟಾವನ್ನು ನಿಮ್ಮ CRM ಗೆ ಸಿಂಕ್ (Sync) ಮಾಡಲು:

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

ಗ್ರಾಹಕರ ಜೀವನ ಚಕ್ರದಾದ್ಯಂತ ಪ್ರಮುಖ ವ್ಯಾಪಾರ ಘಟನೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ (Track) ಮಾಡಿ:

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

- [Custom Gateway Development](./custom-gateway) — ನಿಮ್ಮದೇ ಆದ ಪಾವತಿ ಗೇಟ್‌ವೇಯನ್ನು ನಿರ್ಮಿಸಿ
- [Webhook Handling](./webhooks) — ಕಸ್ಟಮ್ ವೆಬ್‌ಹುಕ್ ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗಳನ್ನು ರಚಿಸಿ
