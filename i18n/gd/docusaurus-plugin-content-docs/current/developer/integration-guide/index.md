---
title: Stiùireadh Amalachaidh
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Stiùireadh Amalachaidh

Tha an stiùireadh seo a’ còmhdach phàtranan amalachaidh cumanta le Ultimate Multisite, a’ gabhail a-steach ceangal ri seirbheisean taobh a-muigh, togail gheataichean pàighidh gnàthaichte, agus làimhseachadh webhooks.

Airson bun-structar màladair iomallaichte, faic [Amalachadh Ioma-mhàladaireachd](./multi-tenancy) airson stiùireadh air bootstrap màladair uachdaranach, dearbhadh imrich, SSO, agus toirt air falbh.

## Amalachadh CRM

Sioncronaich dàta luchd-ceannach ris an CRM agad nuair a chlàraicheas luchd-ceannach ùra:

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

## Amalachadh Anailitigs

Cum sùil air prìomh thachartasan gnìomhachais thar cuairt-beatha an neach-ceannach:

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

## Na h-Ath Cheumannan

- [Leasachadh Geata Gnàthaichte](./custom-gateway) — Tog an geata pàighidh agad fhèin
- [Làimhseachadh Webhooks](./webhooks) — Cruthaich endpoints webhook gnàthaichte
- [Amalachadh Ioma-mhàladaireachd](./multi-tenancy) — Amalachadh le sruthan cuairt-beatha màladair uachdaranaich
