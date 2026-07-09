---
title: Samþættingarleiðbeiningar
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Samþættingarleiðbeiningar {#integration-guide}

Þessar leiðbeiningar fjalla um algeng samþættingarmynstur með Ultimate Multisite, þar á meðal tengingu við ytri þjónustur, smíði sérsniðinna greiðslugátta og meðhöndlun vefkróka.

Fyrir einangraða innviði leigjenda, sjá [Samþætting fjölleigjendakerfa](./multi-tenancy) fyrir leiðbeiningar um ræsingu sjálfstæðra leigjenda, staðfestingu flutnings, SSO og niðurrif.

## CRM-samþætting {#crm-integration}

Samstilltu gögn viðskiptavina við CRM-kerfið þitt þegar nýir viðskiptavinir skrá sig:

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

## Greiningarsamþætting {#analytics-integration}

Fylgstu með lykilviðburðum í rekstri yfir allan líftíma viðskiptavinarins:

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

## Næstu skref {#next-steps}

- [Þróun sérsniðinnar greiðslugáttar](./custom-gateway) — Smíðaðu þína eigin greiðslugátt
- [Meðhöndlun vefkróka](./webhooks) — Búðu til sérsniðna endapunkta fyrir vefkróka
- [Samþætting fjölleigjendakerfa](./multi-tenancy) — Samþættu við ferla fyrir líftíma sjálfstæðra leigjenda
