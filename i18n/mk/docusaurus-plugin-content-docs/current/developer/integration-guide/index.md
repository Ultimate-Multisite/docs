---
title: Водич за интеграција
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Водич за интеграција {#integration-guide}

Овој водич ги опфаќа вообичаените обрасци за интеграција со Ultimate Multisite, вклучувајќи поврзување со надворешни услуги, градење сопствени payment gateways и ракување со webhooks.

За изолирана tenant инфраструктура, видете [Multi-Tenancy интеграција](./multi-tenancy) за sovereign tenant bootstrap, проверка на миграција, SSO и насоки за teardown.

## CRM интеграција {#crm-integration}

Синхронизирајте ги податоците за клиенти со вашиот CRM кога ќе се регистрираат нови клиенти:

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

## Интеграција со аналитика {#analytics-integration}

Следете клучни деловни настани низ животниот циклус на клиентот:

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

## Следни чекори {#next-steps}

- [Развој на сопствен Gateway](./custom-gateway) — Изградете сопствен payment gateway
- [Ракување со Webhook](./webhooks) — Создајте сопствени webhook endpoints
- [Multi-Tenancy интеграција](./multi-tenancy) — Интегрирајте со sovereign tenant lifecycle flows
