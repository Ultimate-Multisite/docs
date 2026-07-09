---
title: एकीकरण गाइड
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# एकीकरण मार्गदर्शिका

यह मार्गदर्शिका Ultimate Multisite के साथ सामान्य एकीकरण तरीकों को कवर करती है, जिसमें बाहरी सेवाओं से जुड़ना, कस्टम भुगतान गेटवे बनाना, और वेबहुक संभालना शामिल है।

अलग-थलग किरायेदार अवसंरचना के लिए, सार्वभौम किरायेदार बूटस्ट्रैप, माइग्रेशन सत्यापन, SSO, और हटाने संबंधी मार्गदर्शन के लिए [मल्टी-टेनेंसी एकीकरण](./multi-tenancy) देखें।

## CRM एकीकरण

नए ग्राहकों के साइन अप करने पर ग्राहक डेटा को अपने CRM से सिंक करें:

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

## विश्लेषिकी एकीकरण

ग्राहक जीवनचक्र में मुख्य व्यावसायिक घटनाओं को ट्रैक करें:

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

## अगले चरण

- [कस्टम गेटवे विकास](./custom-gateway) — अपना भुगतान गेटवे बनाएं
- [वेबहुक संभालना](./webhooks) — कस्टम वेबहुक endpoints बनाएं
- [मल्टी-टेनेंसी एकीकरण](./multi-tenancy) — सार्वभौम किरायेदार जीवनचक्र प्रवाहों के साथ एकीकृत करें
