---
title: Integreerimisjuhend
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integratsiooni juhend {#integration-guide}

See juhend käsitleb levinud integratsioonimustreid Ultimate Multisite’iga, sealhulgas ühendamist väliste teenustega, kohandatud makselüüside loomist ja webhookide käsitlemist.

Isoleeritud rentniku taristu jaoks vaata [Multi-Tenancy integratsiooni](./multi-tenancy), et saada juhiseid suveräänse rentniku algkäivituse, migratsiooni verifitseerimise, SSO ja eemaldamise kohta.

## CRM-i integratsioon {#crm-integration}

Sünkrooni kliendiandmed oma CRM-iga, kui uued kliendid registreeruvad:

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

## Analüütika integratsioon {#analytics-integration}

Jälgi peamisi ärisündmusi kogu kliendi elutsükli jooksul:

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

## Järgmised sammud {#next-steps}

- [Kohandatud Gateway arendus](./custom-gateway) — Loo oma makselüüs
- [Webhookide käsitlemine](./webhooks) — Loo kohandatud webhooki endpointid
- [Multi-Tenancy integratsioon](./multi-tenancy) — Integreeri suveräänse rentniku elutsükli voogudega
