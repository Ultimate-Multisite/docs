---
title: Webhook ကိုင်တွယ်ခြင်း
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook ကို စီမံခန့်ခွဲခြင်း

အပြင်ဘက် ဝန်ဆောင်မှုများမှ ဖြစ်ပေါ်လာသည့် အဖြစ်အပျက်များကို လက်ခံရယူပြီး Ultimate Multisite နှင့် အချက်အလက်များကို ပေါင်းစပ်ရန်အတွက် custom webhook endpoints များကို ဖန်တီးပါ။

## Custom Webhook Endpoint {#custom-webhook-endpoint}

```php
// Webhook endpoint ကို မှတ်ပုံတင်ခြင်း
add_action('rest_api_init', function() {
    register_rest_route('my-addon/v1', '/webhook', [
        'methods' => 'POST',
        'callback' => 'handle_my_webhook',
        'permission_callback' => 'verify_webhook_signature'
    ]);
});

function handle_my_webhook($request) {
    $payload = $request->get_json_params();

    switch ($payload['event_type']) {
        case 'customer.updated':
            $customer = wu_get_customer($payload['customer_id']);
            if ($customer) {
                $customer->set_vip($payload['data']['is_vip']);
                $customer->save();
            }
            break;

        case 'subscription.cancelled':
            $membership = wu_get_membership_by_hash($payload['subscription_id']);
            if ($membership) {
                $membership->cancel();
            }
            break;
    }

    return ['status' => 'processed'];
}

function verify_webhook_signature($request) {
    $signature = $request->get_header('X-Webhook-Signature');
    $payload = $request->get_body();
    $secret = get_option('my_webhook_secret');

    return hash_hmac('sha256', $payload, $secret) === $signature;
}
```

## လုံခြုံရေးဆိုင်ရာ စဉ်းစားရမည့်အချက်များ {#security-considerations}

- webhook signature များကို HMAC သို့မဟုတ် shared secret ကို အသုံးပြု၍ အမြဲတမ်း စစ်ဆေးပါ။
- REST route တွင် `permission_callback` ကို အသုံးပြုပါ။ ထုတ်ဝေမှု (production) အဆင့်တွင် ၎င်းကို `__return_true` ဟု ဘယ်တော့မှ သတ်မှတ်မထားပါနှင့်။
- အချက်အလက်များ (payload data) အားလုံးကို အသုံးပြုခြင်းမပြုမီ စစ်ဆေးအတည်ပြုခြင်း (validate) နှင့် သန့်စင်ခြင်း (sanitize) ပြုလုပ်ပါ။
- သင့်လျော်သော HTTP status code များကို ပြန်ပေးပါ (အောင်မြင်ပါက ၂၀၀၊ မမှန်ကန်သော request များအတွက် ၄၀၀)။
