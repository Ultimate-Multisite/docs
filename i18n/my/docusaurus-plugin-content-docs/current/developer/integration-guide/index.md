---
title: ပေါင်းစည်းခြင်း လမ်းညွှန်
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ပေါင်းစည်းအသုံးပြုခြင်း လမ်းညွှန် {#integration-guide}

ဤလမ်းညွှန်တွင် Ultimate Multisite နှင့် အသုံးများသော ပေါင်းစည်းမှု ပုံစံများကို ဖော်ပြထားပြီး ပြင်ပဝန်ဆောင်မှုများနှင့် ချိတ်ဆက်ခြင်း၊ စိတ်ကြိုက် ငွေပေးချေမှု gateway များ တည်ဆောက်ခြင်း၊ webhook များကို ကိုင်တွယ်ခြင်းတို့ ပါဝင်သည်။

သီးခြား tenant အခြေခံအဆောက်အအုံအတွက် sovereign tenant စတင်ပြင်ဆင်ခြင်း၊ ရွှေ့ပြောင်းမှု အတည်ပြုခြင်း၊ SSO နှင့် ဖျက်သိမ်းခြင်း လမ်းညွှန်ကို [Multi-Tenancy Integration](./multi-tenancy) တွင် ကြည့်ပါ။

## CRM ပေါင်းစည်းမှု {#crm-integration}

ဖောက်သည်အသစ်များ စာရင်းသွင်းသောအခါ ဖောက်သည်ဒေတာကို သင့် CRM သို့ တစ်ပြိုင်တည်းညှိပါ-

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

## Analytics ပေါင်းစည်းမှု {#analytics-integration}

ဖောက်သည်ဘဝစက်ဝန်းတစ်လျှောက် အရေးကြီးသော စီးပွားရေးဖြစ်ရပ်များကို ခြေရာခံပါ-

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

## နောက်တစ်ဆင့်များ {#next-steps}

- [စိတ်ကြိုက် Gateway ဖန်တီးမှု](./custom-gateway) — သင့်ကိုယ်ပိုင် ငွေပေးချေမှု gateway ကို တည်ဆောက်ပါ
- [Webhook ကိုင်တွယ်ခြင်း](./webhooks) — စိတ်ကြိုက် webhook endpoint များ ဖန်တီးပါ
- [Multi-Tenancy Integration](./multi-tenancy) — sovereign tenant ဘဝစက်ဝန်း စီးဆင်းမှုများနှင့် ပေါင်းစည်းပါ
