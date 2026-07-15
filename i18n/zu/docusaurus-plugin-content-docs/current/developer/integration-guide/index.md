---
title: Umhlahlandlela Wokuhlanganisa
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Umhlahlandlela Wokuhlanganisa

Lo mhlahlandlela uhlanganisa amaphethini ajwayelekile okuhlanganisa ne-Ultimate Multisite, okuhlanganisa ukuxhuma kumasevisi angaphandle, ukwakha amasango okukhokha angokwezifiso, nokuphatha ama-webhook.

Ngengqalasizinda ye-tenant ehlukanisiwe, bheka [Ukuhlanganiswa kwe-Multi-Tenancy](./multi-tenancy) ukuze uthole isiqondiso se-bootstrap ye-tenant ezimele, ukuqinisekiswa kokuthutha, i-SSO, nokudilizwa.

## Ukuhlanganiswa kwe-CRM {#crm-integration}

Vumelanisa idatha yekhasimende ku-CRM yakho lapho amakhasimende amasha ebhalisa:

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

## Ukuhlanganiswa kwe-Analytics {#analytics-integration}

Landela imicimbi ebalulekile yebhizinisi kuwo wonke umjikelezo wempilo yekhasimende:

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

## Izinyathelo Ezilandelayo {#next-steps}

- [Ukuthuthukiswa kwe-Gateway Yangokwezifiso](./custom-gateway) — Yakha i-gateway yakho yokukhokha
- [Ukuphathwa kwama-Webhook](./webhooks) — Dala ama-endpoint e-webhook angokwezifiso
- [Ukuhlanganiswa kwe-Multi-Tenancy](./multi-tenancy) — Hlanganisa nokugeleza komjikelezo wempilo ye-tenant ezimele
