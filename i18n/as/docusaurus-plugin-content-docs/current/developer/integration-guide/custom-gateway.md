---
title: কাষ্টম গেটৱে বিকাশ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# কাষ্টম গেটৱে উন্নয়ন

আপুনি `Base_Gateway` ক্লাছ বিস্তাৰ কৰি কাষ্টম পৰিশোধ গেটৱে সৃষ্টি কৰিব পাৰে।

## গেটৱে ক্লাছ

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

## গেটৱে পঞ্জীয়ন কৰক

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## মূল পদ্ধতিসমূহ

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | এবাৰীয়া পৰিশোধসমূহ পৰিচালনা কৰক |
| `process_signup()` | পুনৰাবৃত্ত চাবস্ক্ৰিপচনসমূহ ছেট আপ কৰক |
| `process_refund()` | ধন-ঘূৰাই দিয়াৰ অনুৰোধসমূহ পৰিচালনা কৰক |
| `get_payment_methods()` | কোনো গ্ৰাহকৰ বাবে সংৰক্ষিত পৰিশোধ পদ্ধতিসমূহ ঘূৰাই দিয়ক |

## পুনৰাবৃত্ত সদস্যপদসমূহৰ বাবে নবীকৰণ প্ৰমাণপত্ৰ

Ultimate Multisite v2.13.0-এ গেটৱে সংযোজনসমূহক `auto_renew` স্থায়ীভাৱে সংৰক্ষিত হোৱাৰ আগতে কোনো পুনৰাবৃত্ত সদস্যপদৰ পুনৰ্ব্যৱহাৰযোগ্য নবীকৰণ প্ৰমাণপত্ৰ আছে নে নাই জনাবলৈ দিয়ে। `wu_membership_has_renewal_credential` হুক কৰক আৰু ঘূৰাই দিয়ক:

- সদস্যপদটোৰ গেটৱে চাবস্ক্ৰিপচন, বিলিং চুক্তি, vault token, বা সমতুল্য পুনৰ্ব্যৱহাৰযোগ্য পৰিশোধ পদ্ধতি থাকিলে `true`।
- গেটৱে জানিলে যে পুনৰাবৃত্ত প্ৰমাণপত্ৰ অনুপস্থিত বা ব্যৱহাৰযোগ্য নহয়, `false`।
- আঁতৰি থাকিবলৈ আৰু অবিকল্পিত আচৰণ অপৰিৱৰ্তিত ৰাখিবলৈ `null`।

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

যেতিয়া কোনো গেটৱে `false` ঘূৰাই দিয়ে, Ultimate Multisite-এ স্বয়ংক্ৰিয়-নবীকৰণ নিষ্ক্ৰিয় কৰি সদস্যপদ সংৰক্ষণ কৰে আৰু অনুপস্থিত-প্ৰমাণপত্ৰ চিহ্ন সংৰক্ষণ কৰে। প্ৰশাসকসকলক অৱগত কৰিবলৈ, পুনৰ-অনুমোদন প্ৰবাহ আৰম্ভ কৰিবলৈ, বা সহায়ক টোকা যোগ কৰিবলৈ `wu_membership_renewal_credential_missing` ব্যৱহাৰ কৰক:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

নতুন পুনৰ্ব্যৱহাৰযোগ্য প্ৰমাণপত্ৰ সংৰক্ষিত হোৱাৰ পিছত আপোনাৰ গেটৱেৰ সফল পুনৰ-অনুমোদন প্ৰবাহৰ অংশ হিচাপে অনুপস্থিত-প্ৰমাণপত্ৰ চিহ্ন মচি পেলাওক।

## পৰামৰ্শ

- বিফলতাত সদায় `WP_Error` ঘূৰাই দিয়ক যাতে Ultimate Multisite-এ ত্ৰুটি প্ৰদৰ্শন পৰিচালনা কৰিব পাৰে
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- গেটৱে-নিৰ্দিষ্ট লগিঙৰ বাবে `wu_log_add()` ব্যৱহাৰ কৰক

## AI সংযোজক প্ৰদানকাৰীৰ সক্ষমতাসমূহ

AI সংযোজক-সমৰ্থিত কাৰ্য্যসমূহ কল কৰা কাষ্টম সংযোজনসমূহে AI Provider for Anthropic Max v1.3.0-ৰ সৈতে প্ৰৱৰ্তিত সমৰ্থিত OAuth প্ৰদানকাৰী ছেটৰ সৈতে মিল ৰাখিব লাগে:

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | বৰ্তমানৰ OAuth একাউণ্ট পুল ৱৰ্কফ্ল’ সমৰ্থন কৰে। সংযোজক অনুৰোধসমূহ প্ৰক্সি কৰোঁতে খালী tool array আৰু round-trip thinking signature-সহ Anthropic tool-use payloadসমূহ অক্ষুণ্ণ ৰাখক। |
| **OpenAI ChatGPT/Codex** | সংযোজক-সমৰ্থিত কাৰ্য্যসমূহৰ বাবে OAuth পুল ৱৰ্কফ্ল’ আৰু সম্পূৰ্ণ tool-support আচৰণ সমৰ্থন কৰে। Codex-নিৰ্দিষ্ট tool metadata আঁতৰাই নেপেলোৱাকৈ tool definition আৰু tool-call resultসমূহ আগবঢ়াই দিয়ক। |
| **Google AI Pro** | OAuth পুল ৱৰ্কফ্ল’ আৰু SDK-সমৰ্থিত প্ৰদানকাৰী সংযোজন সমৰ্থন কৰে। অনুৰোধসমূহ ৰাউট কৰাৰ আগতে OAuth সম্পূৰ্ণ হোৱাৰ পিছত প্ৰদানকাৰী একাউণ্টসমূহ সতেজ কৰক। |

Cursor Pro সংযোজন আৰু ছেটআপ পথসমূহ আঁতৰোৱা হৈছে। Cursor Pro-কে বাছনি কৰিব পৰা প্ৰদানকাৰী হিচাপে পঞ্জীয়ন নকৰিব বা কাষ্টম সংযোজক UIসমূহত Cursor-নিৰ্দিষ্ট OAuth নিৰ্দেশনা উপস্থাপন নকৰিব।

sandboxed বা headless পৰিৱেশসমূহৰ বাবে, হাতেৰে OAuth fallback path উন্মুক্ত কৰক যাতে প্ৰশাসকসকলে ঘূৰাই দিয়া authorization data পেষ্ট কৰি স্বয়ংক্ৰিয় browser redirect-ৰ ওপৰত নিৰ্ভৰ নকৰাকৈ একাউণ্ট সংযোগ সম্পূৰ্ণ কৰিব পাৰে।
