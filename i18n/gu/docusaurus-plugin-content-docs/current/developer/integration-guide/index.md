---
title: એકીકરણ માર્ગદર્શિકા
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# એકીકરણ માર્ગદર્શિકા

આ માર્ગદર્શિકા Ultimate Multisite સાથેના સામાન્ય એકીકરણ પેટર્ન આવરે છે, જેમાં બાહ્ય સેવાઓ સાથે જોડાવું, કસ્ટમ ચુકવણી gateway બનાવવું, અને webhooks સંભાળવા શામેલ છે.

અલગ tenant માળખા માટે, sovereign tenant bootstrap, migration verification, SSO, અને teardown માર્ગદર્શન માટે [Multi-Tenancy એકીકરણ](./multi-tenancy) જુઓ.

## CRM એકીકરણ {#crm-integration}

નવા ગ્રાહકો sign up કરે ત્યારે ગ્રાહક ડેટા તમારા CRM સાથે sync કરો:

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

## Analytics એકીકરણ {#analytics-integration}

ગ્રાહક જીવનચક્ર દરમ્યાન મુખ્ય વ્યવસાયિક ઘટનાઓ track કરો:

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

## આગામી પગલાં {#next-steps}

- [કસ્ટમ Gateway વિકાસ](./custom-gateway) — તમારું પોતાનું ચુકવણી gateway બનાવો
- [Webhook સંભાળ](./webhooks) — કસ્ટમ webhook endpoints બનાવો
- [Multi-Tenancy એકીકરણ](./multi-tenancy) — sovereign tenant lifecycle flows સાથે એકીકૃત કરો
