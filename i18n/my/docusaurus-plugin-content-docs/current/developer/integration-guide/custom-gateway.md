---
title: ကိုယ်ပိုင် ဂိတ်ဝ တည်ဆောက်ခြင်း
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# စိတ်ကြယ်မှုရှိသော ငွေပေးချေမှု ဂိတ်ဝါးများ ဖန်တီးခြင်း

`Base_Gateway` class ကို အသုံးပြုပြီး စိတ်ကြယ်မှုရှိသော ငွေပေးချေမှု ဂိတ်ဝါးများကို ဖန်တီးနိုင်ပါတယ်။

## Gateway Class

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## Register the Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Key Methods

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | တစ်ကြိမ်တည်း ငွေပေးချေမှုများကို ကိုင်တွယ်ခြင်း |
| `process_signup()` | ပုံမှန်ပြန်လည်စာရင်းသွင်းမှုများ (subscriptions) ကို စနစ်ထည့်ခြင်း |
| `process_refund()` | ငွေပြန်အမ်းခိုင်းမှုများကို ကိုင်တွယ်ခြင်း |
| `get_payment_methods()` | ဖောက်သည်အတွက် သိမ်းဆည်းထားသော ငွေပေးချေမှုနည်းလမ်းများကို ပြန်ပေးခြင်း |

## Tips

- အမှားဖြစ်ခဲ့ရင် အမြဲတမ်း `WP_Error` ကို ပြန်ပေးသင့်ပါတယ်။ ဒါမှ Ultimate Multisite က အမှားပြသမှုကို ကိုင်တွယ်နိုင်မှာပါ။
- သင့်ဂိတ်ဝါးက ဘယ်လိုငွေပေးချေမှုအမျိုးအစားတွေကို ကိုင်တွယ်လဲဆိုတာ ကြေညာဖို့ `$this->supports` ကို သတ်မှတ်ပေးရပါမယ် (`one-time`, `recurring`)။
- ဂိတ်ဝါးနဲ့ သက်ဆိုင်တဲ့ မှတ်တမ်းမှတ်ရာ (logging) တွေအတွက် `wu_log_add()` ကို အသုံးပြုပါ။
