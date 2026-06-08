---
title: एकात्मता मार्गदर्शिका
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# इंटिग्रेशन गाईड

हा गाईड Ultimate Multisite सोबतचे सामान्य इंटिग्रेशन पॅटर्न कव्हर करतो. यात बाह्य सेवांशी जोडणे, कस्टम पेमेंट गेटवे बनवणे आणि वेबहुक्स हाताळणे यांचा समावेश आहे.

## CRM इंटिग्रेशन

जेव्हा नवीन ग्राहक साइन अप करतात, तेव्हा त्यांचे डेटा तुमच्या CRM मध्ये सिंक (Sync) करा:

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

## ॲनालिटिक्स इंटिग्रेशन

ग्राहक जीवनचक्र (customer lifecycle) दरम्यान महत्त्वाच्या व्यावसायिक घटनांचा मागोवा घ्या:

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

## पुढील पाऊले

- [Custom Gateway Development](./custom-gateway) — स्वतःचे पेमेंट गेटवे तयार करा
- [Webhook Handling](./webhooks) — कस्टम वेबहुक एंडपॉइंट्स तयार करा
