---
title: Интеграция нұсқаулығы
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Интеграция нұсқаулығы {#integration-guide}

Бұл нұсқаулық Ultimate Multisite-пен жиі қолданылатын интеграция үлгілерін, соның ішінде сыртқы қызметтерге қосылуды, жеке төлем шлюздерін жасауды және webhooks өңдеуді қамтиды.

Оқшауланған tenant инфрақұрылымы үшін sovereign tenant bootstrap, көшіруді тексеру, SSO және teardown бойынша нұсқаулықты [Multi-Tenancy Integration](./multi-tenancy) бөлімінен қараңыз.

## CRM интеграциясы {#crm-integration}

Жаңа клиенттер тіркелген кезде клиент деректерін CRM-ге синхрондаңыз:

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

## Analytics интеграциясы {#analytics-integration}

Клиенттің өмірлік циклі бойынша негізгі бизнес оқиғаларын қадағалаңыз:

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

## Келесі қадамдар {#next-steps}

- [Жеке Gateway әзірлеу](./custom-gateway) — Өз төлем шлюзіңізді жасаңыз
- [Webhook өңдеу](./webhooks) — Жеке webhook endpoint-терін жасаңыз
- [Multi-Tenancy Integration](./multi-tenancy) — Sovereign tenant өмірлік циклі ағындарымен интеграциялаңыз
