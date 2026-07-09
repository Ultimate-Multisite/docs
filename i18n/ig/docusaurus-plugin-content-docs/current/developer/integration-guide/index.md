---
title: Ntuziaka Njikọ
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Nduzi Njikọ

Nduzi a na-ekpuchi usoro njikọ a na-ahụkarị na Ultimate Multisite, gụnyere ijikọ na ọrụ mpụga, iwu gateways ịkwụ ụgwọ ahaziri iche, na ijikwa webhooks.

Maka akụrụngwa tenant dịpụrụ adịpụ, lee [Njikọ Multi-Tenancy](./multi-tenancy) maka nduzi bootstrap tenant nwere ọchịchị onwe ya, nkwenye migration, SSO, na teardown.

## Njikọ CRM

Mekọrịta data ndị ahịa na CRM gị mgbe ndị ahịa ọhụrụ debanyere aha:

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

## Njikọ Analytics

Soro ihe omume azụmahịa ndị bụ isi n'ofe ndụ onye ahịa:

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

## Nzọụkwụ Ndị Ọzọ

- [Mmepe Gateway Ahaziri Iche](./custom-gateway) — Wuo gateway ịkwụ ụgwọ nke gị
- [Ijikwa Webhook](./webhooks) — Mepụta endpoints webhook ahaziri iche
- [Njikọ Multi-Tenancy](./multi-tenancy) — Jikọọ na usoro ndụ tenant nwere ọchịchị onwe ya
