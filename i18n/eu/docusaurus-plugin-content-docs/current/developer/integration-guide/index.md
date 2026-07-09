---
title: Integrazio-gida
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrazio-gida

Gida honek Ultimate Multisite-rekin ohiko integrazio-ereduak azaltzen ditu, kanpoko zerbitzuetara konektatzea, ordainketa-pasabide pertsonalizatuak eraikitzea eta webhooks kudeatzea barne.

Maizter-azpiegitura isolaturako, ikusi [Multi-Tenancy integrazioa](./multi-tenancy), maizter subiranoaren hasieratzerako, migrazioaren egiaztapenerako, SSO-rako eta desegiterako jarraibideetarako.

## CRM integrazioa

Sinkronizatu bezeroen datuak zure CRM-rekin bezero berriek izena ematen dutenean:

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

## Analitika-integrazioa

Jarraitu negozio-gertaera nagusiei bezeroaren bizi-ziklo osoan:

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

## Hurrengo urratsak

- [Pasabide pertsonalizatuaren garapena](./custom-gateway) — Eraiki zure ordainketa-pasabide propioa
- [Webhook-en kudeaketa](./webhooks) — Sortu webhook endpoint pertsonalizatuak
- [Multi-Tenancy integrazioa](./multi-tenancy) — Integratu maizter subiranoaren bizi-zikloko fluxuekin
