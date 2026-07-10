---
title: Интеграция кулланмасы
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Интеграция кулланмасы {#integration-guide}

Бу кулланма Ultimate Multisite белән киң таралган интеграция үрнәкләрен, шул исәптән тышкы хезмәтләргә тоташуны, махсус түләү gatewayларын төзүне һәм webhookларны эшкәртүне колачлый.

Аерымланган tenant инфраструктурасы өчен, sovereign tenant башлангыч көйләү, миграцияне тикшерү, SSO һәм бетерү буенча күрсәтмәләр өчен [Multi-Tenancy Integration](./multi-tenancy) карагыз.

## CRM интеграциясе {#crm-integration}

Яңа клиентлар теркәлгәндә, клиент мәгълүматларын CRMга синхронлаштырыгыз:

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

## Аналитика интеграциясе {#analytics-integration}

Клиентның яшәү циклы буенча төп бизнес вакыйгаларын күзәтегез:

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

## Киләсе адымнар {#next-steps}

- [Махсус Gateway эшләү](./custom-gateway) — Үзегезнең түләү gatewayгызны төзегез
- [Webhookларны эшкәртү](./webhooks) — Махсус webhook endpointларын булдырыгыз
- [Multi-Tenancy Integration](./multi-tenancy) — Sovereign tenant яшәү циклы агымнары белән интеграцияләгез
