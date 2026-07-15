---
title: Integrasiýa gollanmasy
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Integrasiýa gollanmasy

Bu gollanma Ultimate Multisite bilen umumy integrasiýa nusgalaryny öz içine alýar, şol sanda daşarky hyzmatlara birikmek, ýörite töleg gateway-lerini gurmak we webhook-lary dolandyrmak.

Izolirlenen tenant infrastrukturasy üçin, suweren tenant başlangyjy, migrasiýa barlagy, SSO we aýyrmak boýunça görkezmeler üçin [Multi-Tenancy integrasiýasy](./multi-tenancy) serediň.

## CRM integrasiýasy {#crm-integration}

Täze müşderiler hasaba alnanda müşderi maglumatlaryny CRM-iňize sinhronlaň:

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

## Analytics integrasiýasy {#analytics-integration}

Müşderi ýaşaýyş döwri boýunça esasy biznes wakalaryny yzarlaň:

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

## Indiki ädimler {#next-steps}

- [Ýörite Gateway işläp düzmek](./custom-gateway) — Öz töleg gateway-iňizi guruň
- [Webhook dolandyrmak](./webhooks) — Ýörite webhook endpoint-lerini dörediň
- [Multi-Tenancy integrasiýasy](./multi-tenancy) — Suweren tenant ýaşaýyş döwri akymlary bilen integrasiýa ediň
