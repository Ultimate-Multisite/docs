---
title: מדריך אינטגרציה
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# מדריך אינטגרציה {#integration-guide}

מדריך זה מכסה דפוסי אינטגרציה נפוצים עם Ultimate Multisite, כולל חיבור לשירותים חיצוניים, בניית שערי תשלום מותאמים אישית וטיפול ב-webhooks.

לתשתית דיירים מבודדת, ראו [אינטגרציית Multi-Tenancy](./multi-tenancy) להנחיות על אתחול דייר ריבוני, אימות הגירה, SSO ופירוק.

## אינטגרציית CRM {#crm-integration}

סנכרנו נתוני לקוחות אל ה-CRM שלכם כאשר לקוחות חדשים נרשמים:

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

## אינטגרציית אנליטיקה {#analytics-integration}

עקבו אחר אירועים עסקיים מרכזיים לאורך מחזור חיי הלקוח:

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

## השלבים הבאים {#next-steps}

- [פיתוח שער מותאם אישית](./custom-gateway) — בנו שער תשלום משלכם
- [טיפול ב-Webhook](./webhooks) — צרו נקודות קצה webhook מותאמות אישית
- [אינטגרציית Multi-Tenancy](./multi-tenancy) — השתלבו עם תהליכי מחזור החיים של דייר ריבוני
