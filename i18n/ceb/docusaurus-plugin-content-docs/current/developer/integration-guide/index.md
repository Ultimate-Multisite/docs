---
title: Giya sa Integrasyon
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Giya sa Integration

Kini nga giya naglangkob sa kasagarang mga pattern sa integration uban sa Ultimate Multisite, lakip ang pagkonektar sa gawas nga mga serbisyo, paghimo og custom nga mga payment gateway, ug pagdumala sa mga webhook.

Para sa gilain nga imprastraktura sa tenant, tan-awa ang [Multi-Tenancy Integration](./multi-tenancy) para sa sovereign tenant bootstrap, beripikasyon sa migration, SSO, ug giya sa teardown.

## CRM Integration

I-sync ang datos sa customer ngadto sa imong CRM kon mag-sign up ang bag-ong mga customer:

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

## Analytics Integration

I-track ang importanteng mga panghitabo sa negosyo sa tibuok lifecycle sa customer:

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

## Sunod nga mga Lakang

- [Pagpalambo sa Custom Gateway](./custom-gateway) — Paghimo og imong kaugalingong payment gateway
- [Pagdumala sa Webhook](./webhooks) — Paghimo og custom nga mga webhook endpoint
- [Multi-Tenancy Integration](./multi-tenancy) — I-integrate uban sa sovereign tenant lifecycle flows
