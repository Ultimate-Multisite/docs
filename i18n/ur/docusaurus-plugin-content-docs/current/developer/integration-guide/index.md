---
title: انضمام کی رہنمائی
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# انضمام گائیڈ {#integration-guide}

یہ گائیڈ Ultimate Multisite کے ساتھ عام انضمام کے نمونوں کا احاطہ کرتی ہے، بشمول بیرونی سروسز سے منسلک ہونا، حسبِ ضرورت ادائیگی گیٹ ویز بنانا، اور webhooks کو سنبھالنا۔

الگ تھلگ tenant انفراسٹرکچر کے لیے، sovereign tenant bootstrap، migration verification، SSO، اور teardown رہنمائی کے لیے [Multi-Tenancy انضمام](./multi-tenancy) دیکھیں۔

## CRM انضمام {#crm-integration}

جب نئے customers سائن اپ کریں تو customer ڈیٹا اپنے CRM سے ہم آہنگ کریں:

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

## Analytics انضمام {#analytics-integration}

customer lifecycle میں اہم کاروباری واقعات کو track کریں:

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

## اگلے اقدامات {#next-steps}

- [حسبِ ضرورت Gateway ڈیولپمنٹ](./custom-gateway) — اپنا payment gateway بنائیں
- [Webhook سنبھالنا](./webhooks) — حسبِ ضرورت webhook endpoints بنائیں
- [Multi-Tenancy انضمام](./multi-tenancy) — sovereign tenant lifecycle flows کے ساتھ انضمام کریں
