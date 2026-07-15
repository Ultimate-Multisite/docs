---
title: ਏਕੀਕਰਨ ਗਾਈਡ
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਗਾਈਡ

ਇਹ ਗਾਈਡ Ultimate Multisite ਨਾਲ ਆਮ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਪੈਟਰਨਾਂ ਨੂੰ ਕਵਰ ਕਰਦੀ ਹੈ, ਜਿਸ ਵਿੱਚ ਬਾਹਰੀ ਸੇਵਾਵਾਂ ਨਾਲ ਕਨੈਕਟ ਕਰਨਾ, ਕਸਟਮ ਭੁਗਤਾਨ ਗੇਟਵੇ ਬਣਾਉਣਾ, ਅਤੇ webhooks ਨੂੰ ਸੰਭਾਲਣਾ ਸ਼ਾਮਲ ਹੈ।

ਅਲੱਗ tenant ਇੰਫ੍ਰਾਸਟ੍ਰਕਚਰ ਲਈ, sovereign tenant bootstrap, migration verification, SSO, ਅਤੇ teardown ਮਾਰਗਦਰਸ਼ਨ ਲਈ [Multi-Tenancy ਇੰਟੀਗ੍ਰੇਸ਼ਨ](./multi-tenancy) ਵੇਖੋ।

## CRM ਇੰਟੀਗ੍ਰੇਸ਼ਨ {#crm-integration}

ਨਵੇਂ ਗਾਹਕ ਸਾਈਨ ਅੱਪ ਕਰਨ ਵੇਲੇ ਗਾਹਕ ਡਾਟਾ ਆਪਣੇ CRM ਨਾਲ ਸਿੰਕ ਕਰੋ:

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

## ਵਿਸ਼ਲੇਸ਼ਣ ਇੰਟੀਗ੍ਰੇਸ਼ਨ {#analytics-integration}

ਗਾਹਕ lifecycle ਵਿੱਚ ਮੁੱਖ ਕਾਰੋਬਾਰੀ ਘਟਨਾਵਾਂ ਟਰੈਕ ਕਰੋ:

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

## ਅਗਲੇ ਕਦਮ {#next-steps}

- [ਕਸਟਮ ਗੇਟਵੇ ਵਿਕਾਸ](./custom-gateway) — ਆਪਣਾ ਭੁਗਤਾਨ ਗੇਟਵੇ ਬਣਾਓ
- [Webhook ਹੈਂਡਲਿੰਗ](./webhooks) — ਕਸਟਮ webhook endpoints ਬਣਾਓ
- [Multi-Tenancy ਇੰਟੀਗ੍ਰੇਸ਼ਨ](./multi-tenancy) — sovereign tenant lifecycle flows ਨਾਲ ਇੰਟੀਗ੍ਰੇਟ ਕਰੋ
