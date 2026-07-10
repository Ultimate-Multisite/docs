---
title: Guida all'integrazione
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Guida all'integrazione {#integration-guide}

Questa guida copre i pattern di integrazione comuni con Ultimate Multisite, inclusi il collegamento a servizi esterni, la creazione di gateway di pagamento personalizzati e la gestione dei webhook.

Per un'infrastruttura tenant isolata, consulta [Integrazione Multi-Tenancy](./multi-tenancy) per indicazioni su bootstrap di tenant sovrani, verifica della migrazione, SSO e teardown.

## Integrazione CRM {#crm-integration}

Sincronizza i dati dei clienti con il tuo CRM quando nuovi clienti si registrano:

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

## Integrazione analytics {#analytics-integration}

Traccia gli eventi aziendali chiave lungo il ciclo di vita del cliente:

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

## Passi successivi {#next-steps}

- [Sviluppo di gateway personalizzato](./custom-gateway) — Crea il tuo gateway di pagamento
- [Gestione dei webhook](./webhooks) — Crea endpoint webhook personalizzati
- [Integrazione Multi-Tenancy](./multi-tenancy) — Integra con flussi del ciclo di vita di tenant sovrani
