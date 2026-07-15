---
title: Руководство по интеграции
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Руководство по интеграции

Это руководство описывает распространённые сценарии интеграции с Ultimate Multisite, включая подключение к внешним сервисам, создание пользовательских платёжных шлюзов и обработку webhooks.

Для изолированной инфраструктуры арендаторов см. [интеграцию Multi-Tenancy](./multi-tenancy) для рекомендаций по начальной настройке суверенного арендатора, проверке миграции, SSO и удалению.

## Интеграция CRM {#crm-integration}

Синхронизируйте данные клиентов с вашим CRM, когда регистрируются новые клиенты:

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

## Интеграция аналитики {#analytics-integration}

Отслеживайте ключевые бизнес-события на протяжении жизненного цикла клиента:

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

## Следующие шаги {#next-steps}

- [Разработка пользовательского Gateway](./custom-gateway) — Создайте собственный платёжный шлюз
- [Обработка webhooks](./webhooks) — Создайте пользовательские endpoints для webhooks
- [Интеграция Multi-Tenancy](./multi-tenancy) — Интегрируйте с потоками жизненного цикла суверенного арендатора
