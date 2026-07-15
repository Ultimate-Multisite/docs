---
title: Mwongozo wa Ujumuishaji
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Mwongozo wa Uunganishaji

Mwongozo huu unashughulikia mifumo ya kawaida ya uunganishaji na Ultimate Multisite, ikijumuisha kuunganisha na huduma za nje, kujenga payment gateways maalum, na kushughulikia webhooks.

Kwa miundombinu ya tenant iliyotengwa, tazama [Uunganishaji wa Multi-Tenancy](./multi-tenancy) kwa mwongozo wa sovereign tenant bootstrap, uthibitishaji wa uhamishaji, SSO, na teardown.

## Uunganishaji wa CRM {#crm-integration}

Sawazisha data ya wateja kwenye CRM yako wateja wapya wanapojisajili:

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

## Uunganishaji wa Analytics {#analytics-integration}

Fuatilia matukio muhimu ya biashara katika mzunguko mzima wa maisha ya mteja:

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

## Hatua Zinazofuata {#next-steps}

- [Uundaji wa Gateway Maalum](./custom-gateway) — Jenga payment gateway yako mwenyewe
- [Ushughulikiaji wa Webhook](./webhooks) — Unda endpoints maalum za webhook
- [Uunganishaji wa Multi-Tenancy](./multi-tenancy) — Unganisha na sovereign tenant lifecycle flows
