---
title: Gabay sa Integrasyon
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Gabay sa Integrasyon

Saklaw ng gabay na ito ang karaniwang mga pattern ng integrasyon sa Ultimate Multisite, kabilang ang pagkonekta sa mga panlabas na serbisyo, pagbuo ng mga custom na payment gateway, at paghawak ng mga webhook.

Para sa hiwalay na imprastraktura ng tenant, tingnan ang [Integrasyon ng Multi-Tenancy](./multi-tenancy) para sa gabay sa sovereign tenant bootstrap, pag-verify ng migration, SSO, at teardown.

## Integrasyon ng CRM

I-sync ang datos ng customer sa iyong CRM kapag nag-sign up ang mga bagong customer:

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

## Integrasyon ng Analytics

Subaybayan ang mahahalagang event ng negosyo sa buong customer lifecycle:

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

## Mga Susunod na Hakbang

- [Pag-develop ng Custom Gateway](./custom-gateway) — Buuin ang sarili mong payment gateway
- [Paghawak ng Webhook](./webhooks) — Gumawa ng mga custom na webhook endpoint
- [Integrasyon ng Multi-Tenancy](./multi-tenancy) — Mag-integrate sa sovereign tenant lifecycle flows
