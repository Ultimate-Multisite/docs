---
title: Isikhokelo soDibaniso
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Isikhokelo soDibaniso

Esi sikhokelo sigubungela iipateni eziqhelekileyo zodibaniso ne-Ultimate Multisite, kuquka ukudibanisa neenkonzo zangaphandle, ukwakha amasango entlawulo alungiselelweyo, nokuphatha ii-webhook.

Kwisiseko esizimeleyo se-tenant, bona [Umdibaniso we-Multi-Tenancy](./multi-tenancy) ukuze ufumane isikhokelo se-bootstrap ye-tenant ezimeleyo, uqinisekiso lokufuduka, SSO, kunye nokuchithwa.

## Umdibaniso we-CRM {#crm-integration}

Vumelanisa idatha yabathengi kwi-CRM yakho xa abathengi abatsha bebhalisa:

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

## Umdibaniso we-Analytics {#analytics-integration}

Landela iziganeko eziphambili zeshishini kuwo wonke umjikelo wobomi bomthengi:

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

## Amanyathelo Alandelayo {#next-steps}

- [Uphuhliso lweSango Elilungiselelweyo](./custom-gateway) — Yakha isango lakho lentlawulo
- [Ukuphathwa kwe-Webhook](./webhooks) — Yenza ii-endpoint ze-webhook ezilungiselelweyo
- [Umdibaniso we-Multi-Tenancy](./multi-tenancy) — Dibanisa nemijelo yomjikelo wobomi we-tenant ezimeleyo
