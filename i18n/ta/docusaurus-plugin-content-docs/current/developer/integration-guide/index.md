---
title: ஒருங்கிணைப்பு வழிகாட்டி
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ஒருங்கிணைப்பு வழிகாட்டி

இந்த வழிகாட்டி Ultimate Multisite உடனான பொதுவான ஒருங்கிணைப்பு முறைகளை விளக்குகிறது. வெளிப்புற சேவைகளுடன் இணைதல், தனிப்பயன் கட்டண gateways உருவாக்குதல், webhooks கையாளுதல் ஆகியவை இதில் அடங்கும்.

தனிமைப்படுத்தப்பட்ட tenant உள்கட்டமைப்புக்கு, sovereign tenant bootstrap, migration verification, SSO, மற்றும் teardown வழிகாட்டலுக்காக [Multi-Tenancy ஒருங்கிணைப்பு](./multi-tenancy) பார்க்கவும்.

## CRM ஒருங்கிணைப்பு

புதிய வாடிக்கையாளர்கள் பதிவு செய்யும் போது, வாடிக்கையாளர் தரவை உங்கள் CRM-க்கு ஒத்திசைக்கவும்:

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

## Analytics ஒருங்கிணைப்பு

வாடிக்கையாளர் வாழ்நாள் சுழற்சி முழுவதிலும் முக்கிய வணிக நிகழ்வுகளை கண்காணிக்கவும்:

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

## அடுத்த படிகள்

- [தனிப்பயன் Gateway உருவாக்கம்](./custom-gateway) — உங்கள் சொந்த கட்டண gateway-ஐ உருவாக்கவும்
- [Webhook கையாளுதல்](./webhooks) — தனிப்பயன் webhook endpoints உருவாக்கவும்
- [Multi-Tenancy ஒருங்கிணைப்பு](./multi-tenancy) — sovereign tenant வாழ்நாள் சுழற்சி ஓட்டங்களுடன் ஒருங்கிணைக்கவும்
