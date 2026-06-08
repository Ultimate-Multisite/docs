---
title: एकीकरण मार्गदर्शिका
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# एकीकरण गाइड

यह गाइड Ultimate Multisite के साथ सामान्य इंटीग्रेशन पैटर्न को कवर करता है, जिसमें बाहरी सेवाओं से कनेक्ट करना, कस्टम पेमेंट गेटवे बनाना और वेबहुक्स को हैंडल करना शामिल है।

## CRM इंटीग्रेशन

जब नए ग्राहक साइन अप करते हैं तो उनके डेटा को अपने CRM के साथ सिंक करें:

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

## एनालिटिक्स इंटीग्रेशन

ग्राहक जीवनचक्र में महत्वपूर्ण व्यावसायिक घटनाओं को ट्रैक करें:

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

## अगले कदम

- [Custom Gateway Development](./custom-gateway) — अपना पेमेंट गेटवे बनाएं
- [Webhook Handling](./webhooks) — कस्टम वेबहुक एंडपॉइंट बनाएं
