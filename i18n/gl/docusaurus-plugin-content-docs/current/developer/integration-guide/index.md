---
title: Guía de integración
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Guía de integración

Esta guía abrangue patróns habituais de integración con Ultimate Multisite, incluída a conexión con servizos externos, a creación de pasarelas de pagamento personalizadas e a xestión de webhooks.

Para infraestrutura de inquilinos illados, consulta [Integración Multi-Tenancy](./multi-tenancy) para orientación sobre o arranque de inquilinos soberanos, verificación de migración, SSO e desmontaxe.

## Integración con CRM

Sincroniza os datos dos clientes co teu CRM cando se rexistren novos clientes:

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

## Integración con Analytics

Rastrexa eventos empresariais clave ao longo do ciclo de vida do cliente:

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

## Seguintes pasos

- [Desenvolvemento de pasarela personalizada](./custom-gateway) — Crea a túa propia pasarela de pagamento
- [Xestión de webhooks](./webhooks) — Crea endpoints de webhook personalizados
- [Integración Multi-Tenancy](./multi-tenancy) — Integra con fluxos do ciclo de vida de inquilinos soberanos
