---
title: Imfashanyigisho yo Guhuza
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Amabwiriza yo Guhuza

Aya mabwiriza asobanura uburyo busanzwe bwo guhuza na Ultimate Multisite, harimo kwihuza na serivisi zo hanze, kubaka payment gateways zihariye, no gucunga webhooks.

Ku bikorwaremezo by’umukodesha wihariye, reba [Guhuza Multi-Tenancy](./multi-tenancy) ku mabwiriza yo gutangiza umukodesha wigenga, kugenzura kwimura, SSO, no gusiba.

## Guhuza CRM

Huza amakuru y’abakiriya na CRM yawe igihe abakiriya bashya biyandikishije:

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

## Guhuza Analytics

Kurikirana ibikorwa by’ingenzi by’ubucuruzi mu rugendo rwose rw’umukiriya:

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

## Intambwe Zikurikira

- [Guteza Imbere Gateway Yihariye](./custom-gateway) — Iyubakire payment gateway yawe
- [Gucunga Webhook](./webhooks) — Hanga endpoints za webhook zihariye
- [Guhuza Multi-Tenancy](./multi-tenancy) — Huza n’imigendekere y’ubuzima bw’umukodesha wigenga
