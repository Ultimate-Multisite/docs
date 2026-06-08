---
title: Ръководство за интеграция
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# Ръководство за интеграции

Това ръководство обхваща често срещаните модели за интеграция с Ultimate Multisite, включително свързване с външни услуги, изграждане на персонализирани платежни системи и обработка на webhooks.

## Интеграция с CRM

Синхронизирайте данните на клиентите към вашия CRM, когато нови клиенти се регистрират:

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

## Интеграция с анализи

Проследявайте ключови бизнес събития през жизнения цикъл на клиента:

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

## Следващи стъпки

- [Custom Gateway Development](./custom-gateway) — Изградете собствена платежна система
- [Webhook Handling](./webhooks) — Създайте персонализирани webhook endpoints
