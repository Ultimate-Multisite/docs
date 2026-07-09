---
title: حسبِ ضرورت گیٹ وے کی تیاری
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway ڈیولپمنٹ {#custom-gateway-development}

آپ `Base_Gateway` کلاس کو extend کر کے custom payment gateways بنا سکتے ہیں۔

## Gateway کلاس {#gateway-class}

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

## Gateway رجسٹر کریں {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## کلیدی Methods {#key-methods}

| Method | مقصد |
|--------|---------|
| `process_single_payment()` | ایک بار کی payments کو handle کریں |
| `process_signup()` | recurring subscriptions سیٹ اپ کریں |
| `process_refund()` | refund requests کو handle کریں |
| `get_payment_methods()` | کسی customer کے لیے محفوظ payment methods واپس کریں |

## recurring memberships کے لیے renewal credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway integrations کو یہ report کرنے دیتا ہے کہ آیا کسی recurring membership کے پاس `auto_renew` persist ہونے سے پہلے reusable renewal credential موجود ہے۔ `wu_membership_has_renewal_credential` کو hook کریں اور واپس کریں:

- `true` جب membership کے پاس gateway subscription، billing agreement، vault token، یا مساوی reusable payment method ہو۔
- `false` جب gateway جانتا ہو کہ recurring credential موجود نہیں یا قابلِ استعمال نہیں ہے۔
- `null` opt out کرنے اور default behaviour کو بغیر تبدیلی کے برقرار رکھنے کے لیے۔

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

جب کوئی gateway `false` واپس کرتا ہے، تو Ultimate Multisite membership کو auto-renewal disabled کے ساتھ محفوظ کرتا ہے اور missing-credential marker store کرتا ہے۔ منتظمین کو notify کرنے، re-authorization flow شروع کرنے، یا support notes شامل کرنے کے لیے `wu_membership_renewal_credential_missing` استعمال کریں:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

نیا reusable credential store ہونے کے بعد اپنے gateway کے کامیاب re-authorization flow کے حصے کے طور پر missing-credential marker clear کریں۔

## تجاویز {#tips}

- ناکامی پر ہمیشہ `WP_Error` واپس کریں تاکہ Ultimate Multisite error display کو handle کر سکے
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-specific logging کے لیے `wu_log_add()` استعمال کریں

## AI connector provider صلاحیتیں {#ai-connector-provider-capabilities}

Custom integrations جو AI connector-backed operations کو call کرتی ہیں، انہیں AI Provider for Anthropic Max v1.3.0 کے ساتھ متعارف کرائے گئے supported OAuth provider set کے مطابق ہونا چاہیے:

| Provider | صلاحیت سے متعلق notes |
|---|---|
| **Anthropic Max** | موجودہ OAuth account pool workflow کو support کرتا ہے۔ connector requests proxy کرتے وقت Anthropic tool-use payloads کو محفوظ رکھیں، بشمول empty tool arrays اور round-trip thinking signatures۔ |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow اور connector-supported operations کے لیے مکمل tool-support behavior کو support کرتا ہے۔ tool definitions اور tool-call results کو Codex-specific tool metadata حذف کیے بغیر آگے pass کریں۔ |
| **Google AI Pro** | OAuth pool workflow اور SDK-backed provider integration کو support کرتا ہے۔ requests route کرنے سے پہلے OAuth completion کے بعد provider accounts refresh کریں۔ |

Cursor Pro integration اور setup pathways ہٹا دیے گئے ہیں۔ Custom connector UIs میں Cursor Pro کو selectable provider کے طور پر register نہ کریں یا Cursor-specific OAuth instructions پیش نہ کریں۔

sandboxed یا headless environments کے لیے، manual OAuth fallback path expose کریں تاکہ منتظمین returned authorization data paste کر سکیں اور automatic browser redirect پر انحصار کیے بغیر account connection مکمل کر سکیں۔
