---
title: Kalozera wa Kuphatikiza
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Kalozera wa Kuphatikiza {#integration-guide}

Kalozerayu akufotokoza njira zofala zophatikizira ndi Ultimate Multisite, kuphatikizapo kulumikiza ku mautumiki akunja, kupanga ma payment gateway anu, ndi kusamalira ma webhook.

Pa zomangamanga za tenant wodzipatula, onani [Kuphatikiza kwa Multi-Tenancy](./multi-tenancy) kuti mupeze malangizo a sovereign tenant bootstrap, kutsimikizira migration, SSO, ndi teardown.

## Kuphatikiza kwa CRM {#crm-integration}

Gwirizanitsani deta ya makasitomala ku CRM yanu makasitomala atsopano akalembetsa:

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

## Kuphatikiza kwa Analytics {#analytics-integration}

Tsatirani zochitika zazikulu za bizinesi pa moyo wonse wa kasitomala:

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

## Masitepe Otsatira {#next-steps}

- [Kupanga Custom Gateway](./custom-gateway) — Pangani payment gateway yanu
- [Kusamalira ma Webhook](./webhooks) — Pangani ma endpoint a webhook anu
- [Kuphatikiza kwa Multi-Tenancy](./multi-tenancy) — Phatikizani ndi mayendedwe a moyo wa sovereign tenant
