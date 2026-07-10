---
title: Vodnik za integracijo
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Vodnik za integracijo {#integration-guide}

Ta vodnik obravnava pogoste vzorce integracije z Ultimate Multisite, vključno s povezovanjem z zunanjimi storitvami, izdelavo prilagojenih plačilnih prehodov in obravnavo webhookov.

Za izolirano infrastrukturo najemnikov si oglejte [Integracija Multi-Tenancy](./multi-tenancy) za smernice o zagonu suverenega najemnika, preverjanju migracije, SSO in odstranitvi.

## Integracija CRM {#crm-integration}

Sinhronizirajte podatke strank s svojim CRM, ko se prijavijo nove stranke:

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

## Integracija analitike {#analytics-integration}

Spremljajte ključne poslovne dogodke skozi življenjski cikel stranke:

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

## Naslednji koraki {#next-steps}

- [Razvoj prilagojenega prehoda](./custom-gateway) — Izdelajte svoj plačilni prehod
- [Obravnava webhookov](./webhooks) — Ustvarite prilagojene končne točke webhookov
- [Integracija Multi-Tenancy](./multi-tenancy) — Integrirajte s tokovi življenjskega cikla suverenega najemnika
