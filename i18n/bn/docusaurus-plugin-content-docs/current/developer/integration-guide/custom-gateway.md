---
title: কাস্টম গেটওয়ে ডেভেলপমেন্ট
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# কাস্টম গেটওয়ে তৈরি

আপনি `Base_Gateway` ক্লাসটিকে এক্সটেন্ড করে কাস্টম পেমেন্ট গেটওয়ে তৈরি করতে পারেন।

## গেটওয়ে ক্লাস

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

## গেটওয়ে রেজিস্টার করা

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## মূল মেথডগুলো

| মেথড | উদ্দেশ্য |
|--------|---------|
| `process_single_payment()` | এককালীন পেমেন্ট পরিচালনা করা |
| `process_signup()` | পুনরাবৃত্ত সাবস্ক্রিপশন সেটআপ করা |
| `process_refund()` | রিফান্ড অনুরোধ পরিচালনা করা |
| `get_payment_methods()` | গ্রাহকের জন্য সেভ করা পেমেন্ট পদ্ধতিগুলো ফেরত দেওয়া |

## টিপস

- ব্যর্থ হলে সবসময় `WP_Error` রিটার্ন করুন, যাতে Ultimate Multisite এরর ডিসপ্লে পরিচালনা করতে পারে।
- আপনার গেটওয়ে কোন ধরনের পেমেন্ট হ্যান্ডেল করে তা ঘোষণা করতে `$this->supports` সেট করুন (`one-time`, `recurring`)।
- গেটওয়ে-নির্দিষ্ট লগিংয়ের জন্য `wu_log_add()` ব্যবহার করুন।
