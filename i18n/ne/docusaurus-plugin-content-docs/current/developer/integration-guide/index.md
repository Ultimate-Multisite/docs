---
title: एकीकरण मार्गदर्शिका
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# एकीकरण मार्गदर्शिका

यो मार्गदर्शिकाले Ultimate Multisite सँगका सामान्य एकीकरण ढाँचाहरू समेट्छ, जसमा बाह्य सेवाहरूसँग जडान गर्ने, कस्टम भुक्तानी gateway बनाउने, र webhooks ह्यान्डल गर्ने कुरा समावेश छन्।

अलग tenant पूर्वाधारका लागि, sovereign tenant bootstrap, migration verification, SSO, र teardown मार्गदर्शनका लागि [Multi-Tenancy एकीकरण](./multi-tenancy) हेर्नुहोस्।

## CRM एकीकरण

नयाँ ग्राहकहरूले साइन अप गर्दा ग्राहक डेटा आफ्नो CRM मा sync गर्नुहोस्:

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

## Analytics एकीकरण

ग्राहक जीवनचक्रभरिका प्रमुख व्यवसायिक घटनाहरू track गर्नुहोस्:

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

## अर्को चरणहरू

- [कस्टम Gateway विकास](./custom-gateway) — आफ्नो भुक्तानी gateway बनाउनुहोस्
- [Webhook ह्यान्डलिङ](./webhooks) — कस्टम webhook endpoints सिर्जना गर्नुहोस्
- [Multi-Tenancy एकीकरण](./multi-tenancy) — sovereign tenant lifecycle flows सँग एकीकृत गर्नुहोस्
