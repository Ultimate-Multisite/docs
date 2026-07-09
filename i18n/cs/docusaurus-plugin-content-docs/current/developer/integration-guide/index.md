---
title: Průvodce integrací
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Průvodce integrací

Tento průvodce pokrývá běžné vzory integrace s Ultimate Multisite, včetně připojení k externím službám, vytváření vlastních platebních bran a zpracování webhooků.

Pro izolovanou infrastrukturu tenantů viz [Integrace multi-tenancy](./multi-tenancy) pro pokyny k bootstrapu suverénních tenantů, ověření migrace, SSO a teardownu.

## Integrace CRM

Synchronizujte zákaznická data do svého CRM, když se zaregistrují noví zákazníci:

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

## Integrace analytiky

Sledujte klíčové obchodní události napříč životním cyklem zákazníka:

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

## Další kroky

- [Vývoj vlastní brány](./custom-gateway) — Vytvořte si vlastní platební bránu
- [Zpracování webhooků](./webhooks) — Vytvořte vlastní endpointy webhooků
- [Integrace multi-tenancy](./multi-tenancy) — Integrujte se s toky životního cyklu suverénních tenantů
