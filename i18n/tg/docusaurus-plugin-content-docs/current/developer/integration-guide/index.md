---
title: Дастури ҳамгироӣ
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Роҳнамои ҳамгироӣ

Ин роҳнамо намунаҳои маъмули ҳамгироӣ бо Ultimate Multisite-ро дар бар мегирад, аз ҷумла пайвастшавӣ ба хизматрасониҳои беруна, сохтани дарвозаҳои пардохти фармоишӣ ва коркарди webhooks.

Барои инфрасохтори tenant ҷудогона, барои роҳнамоӣ оид ба оғози tenant мустақил, санҷиши муҳоҷират, SSO ва teardown ба [Ҳамгироии Multi-Tenancy](./multi-tenancy) нигаред.

## Ҳамгироии CRM

Маълумоти муштариро ҳангоми сабтиноми муштариёни нав ба CRM-и худ ҳамоҳанг созед:

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

## Ҳамгироии таҳлил

Рӯйдодҳои асосии тиҷоратиро дар тамоми давраи ҳаёти муштарӣ пайгирӣ кунед:

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

## Қадамҳои баъдӣ

- [Таҳияи Custom Gateway](./custom-gateway) — Дарвозаи пардохти худро созед
- [Коркарди Webhook](./webhooks) — Endpoint-ҳои webhook-и фармоишӣ эҷод кунед
- [Ҳамгироии Multi-Tenancy](./multi-tenancy) — Бо ҷараёнҳои давраи ҳаёти tenant мустақил ҳамгиро кунед
