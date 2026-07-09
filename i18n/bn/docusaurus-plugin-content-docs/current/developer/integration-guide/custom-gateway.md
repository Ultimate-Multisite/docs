---
title: কাস্টম গেটওয়ে উন্নয়ন
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# কাস্টম Gateway ডেভেলপমেন্ট

`Base_Gateway` ক্লাস প্রসারিত করে আপনি কাস্টম পেমেন্ট gateway তৈরি করতে পারেন।

## Gateway ক্লাস

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

## Gateway নিবন্ধন করুন

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## প্রধান মেথড

| Method | উদ্দেশ্য |
|--------|---------|
| `process_single_payment()` | এককালীন পেমেন্ট পরিচালনা করা |
| `process_signup()` | পুনরাবৃত্ত subscription সেট আপ করা |
| `process_refund()` | refund অনুরোধ পরিচালনা করা |
| `get_payment_methods()` | কোনো গ্রাহকের জন্য সংরক্ষিত পেমেন্ট মেথড ফেরত দেওয়া |

## পুনরাবৃত্ত membership-এর জন্য নবায়ন credentials

Ultimate Multisite v2.13.0 gateway integration-গুলোকে `auto_renew` সংরক্ষিত হওয়ার আগে কোনো পুনরাবৃত্ত membership-এর পুনর্ব্যবহারযোগ্য নবায়ন credential আছে কি না জানাতে দেয়। `wu_membership_has_renewal_credential` hook করুন এবং ফেরত দিন:

- membership-এ gateway subscription, billing agreement, vault token, বা সমতুল্য পুনর্ব্যবহারযোগ্য পেমেন্ট মেথড থাকলে `true`।
- gateway যদি জানে যে পুনরাবৃত্ত credential নেই বা ব্যবহারযোগ্য নয়, তাহলে `false`।
- অপ্ট আউট করতে এবং ডিফল্ট আচরণ অপরিবর্তিত রাখতে `null`।

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

কোনো gateway `false` ফেরত দিলে, Ultimate Multisite auto-renewal নিষ্ক্রিয় রেখে membership সংরক্ষণ করে এবং missing-credential marker সংরক্ষণ করে। administrator-দের জানাতে, re-authorization flow শুরু করতে, বা support note যোগ করতে `wu_membership_renewal_credential_missing` ব্যবহার করুন:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

নতুন পুনর্ব্যবহারযোগ্য credential সংরক্ষিত হওয়ার পর আপনার gateway-এর সফল re-authorization flow-এর অংশ হিসেবে missing-credential marker মুছে দিন।

## টিপস

- ব্যর্থ হলে সবসময় `WP_Error` ফেরত দিন, যাতে Ultimate Multisite error প্রদর্শন পরিচালনা করতে পারে
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-নির্দিষ্ট logging-এর জন্য `wu_log_add()` ব্যবহার করুন

## AI connector provider সক্ষমতা

AI connector-সমর্থিত operation কল করে এমন কাস্টম integration-গুলোকে AI Provider for Anthropic Max v1.3.0-এর সঙ্গে চালু হওয়া সমর্থিত OAuth provider সেটের সঙ্গে সামঞ্জস্য রাখতে হবে:

| Provider | সক্ষমতা সংক্রান্ত নোট |
|---|---|
| **Anthropic Max** | বিদ্যমান OAuth account pool workflow সমর্থন করে। connector request proxy করার সময় Anthropic tool-use payload সংরক্ষণ করুন, যার মধ্যে খালি tool array এবং round-trip thinking signature অন্তর্ভুক্ত। |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow এবং connector-সমর্থিত operation-এর জন্য পূর্ণ tool-support আচরণ সমর্থন করে। Codex-নির্দিষ্ট tool metadata বাদ না দিয়ে tool definition এবং tool-call result পাঠিয়ে দিন। |
| **Google AI Pro** | OAuth pool workflow এবং SDK-সমর্থিত provider integration সমর্থন করে। request routing করার আগে OAuth completion-এর পর provider account refresh করুন। |

Cursor Pro integration এবং setup pathway অপসারণ করা হয়েছে। custom connector UI-তে Cursor Pro-কে নির্বাচনযোগ্য provider হিসেবে নিবন্ধন করবেন না বা Cursor-নির্দিষ্ট OAuth নির্দেশনা দেখাবেন না।

sandboxed বা headless environment-এর জন্য manual OAuth fallback path প্রকাশ করুন, যাতে administrator-রা ফেরত পাওয়া authorization data paste করে automatic browser redirect-এর ওপর নির্ভর না করে account connection সম্পন্ন করতে পারেন।
