---
title: સંકલન માર્ગદર્શિકા
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# સંકલન માર્ગદર્શિકા

Ultimate Multisite સાથેના સામાન્ય સંકલન (integration) પદ્ધતિઓ વિશે આ માર્ગદર્શિકા આપે છે. આમાં બાહ્ય સેવાઓ સાથે કનેક્ટ કરવું, કસ્ટમ પેમેન્ટ ગેટવે બનાવવું અને વેબહુક્સ (webhooks) ને હેન્ડલ કરવા જેવી બાબતોનો સમાવેશ થાય છે.

## CRM સંકલન

જ્યારે નવા ગ્રાહકો સાઇન અપ કરે ત્યારે તેમના ગ્રાહક ડેટાને તમારા CRM સાથે sync (સિંક) કેવી રીતે કરવો:

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

## એનાલિટિક્સ સંકલન

ગ્રાહક જીવનચક્ર (customer lifecycle) દરમિયાન મુખ્ય વ્યવસાયિક ઘટનાઓ (business events) ને ટ્રેક કેવી રીતે કરવી:

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

## આગળના પગલાં

- [Custom Gateway Development](./custom-gateway) — તમારું પોતાનું પેમેન્ટ ગેટવે બનાવો
- [Webhook Handling](./webhooks) — કસ્ટમ વેબહૂક એન્ડપોઇન્ટ્સ બનાવો
