---
title: د ادغام لارښود
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# د ادغام لارښود

دا لارښود له Ultimate Multisite سره د عامو ادغام بڼې رانغاړي، چې پکې له بهرنیو خدمتونو سره نښلول، د ځانګړو تادیې دروازو جوړول، او د webhooks سمبالول شامل دي.

د جلا کرایه‌دار زیربنا لپاره، د خپلواک کرایه‌دار د پیل، د کډون د تایید، SSO، او د له‌منځه وړلو لارښوونو لپاره [د څو-کرایه‌دارۍ ادغام](./multi-tenancy) وګورئ.

## د CRM ادغام

کله چې نوي پېرودونکي نوم‌لیکنه کوي، د پېرودونکي معلومات خپل CRM ته همغږي کړئ:

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

## د شننو ادغام

د پېرودونکي د ژوندپړاو په اوږدو کې مهمې سوداګریزې پېښې وڅارئ:

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

## راتلونکي ګامونه

- [د ځانګړې دروازې جوړونه](./custom-gateway) — خپله د تادیې دروازه جوړه کړئ
- [د Webhook سمبالونه](./webhooks) — ځانګړي webhook endpointونه جوړ کړئ
- [د څو-کرایه‌دارۍ ادغام](./multi-tenancy) — د خپلواک کرایه‌دار د ژوندپړاو له بهیرونو سره ادغام وکړئ
