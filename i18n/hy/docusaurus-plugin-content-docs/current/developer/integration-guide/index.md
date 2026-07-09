---
title: Ինտեգրման ուղեցույց
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Ինտեգրման ուղեցույց

Այս ուղեցույցը ներկայացնում է Ultimate Multisite-ի հետ ինտեգրման տարածված ձևաչափերը՝ ներառյալ արտաքին ծառայություններին միանալը, անհատական վճարային gateway-ներ կառուցելը և webhook-ների մշակումը։

Մեկուսացված tenant ենթակառուցվածքի համար տեսեք [Multi-Tenancy ինտեգրում](./multi-tenancy)՝ ինքնիշխան tenant-ի սկզբնագործման, migration-ի ստուգման, SSO-ի և հեռացման ուղեցույցի համար։

## CRM ինտեգրում

Համաժամացրեք հաճախորդների տվյալները ձեր CRM-ի հետ, երբ նոր հաճախորդներ են գրանցվում՝

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

## Վերլուծության ինտեգրում

Հետևեք հիմնական բիզնես իրադարձություններին հաճախորդի կյանքի ցիկլի ընթացքում՝

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

## Հաջորդ քայլեր

- [Custom Gateway-ի մշակում](./custom-gateway) — Կառուցեք ձեր սեփական վճարային gateway-ը
- [Webhook-ների մշակում](./webhooks) — Ստեղծեք անհատական webhook endpoint-ներ
- [Multi-Tenancy ինտեգրում](./multi-tenancy) — Ինտեգրվեք ինքնիշխան tenant-ի կյանքի ցիկլի հոսքերի հետ
