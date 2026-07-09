---
title: Ръководство за интеграция
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Ръководство за интеграция {#integration-guide}

Това ръководство обхваща често срещани модели за интеграция с Ultimate Multisite, включително свързване с външни услуги, изграждане на персонализирани платежни gateways и обработка на webhooks.

За изолирана инфраструктура за tenant-и вижте [Интеграция за Multi-Tenancy](./multi-tenancy) за насоки относно суверенно начално настройване на tenant, проверка на миграцията, SSO и премахване.

## Интеграция с CRM {#crm-integration}

Синхронизирайте клиентски данни с вашия CRM, когато се регистрират нови клиенти:

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

## Интеграция с аналитики {#analytics-integration}

Проследявайте ключови бизнес събития през целия жизнен цикъл на клиента:

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

## Следващи стъпки {#next-steps}

- [Разработка на персонализиран gateway](./custom-gateway) — Изградете собствен платежен gateway
- [Обработка на webhooks](./webhooks) — Създайте персонализирани endpoint-и за webhooks
- [Интеграция за Multi-Tenancy](./multi-tenancy) — Интегрирайте със суверенни потоци на жизнения цикъл на tenant-и
