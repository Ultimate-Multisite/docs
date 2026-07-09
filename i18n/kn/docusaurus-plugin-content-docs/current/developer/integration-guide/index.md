---
title: ಏಕೀಕರಣ ಮಾರ್ಗದರ್ಶಿ
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ಏಕೀಕರಣ ಮಾರ್ಗದರ್ಶಿ {#integration-guide}

ಈ ಮಾರ್ಗದರ್ಶಿ Ultimate Multisite ಜೊತೆಗಿನ ಸಾಮಾನ್ಯ ಏಕೀಕರಣ ಮಾದರಿಗಳನ್ನು ಒಳಗೊಂಡಿದೆ. ಇದರಲ್ಲಿ ಬಾಹ್ಯ ಸೇವೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸುವುದು, ಕಸ್ಟಮ್ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ನಿರ್ಮಿಸುವುದು, ಮತ್ತು webhooks ನಿರ್ವಹಿಸುವುದು ಸೇರಿವೆ.

ಪ್ರತ್ಯೇಕ ಭಾಡಿಗೆದಾರ ಮೂಲಸೌಕರ್ಯಕ್ಕಾಗಿ, ಸ್ವಾಯತ್ತ ಭಾಡಿಗೆದಾರ bootstrap, migration verification, SSO, ಮತ್ತು teardown ಮಾರ್ಗದರ್ಶನಕ್ಕೆ [ಬಹು-ಭಾಡಿಗೆದಾರಿಕೆ ಏಕೀಕರಣ](./multi-tenancy) ನೋಡಿ.

## CRM ಏಕೀಕರಣ {#crm-integration}

ಹೊಸ ಗ್ರಾಹಕರು ನೋಂದಾಯಿಸಿದಾಗ ಗ್ರಾಹಕ ಡೇಟಾವನ್ನು ನಿಮ್ಮ CRM ಗೆ sync ಮಾಡಿ:

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

## Analytics ಏಕೀಕರಣ {#analytics-integration}

ಗ್ರಾಹಕ ಜೀವನಚಕ್ರದಾದ್ಯಂತ ಪ್ರಮುಖ ವ್ಯವಹಾರ ಘಟನೆಗಳನ್ನು track ಮಾಡಿ:

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

## ಮುಂದಿನ ಹಂತಗಳು {#next-steps}

- [ಕಸ್ಟಮ್ Gateway ಅಭಿವೃದ್ಧಿ](./custom-gateway) — ನಿಮ್ಮದೇ ಪಾವತಿ ಗೇಟ್‌ವೇ ನಿರ್ಮಿಸಿ
- [Webhook ನಿರ್ವಹಣೆ](./webhooks) — ಕಸ್ಟಮ್ webhook endpoints ರಚಿಸಿ
- [ಬಹು-ಭಾಡಿಗೆದಾರಿಕೆ ಏಕೀಕರಣ](./multi-tenancy) — ಸ್ವಾಯತ್ತ ಭಾಡಿಗೆದಾರ ಜೀವನಚಕ್ರ flows ಜೊತೆ ಏಕೀಕರಿಸಿ
