---
title: Vodič za integraciju
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Vodič za integraciju

Ovaj vodič pokriva uobičajene obrasce integracije s Ultimate Multisite, uključujući povezivanje s vanjskim uslugama, izradu prilagođenih platnih pristupnika i obradu webhookova.

Za izoliranu infrastrukturu stanara pogledajte [Integracija za više stanara](./multi-tenancy) za smjernice o pokretanju suverenog stanara, provjeri migracije, SSO-u i uklanjanju.

## CRM integracija {#crm-integration}

Sinkronizirajte podatke o klijentima sa svojim CRM-om kada se novi klijenti prijave:

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

## Analitička integracija {#analytics-integration}

Pratite ključne poslovne događaje kroz životni ciklus klijenta:

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

## Sljedeći koraci {#next-steps}

- [Razvoj prilagođenog pristupnika](./custom-gateway) — Izradite vlastiti platni pristupnik
- [Obrada webhookova](./webhooks) — Izradite prilagođene webhook endpointove
- [Integracija za više stanara](./multi-tenancy) — Integrirajte se s tijekovima životnog ciklusa suverenog stanara
