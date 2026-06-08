---
title: ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਗਾਈਡ
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਗਾਈਡ

ਇਹ ਗਾਈਡ Ultimate Multisite ਨਾਲ ਆਮ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਪੈਟਰਨ ਬਾਰੇ ਦੱਸਦੀ ਹੈ। ਇਸ ਵਿੱਚ ਬਾਹਰੀ ਸਰਵਿਸ ਨਾਲ ਕਨੈਕਟ ਕਰਨਾ, ਕਸਟਮ ਪੇਮੈਂਟ ਗੇਟਵੇ ਬਣਾਉਣਾ, ਅਤੇ ਵੇਬਹੂਕਸ ਨੂੰ ਹੈਂਡਲ ਕਰਨਾ ਸ਼ਾਮਲ ਹੈ।

## CRM ਇੰਟੀਗ੍ਰੇਸ਼ਨ

ਜਦੋਂ ਕੋਈ ਨਵਾਂ ਗਾਹਕ ਸਾਈਨ ਅਪ ਕਰਦਾ ਹੈ, ਤਾਂ ਉਸਦਾ ਡਾਟਾ ਤੁਹਾਡੇ CRM ਨਾਲ ਸਿੰਕ (sync) ਕਰਨਾ:

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

## ਐਨਾਲਿਟਿਕਸ ਇੰਟੀਗ੍ਰੇਸ਼ਨ

ਗਾਹਕ ਦੇ ਪੂਰੇ ਜੀਵਨ ਚੱਕਰ (customer lifecycle) ਵਿੱਚ ਮੁੱਖ ਕਾਰੋਬਾਰੀ ਘਟਨਾਵਾਂ (events) ਨੂੰ ਟ੍ਰੈਕ ਕਰਨਾ:

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

## ਅਗਲੇ ਕਦਮ (Next Steps)

- [Custom Gateway Development](./custom-gateway) — ਆਪਣਾ ਪੇਮੈਂਟ ਗੇਟਵੇ ਬਣਾਓ
- [Webhook Handling](./webhooks) — ਕਸਟਮ ਵੇਬਹੂਕ ਐਂਡਪੁਆਇੰਟ ਬਣਾਓ
