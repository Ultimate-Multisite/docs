---
title: Treoir Chomhtháthaithe
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Treoir Comhtháthaithe {#integration-guide}

Clúdaíonn an treoir seo patrúin choitianta comhtháthaithe le Ultimate Multisite, lena n-áirítear nascadh le seirbhísí seachtracha, geataí íocaíochta saincheaptha a thógáil, agus webhooks a láimhseáil.

Maidir le bonneagar tionónta aonraithe, féach [Comhtháthú Iltionóntachta](./multi-tenancy) le haghaidh bootstrap tionónta ceannasaigh, fíorú imirce, SSO, agus treoir maidir le díchóimeáil.

## Comhtháthú CRM {#crm-integration}

Sioncrónaigh sonraí custaiméirí le do CRM nuair a chláraíonn custaiméirí nua:

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

## Comhtháthú Anailísíochta {#analytics-integration}

Rianaigh príomhimeachtaí gnó ar fud shaolré an chustaiméara:

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

## Na Chéad Chéimeanna Eile {#next-steps}

- [Forbairt Geata Saincheaptha](./custom-gateway) — Tóg do gheata íocaíochta féin
- [Láimhseáil Webhook](./webhooks) — Cruthaigh endpoints webhook saincheaptha
- [Comhtháthú Iltionóntachta](./multi-tenancy) — Comhtháthaigh le sreabha shaolré tionónta ceannasaigh
