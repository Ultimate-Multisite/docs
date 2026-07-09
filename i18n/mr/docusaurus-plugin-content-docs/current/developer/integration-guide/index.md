---
title: एकत्रीकरण मार्गदर्शक
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# इंटिग्रेशन मार्गदर्शक {#integration-guide}

या मार्गदर्शकात Ultimate Multisite सोबतचे सामान्य इंटिग्रेशन नमुने समाविष्ट आहेत, ज्यामध्ये बाह्य सेवांशी कनेक्ट करणे, सानुकूल पेमेंट गेटवे तयार करणे आणि webhooks हाताळणे यांचा समावेश आहे.

अलग tenant इन्फ्रास्ट्रक्चरसाठी, सार्वभौम tenant बूटस्ट्रॅप, स्थलांतर पडताळणी, SSO आणि टिअरडाउन मार्गदर्शनासाठी [Multi-Tenancy Integration](./multi-tenancy) पहा.

## CRM इंटिग्रेशन {#crm-integration}

नवीन ग्राहक साइन अप करतात तेव्हा ग्राहक डेटा तुमच्या CRM शी सिंक करा:

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

## Analytics इंटिग्रेशन {#analytics-integration}

ग्राहक जीवनचक्रभर प्रमुख व्यवसाय घटना ट्रॅक करा:

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

## पुढील पायऱ्या {#next-steps}

- [Custom Gateway Development](./custom-gateway) — तुमचा स्वतःचा पेमेंट गेटवे तयार करा
- [Webhook Handling](./webhooks) — सानुकूल webhook endpoints तयार करा
- [Multi-Tenancy Integration](./multi-tenancy) — सार्वभौम tenant जीवनचक्र प्रवाहांशी इंटिग्रेट करा
