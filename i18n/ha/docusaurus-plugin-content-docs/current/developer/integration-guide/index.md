---
title: Jagorar Haɗawa
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Jagorar Haɗawa {#integration-guide}

Wannan jagora yana bayyana salon haɗawa na gama-gari da Ultimate Multisite, ciki har da haɗawa da sabis na waje, gina payment gateways na musamman, da sarrafa webhooks.

Don keɓaɓɓen tsarin tenant, duba [Haɗawar Multi-Tenancy](./multi-tenancy) don jagorar sovereign tenant bootstrap, tabbatar da ƙaura, SSO, da teardown.

## Haɗawar CRM {#crm-integration}

Daidaita bayanan abokan ciniki zuwa CRM ɗinka lokacin da sababbin abokan ciniki suka yi rajista:

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

## Haɗawar Nazari {#analytics-integration}

Bibiyi muhimman abubuwan kasuwanci a duk tsawon zagayen rayuwar abokin ciniki:

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

## Matakai na Gaba {#next-steps}

- [Haɓaka Custom Gateway](./custom-gateway) — Gina payment gateway ɗinka
- [Sarrafa Webhook](./webhooks) — Ƙirƙiri webhook endpoints na musamman
- [Haɗawar Multi-Tenancy](./multi-tenancy) — Haɗa da sovereign tenant lifecycle flows
