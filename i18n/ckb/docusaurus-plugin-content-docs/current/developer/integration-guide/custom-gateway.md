---
title: گەشەپێدانی Gateway ـی تایبەت
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# پەرەپێدانی Custom Gateway {#custom-gateway-development}

دەتوانیت gateway ـی پارەدانی تایبەت دروست بکەیت بە فراوانکردنی پۆلی `Base_Gateway`.

## پۆلی Gateway {#gateway-class}

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

## تۆمارکردنی Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## میتۆدە سەرەکییەکان {#key-methods}

| Method | مەبەست |
|--------|---------|
| `process_single_payment()` | مامەڵەکردن لەگەڵ پارەدانی یەکجارە |
| `process_signup()` | ڕێکخستنی subscription ـە دووبارەبووەکان |
| `process_refund()` | مامەڵەکردن لەگەڵ داواکارییەکانی گەڕاندنەوەی پارە |
| `get_payment_methods()` | گەڕاندنەوەی شێوازە پارەدانە پاشەکەوتکراوەکان بۆ کڕیارێک |

## بڕوانامەکانی نوێکردنەوە بۆ ئەندامێتییە دووبارەبووەکان {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ڕێگە بە یەکخستنەکانی gateway دەدات ڕاپۆرت بکەن ئایا ئەندامێتییەکی دووبارەبوو بڕوانامەی نوێکردنەوەیەکی دووبارە بەکارهێنراوی هەیە پێش ئەوەی `auto_renew` پاشەکەوت بکرێت. `wu_membership_has_renewal_credential` بکە بە hook و بگەڕێنەوە:

- `true` کاتێک ئەندامێتییەکە subscription ـی gateway، ڕێککەوتنی پسووڵە، vault token، یان شێوازی پارەدانی دووبارە بەکارهێنراوی هاوتای هەبێت.
- `false` کاتێک gateway دەزانێت بڕوانامە دووبارەبووەکە ونە یان ناتوانرێت بەکاربهێنرێت.
- `null` بۆ دەرچوون و هێشتنەوەی ڕەفتاری بنەڕەتی بێ گۆڕان.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

کاتێک gateway `false` دەگەڕێنێتەوە، Ultimate Multisite ئەندامێتییەکە بە نوێکردنەوەی خۆکار ناچالاک پاشەکەوت دەکات و نیشانەی بڕوانامە-ونبوو هەڵدەگرێت. `wu_membership_renewal_credential_missing` بەکاربهێنە بۆ ئاگادارکردنەوەی بەڕێوەبەران، دەستپێکردنی ڕەوتی دووبارە-ڕێپێدان، یان زیادکردنی تێبینییەکانی پاڵپشتی:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

نیشانەی بڕوانامە-ونبوو بسڕەوە وەک بەشێک لە ڕەوتی دووبارە-ڕێپێدانی سەرکەوتووی gateway ـەکەت دوای ئەوەی بڕوانامەیەکی نوێی دووبارە بەکارهێنراو پاشەکەوت کرا.

## ئامۆژگارییەکان {#tips}

- هەمیشە لە کاتی شکستهێنان `WP_Error` بگەڕێنەوە تاکو Ultimate Multisite بتوانێت مامەڵە لەگەڵ پیشاندانی هەڵە بکات
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- `wu_log_add()` بەکاربهێنە بۆ تۆمارکردنی تایبەت بە gateway

## تواناکانی پێشکەشکەری پەیوەستکەری AI {#ai-connector-provider-capabilities}

یەکخستنە تایبەتەکان کە پەیوەندی بە کردارە پشتیوانیکراوەکانی پشتبەستوو بە پەیوەستکەری AI دەکەن، پێویستە لەگەڵ کۆمەڵە پێشکەشکەری OAuth ـی پشتیوانیکراو هاوتا بن کە لەگەڵ AI Provider for Anthropic Max v1.3.0 ناسێنرا:

| پێشکەشکەر | تێبینییەکانی توانا |
|---|---|
| **Anthropic Max** | پشتگیری لە ڕەوتی کاری پۆلی هەژماری OAuth ـی ئێستا دەکات. payload ـەکانی بەکارهێنانی ئامرازی Anthropic بپارێزە، لەوانەش ڕیزبەندی ئامرازی بەتاڵ و واژۆکانی بیرکردنەوەی round-trip، کاتێک داواکارییەکانی پەیوەستکەر بە proxy دەنێردرێن. |
| **OpenAI ChatGPT/Codex** | پشتگیری لە ڕەوتی کاری پۆلی OAuth و ڕەفتاری تەواوی پاڵپشتی-ئامراز بۆ کردارە پشتیوانیکراوەکانی پەیوەستکەر دەکات. پێناسەکانی ئامراز و ئەنجامەکانی بانگی-ئامراز بێ ئەوەی metadata ـی تایبەت بە Codex ـی ئامراز بسڕدرێتەوە، تێپەڕێنە. |
| **Google AI Pro** | پشتگیری لە ڕەوتی کاری پۆلی OAuth و یەکخستنی پێشکەشکەری پشتبەستوو بە SDK دەکات. دوای تەواوبوونی OAuth، هەژمارەکانی پێشکەشکەر نوێ بکەوە پێش ئاراستەکردنی داواکارییەکان. |

یەکخستنی Cursor Pro و ڕێڕەوەکانی setup لابراون. Cursor Pro وەک پێشکەشکەرێکی هەڵبژێردراو تۆمار مەکە یان ڕێنماییە تایبەتەکانی OAuth ـی Cursor لە UI ـەکانی پەیوەستکەری تایبەتدا پێشکەش مەکە.

بۆ ژینگە sandbox کراوەکان یان headless، ڕێڕەوی fallback ـی دەستی OAuth بخە ڕوو تاکو بەڕێوەبەران بتوانن داتای ڕێپێدانی گەڕێنراوە دابنێن و پەیوەستکردنی هەژمار تەواو بکەن بەبێ پشتبەستن بە گەڕانەوەی خۆکاری وێبگەڕ.
