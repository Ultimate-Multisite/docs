---
title: Integracijos vadovas
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integravimo vadovas

Šiame vadove aptariami įprasti integravimo su Ultimate Multisite modeliai, įskaitant prisijungimą prie išorinių paslaugų, pasirinktinių mokėjimo šliuzų kūrimą ir webhookų apdorojimą.

Apie izoliuotą tenant infrastruktūrą žr. [Multi-Tenancy integravimą](./multi-tenancy), kuriame pateikiamos sovereign tenant pradinio parengimo, migracijos patikros, SSO ir pašalinimo gairės.

## CRM integravimas

Sinchronizuokite klientų duomenis su savo CRM, kai užsiregistruoja nauji klientai:

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

## Analitikos integravimas

Sekite pagrindinius verslo įvykius per visą kliento gyvavimo ciklą:

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

## Kiti žingsniai

- [Pasirinktinio Gateway kūrimas](./custom-gateway) — Sukurkite savo mokėjimo šliuzą
- [Webhookų apdorojimas](./webhooks) — Kurkite pasirinktinius webhook endpointus
- [Multi-Tenancy integravimas](./multi-tenancy) — Integruokite su sovereign tenant gyvavimo ciklo srautais
