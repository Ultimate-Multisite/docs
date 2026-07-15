---
title: अनुकूलित गेटवे विकास
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway विकास

तपाईं `Base_Gateway` class विस्तार गरेर custom payment gatewayहरू सिर्जना गर्न सक्नुहुन्छ।

## Gateway Class {#gateway-class}

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

## Gateway दर्ता गर्नुहोस् {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## मुख्य Methods {#key-methods}

| Method | उद्देश्य |
|--------|---------|
| `process_single_payment()` | एक-पटकका payments ह्यान्डल गर्नुहोस् |
| `process_signup()` | recurring subscriptions सेटअप गर्नुहोस् |
| `process_refund()` | refund अनुरोधहरू ह्यान्डल गर्नुहोस् |
| `get_payment_methods()` | customer का लागि सुरक्षित गरिएका payment methods फर्काउनुहोस् |

## recurring memberships का लागि Renewal credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ले gateway integrations लाई `auto_renew` कायम गरिनुअघि recurring membership सँग पुनःप्रयोगयोग्य renewal credential छ कि छैन भनेर रिपोर्ट गर्न दिन्छ। `wu_membership_has_renewal_credential` hook गर्नुहोस् र फर्काउनुहोस्:

- membership सँग gateway subscription, billing agreement, vault token, वा समान पुनःप्रयोगयोग्य payment method हुँदा `true`।
- gateway लाई recurring credential हराइरहेको वा प्रयोग गर्न नसकिने थाहा हुँदा `false`।
- opt out गर्न र default behaviour अपरिवर्तित राख्न `null`।

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

जब gateway ले `false` फर्काउँछ, Ultimate Multisite ले auto-renewal निष्क्रिय गरिएको membership सुरक्षित गर्छ र missing-credential marker भण्डारण गर्छ। administrators लाई सूचित गर्न, re-authorization flow सुरु गर्न, वा support notes थप्न `wu_membership_renewal_credential_missing` प्रयोग गर्नुहोस्:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

नयाँ पुनःप्रयोगयोग्य credential भण्डारण भएपछि तपाईंको gateway को सफल re-authorization flow को भागका रूपमा missing-credential marker हटाउनुहोस्।

## सुझावहरू {#tips}

- असफल हुँदा सधैं `WP_Error` फर्काउनुहोस् ताकि Ultimate Multisite ले error display ह्यान्डल गर्न सकोस्
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-specific logging का लागि `wu_log_add()` प्रयोग गर्नुहोस्

## AI connector provider क्षमताहरू {#ai-connector-provider-capabilities}

AI connector-backed operations call गर्ने custom integrations ले AI Provider for Anthropic Max v1.3.0 सँग परिचय गराइएको समर्थित OAuth provider set सँग मिल्नुपर्छ:

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | विद्यमान OAuth account pool workflow समर्थन गर्छ। connector requests proxy गर्दा खाली tool arrays र round-trip thinking signatures सहित Anthropic tool-use payloads जोगाउनुहोस्। |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow र connector-supported operations का लागि पूर्ण tool-support व्यवहार समर्थन गर्छ। Codex-specific tool metadata नहटाई tool definitions र tool-call results पास गर्नुहोस्। |
| **Google AI Pro** | OAuth pool workflow र SDK-backed provider integration समर्थन गर्छ। requests route गर्नु अघि OAuth completion पछि provider accounts refresh गर्नुहोस्। |

Cursor Pro integration र setup pathways हटाइएका छन्। Cursor Pro लाई चयनयोग्य provider का रूपमा दर्ता नगर्नुहोस् वा custom connector UIs मा Cursor-specific OAuth instructions प्रस्तुत नगर्नुहोस्।

sandboxed वा headless environments का लागि, manual OAuth fallback path उपलब्ध गराउनुहोस् ताकि administrators ले फर्काइएको authorization data paste गरेर automatic browser redirect मा निर्भर नगरी account connection पूरा गर्न सकून्।
