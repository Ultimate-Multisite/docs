---
title: එකීකරණ මාර්ගෝපදේශය
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ඒකාබද්ධ කිරීමේ මාර්ගෝපදේශය {#integration-guide}

මෙම මාර්ගෝපදේශය Ultimate Multisite සමඟ බාහිර සේවාවලට සම්බන්ධ වීම, අභිරුචි ගෙවීම් ද්වාර සාදීම, සහ webhooks හැසිරවීම ඇතුළු සාමාන්‍ය ඒකාබද්ධ කිරීමේ රටා ආවරණය කරයි.

වෙන් කළ tenant යටිතල පහසුකම් සඳහා, ස්වෛරී tenant ආරම්භක සැකසුම, සංක්‍රමණ සත්‍යාපනය, SSO, සහ ඉවත් කිරීමේ මාර්ගෝපදේශ සඳහා [බහු-tenant ඒකාබද්ධ කිරීම](./multi-tenancy) බලන්න.

## CRM ඒකාබද්ධ කිරීම {#crm-integration}

නව ගනුදෙනුකරුවන් ලියාපදිංචි වන විට ගනුදෙනුකරු දත්ත ඔබේ CRM වෙත සමමුහුර්ත කරන්න:

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

## විශ්ලේෂණ ඒකාබද්ධ කිරීම {#analytics-integration}

ගනුදෙනුකරු ජීවන චක්‍රය පුරා ප්‍රධාන ව්‍යාපාරික සිදුවීම් අනුගමනය කරන්න:

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

## ඊළඟ පියවර {#next-steps}

- [අභිරුචි ද්වාර සංවර්ධනය](./custom-gateway) — ඔබේම ගෙවීම් ද්වාරය සාදන්න
- [Webhook හැසිරවීම](./webhooks) — අභිරුචි webhook endpoints සාදන්න
- [බහු-tenant ඒකාබද්ධ කිරීම](./multi-tenancy) — ස්වෛරී tenant ජීවන චක්‍ර ප්‍රවාහයන් සමඟ ඒකාබද්ධ කරන්න
