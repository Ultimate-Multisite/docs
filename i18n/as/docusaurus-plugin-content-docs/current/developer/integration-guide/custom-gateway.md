---
title: কাস্টম গেটৱে উন্নয়ন
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# নিজৰ গেটৱে (Gateway) গঢ়ি তোলা

`Base_Gateway` ক্লাছটো এক্সটেন্ড কৰি আপুনি নিজৰ কাস্টম পেমেন্ট গেটৱে (payment gateway) বনাব পাৰে।

## গেটৱে ক্লাছ (Gateway Class)

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

## গেটৱে রেজিস্টাৰ কৰা (Register the Gateway)

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## মূল পদ্ধতিসমূহ (Key Methods)

| Method | উদ্দেশ্য |
|--------|---------|
| `process_single_payment()` | এটাৰ বাবে পেমেন্ট কৰা (Handle one-time payments) |
| `process_signup()` | পুনৰাবৃত্ত হোৱা সাবস্ক্রিপশ্যন সেট কৰা (Set up recurring subscriptions) |
| `process_refund()` | ৰিফাণ্ডৰ অনুৰোধসমূহ (Handle refund requests) সামৰা |
| `get_payment_methods()` | কোনো ग्राहकৰ সেভ কৰা পেমেন্ট পদ্ধতিসমূহ ঘূৰাই দিয়া (Return saved payment methods for a customer) |

## টিপছ (Tips)

- বিফল হ'লে সদায় `WP_Error` ঘূৰাই দিয়ক, যাতে Ultimate Multisite-য়ে ভুল প্ৰদৰ্শন (error display) কৰিব পাৰে।
- আপোনাৰ গেটৱে কোনবিধ পেমেন্ট ধৰণ (one-time, recurring) সামৰি লয়, সেয়া ঘোষণা কৰিবলৈ `$this->supports` সেট কৰক।
- গেটৱে-সম্পৰ্কীয় লগিং (logging) কৰিবলৈ `wu_log_add()` ব্যৱহাৰ কৰক।
