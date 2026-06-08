---
title: ஒருங்கிணைப்பு வழிகாட்டி
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# ஒருங்கிணைப்பு வழிகாட்டி

இந்த வழிகாட்டி, Ultimate Multisite உடன் பொதுவான ஒருங்கிணைப்பு முறைகள் பற்றி விளக்குகிறது. இதில் வெளிப்புற சேவைகளுடன் இணைப்பது, தனிப்பயன் கட்டண நுழைவாயில்களை (payment gateways) உருவாக்குவது மற்றும் வெப்ஹூக்குகளை (webhooks) கையாள்வது ஆகியவை அடங்கும்.

## CRM ஒருங்கிணைப்பு

புதிய வாடிக்கையாளர்கள் பதிவு செய்யும் போது, அவர்களின் தரவை உங்கள் CRM-உடன் ஒத்திசைக்க (sync):

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

## அனலிட்டிக்ஸ் ஒருங்கிணைப்பு

வாடிக்கையாளர் வாழ்க்கைச் சுழற்சியில் (customer lifecycle) முக்கியமான வணிக நிகழ்வுகளை (business events) கண்காணிக்க:

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

## அடுத்த கட்டங்கள்

- [Custom Gateway Development](./custom-gateway) — உங்களுக்கான சொந்த கட்டண நுழைவாயிலியை (payment gateway) உருவாக்குங்கள்
- [Webhook Handling](./webhooks) — தனிப்பயன் வெப்ஹூக் எண்ட்பாயிண்ட்களை (webhook endpoints) உருவாக்குங்கள்
