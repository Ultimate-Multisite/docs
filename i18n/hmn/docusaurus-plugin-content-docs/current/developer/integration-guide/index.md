---
title: Phau Ntawv Qhia Kev Sib Txuas
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Phau Ntawv Qhia Kev Sib Txuas {#integration-guide}

Phau ntawv qhia no piav txog cov qauv kev sib txuas uas nquag siv nrog Ultimate Multisite, suav nrog kev txuas mus rau cov kev pabcuam sab nraud, tsim cov payment gateways kho raws xav tau, thiab tswj webhooks.

Rau tenant infrastructure uas cais nyob ib leeg, saib [Multi-Tenancy Integration](./multi-tenancy) rau sovereign tenant bootstrap, kev txheeb xyuas migration, SSO, thiab kev qhia teardown.

## Kev Sib Txuas CRM {#crm-integration}

Sync cov ntaub ntawv customer mus rau koj CRM thaum muaj customers tshiab sau npe:

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

## Kev Sib Txuas Analytics {#analytics-integration}

Taug qab cov business events tseem ceeb thoob plaws customer lifecycle:

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

## Kauj Ruam Tom Ntej {#next-steps}

- [Kev Tsim Custom Gateway](./custom-gateway) — Tsim koj tus kheej payment gateway
- [Kev Tswj Webhook](./webhooks) — Tsim custom webhook endpoints
- [Multi-Tenancy Integration](./multi-tenancy) — Sib txuas nrog sovereign tenant lifecycle flows
