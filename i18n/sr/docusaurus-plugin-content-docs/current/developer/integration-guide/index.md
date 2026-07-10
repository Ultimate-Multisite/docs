---
title: Водич за интеграцију
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Водич за интеграцију {#integration-guide}

Овај водич покрива уобичајене обрасце интеграције са Ultimate Multisite, укључујући повезивање са спољним услугама, изградњу прилагођених гејтвеја за плаћање и обраду webhook-ова.

За изоловану инфраструктуру закупаца, погледајте [Интеграција вишезакупништва](./multi-tenancy) за смернице о покретању сувереног закупца, провери миграције, SSO-у и уклањању.

## CRM интеграција {#crm-integration}

Синхронизујте податке о клијентима са својим CRM-ом када се нови клијенти региструју:

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

## Интеграција аналитике {#analytics-integration}

Пратите кључне пословне догађаје током животног циклуса клијента:

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

## Следећи кораци {#next-steps}

- [Развој прилагођеног гејтвеја](./custom-gateway) — Направите сопствени гејтвеј за плаћање
- [Обрада webhook-ова](./webhooks) — Направите прилагођене webhook крајње тачке
- [Интеграција вишезакупништва](./multi-tenancy) — Интегришите се са токовима животног циклуса сувереног закупца
