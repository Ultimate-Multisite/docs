---
title: Guia de Integração
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# Guia de Integração

Este guia cobre padrões comuns de integração com Ultimate Multisite, incluindo conexão com serviços externos, criação de gateways de pagamento personalizados e tratamento de webhooks.

## Integração com CRM

Sincronize os dados do cliente com seu CRM quando novos clientes se cadastrarem:

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

## Integração com Analytics

Acompanhe eventos-chave de negócios ao longo do ciclo de vida do cliente:

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

## Próximos Passos

- [Desenvolvimento de Gateway Personalizado](./custom-gateway) — Crie seu próprio gateway de pagamento
- [Manipulação de Webhooks](./webhooks) — Crie endpoints de webhook personalizados
