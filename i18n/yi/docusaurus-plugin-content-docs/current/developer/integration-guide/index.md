---
title: אינטעגראַציע־גייד
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# אינטעגראַציע־גייד

דער גייד דעקט אָפֿטלעכע אינטעגראַציע־מוסטערן מיט Ultimate Multisite, אַרײַנגערעכנט פֿאַרבינדן צו אויסערלעכע סערוויסן, בויען אייגענע צאָלונג־גייטוויי־ס, און באַהאַנדלען וועבהוקס.

פֿאַר איזאָלירטע טענאַנט־אינפֿראַסטרוקטור, זעט [מולטי־טענאַנסי אינטעגראַציע](./multi-tenancy) פֿאַר סאַוורענע טענאַנט־אָנשטאַרטונג, מיגראַציע־וועריפֿיקאַציע, SSO, און אָפּבוי־אָנווייזונגען.

## CRM אינטעגראַציע {#crm-integration}

סינכראָניזירט קונה־דאַטן צו אײַער CRM ווען נײַע קונים שרײַבן זיך אײַן:

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

## אַנאַליטיק־אינטעגראַציע {#analytics-integration}

שפּירט נאָך שליסלדיקע געשעפֿט־געשעענישן איבערן קונה־לעבנסציקל:

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

## ווײַטערדיקע שריט {#next-steps}

- [אייגענע גייטוויי־אַנטוויקלונג](./custom-gateway) — בויט אײַער אייגענע צאָלונג־גייטוויי
- [וועבהוק־באַהאַנדלונג](./webhooks) — שאַפֿט אייגענע וועבהוק־ענדפּונקטן
- [מולטי־טענאַנסי אינטעגראַציע](./multi-tenancy) — אינטעגרירט מיט סאַוורענע טענאַנט־לעבנסציקל־פליסן
