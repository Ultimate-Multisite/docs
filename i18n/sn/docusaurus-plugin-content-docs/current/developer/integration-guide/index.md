---
title: Nhungamiro yekubatanidza
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Gwaro Rekubatanidza {#integration-guide}

Gwaro iri rinofukidza maitiro akajairika ekubatanidza neUltimate Multisite, kusanganisira kubatanidza kumasevhisi ekunze, kuvaka payment gateways dzakagadziridzwa, uye kubata webhooks.

Kune zvivakwa zve tenant zvakaparadzaniswa, ona [Kubatanidza Multi-Tenancy](./multi-tenancy) kuti uwane nhungamiro ye sovereign tenant bootstrap, kuongorora migration, SSO, uye teardown.

## Kubatanidza CRM {#crm-integration}

Sync data revatengi kuCRM yako kana vatengi vatsva vanyoresa:

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

## Kubatanidza Analytics {#analytics-integration}

Tevedzera zviitiko zvakakosha zvebhizinesi mukati me customer lifecycle:

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

## Matanho Anotevera {#next-steps}

- [Kuvandudza Custom Gateway](./custom-gateway) — Vaka payment gateway yako
- [Kubata Webhook](./webhooks) — Gadzira webhook endpoints dzakagadziridzwa
- [Kubatanidza Multi-Tenancy](./multi-tenancy) — Batanidza ne sovereign tenant lifecycle flows
