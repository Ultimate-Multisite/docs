---
title: Ìtọ́nisọ́nà Ìṣepọ̀
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Itọsọna Integration

Itọsọna yii bo awọn ilana integration wọpọ pẹlu Ultimate Multisite, pẹlu sisopọ mọ awọn iṣẹ ita, kikọ awọn payment gateways adani, ati mimu awọn webhooks ṣiṣẹ.

Fun amayederun tenant ti a ya sọtọ, wo [Integration Multi-Tenancy](./multi-tenancy) fun bootstrap tenant aláṣẹ, ìmúdájú migration, SSO, ati itọsọna teardown.

## Integration CRM

Ṣe sync data alabara si CRM rẹ nigba ti awọn alabara tuntun ba forúkọsílẹ̀:

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

## Integration Analytics

Tọpa awọn iṣẹlẹ iṣowo pataki kọja customer lifecycle:

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

## Awọn Igbesẹ Tó Kàn

- [Ìdàgbàsókè Gateway Adani](./custom-gateway) — Kọ payment gateway tirẹ
- [Mimu Webhook Ṣiṣẹ](./webhooks) — Ṣẹda awọn endpoint webhook adani
- [Integration Multi-Tenancy](./multi-tenancy) — Ṣe integrate pẹlu awọn ṣiṣan lifecycle tenant aláṣẹ
