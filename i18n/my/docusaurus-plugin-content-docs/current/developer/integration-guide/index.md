---
title: ပေါင်းစပ်မှုလမ်းညွှန်
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# ပေါင်းစပ်မှု လမ်းညွှန်

ဤလမ်းညွှန်တွင် Ultimate Multisite နှင့် ပုံမှန်ပေါင်းစပ်မှု နည်းလမ်းများ၊ ပြင်ပဝန်ဆောင်မှုများနှင့် ချိတ်ဆက်ခြင်း၊ စိတ်ကြယ်မှုရှိသော ငွေပေးချေမှု ဂိတ်ဝေးများ တည်ဆောက်ခြင်း၊ နှင့် webhooks များကို ကိုင်တွယ်ခြင်း အပါအဝင် အကြောင်းအရာများကို ဖော်ပြထားပါသည်။

## CRM ပေါင်းစပ်မှု

ဖောက်သည်အသစ်များ စာရင်းသွင်းသည့်အခါ ၎င်းတို့၏ အချက်အလက်များကို သင်၏ CRM သို့ ပေါင်းစပ်ပါ။

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

## Analytics ပေါင်းစပ်မှု

ဖောက်သည်ဘဝသံသရာတစ်လျှောက် အဓိက စီးပွားရေး အဖြစ်အပျက်များကို စောင့်ကြည့်ပါ။

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

## နောက်အဆင့်များ

- [Custom Gateway Development](./custom-gateway) — သင့်ကိုယ်ပိုင် ငွေပေးချေမှု ဂိတ်ဝေးကို တည်ဆောက်ခြင်း
- [Webhook Handling](./webhooks) — စိတ်ကြယ်မှုရှိသော webhook endpoint များကို ဖန်တီးခြင်း
