---
title: कस्टम गेटवे विकास
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# कस्टम Gateway विकास

आप `Base_Gateway` क्लास को बढ़ाकर कस्टम भुगतान gateways बना सकते हैं।

## Gateway क्लास {#gateway-class}

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

## Gateway पंजीकृत करें {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## मुख्य विधियाँ {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | एक-बार के भुगतानों को संभालें |
| `process_signup()` | आवर्ती subscriptions सेट करें |
| `process_refund()` | refund अनुरोधों को संभालें |
| `get_payment_methods()` | ग्राहक के लिए सहेजी गई भुगतान विधियाँ लौटाएँ |

## आवर्ती memberships के लिए नवीनीकरण credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway integrations को यह बताने देता है कि किसी आवर्ती membership के पास `auto_renew` सहेजे जाने से पहले पुनः उपयोग योग्य नवीनीकरण credential है या नहीं। `wu_membership_has_renewal_credential` को hook करें और लौटाएँ:

- `true` जब membership के पास gateway subscription, billing agreement, vault token, या समान पुनः उपयोग योग्य भुगतान विधि हो।
- `false` जब gateway जानता हो कि आवर्ती credential गायब है या उपयोग योग्य नहीं है।
- `null` opt out करने और default व्यवहार को अपरिवर्तित रखने के लिए।

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

जब कोई gateway `false` लौटाता है, Ultimate Multisite membership को auto-renewal अक्षम करके सहेजता है और missing-credential marker संग्रहीत करता है। प्रशासकों को सूचित करने, re-authorization flow शुरू करने, या support notes जोड़ने के लिए `wu_membership_renewal_credential_missing` का उपयोग करें:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

नया पुनः उपयोग योग्य credential संग्रहीत होने के बाद, अपने gateway के सफल re-authorization flow के हिस्से के रूप में missing-credential marker साफ़ करें।

## सुझाव {#tips}

- विफलता पर हमेशा `WP_Error` लौटाएँ ताकि Ultimate Multisite त्रुटि प्रदर्शन संभाल सके
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-specific logging के लिए `wu_log_add()` का उपयोग करें

## AI connector provider क्षमताएँ {#ai-connector-provider-capabilities}

AI connector-backed operations को कॉल करने वाली कस्टम integrations को AI Provider for Anthropic Max v1.3.0 के साथ प्रस्तुत समर्थित OAuth provider set के अनुरूप होना चाहिए:

| Provider | क्षमता नोट्स |
|---|---|
| **Anthropic Max** | मौजूदा OAuth account pool workflow का समर्थन करता है। connector requests को proxy करते समय खाली tool arrays और round-trip thinking signatures सहित Anthropic tool-use payloads सुरक्षित रखें। |
| **OpenAI ChatGPT/Codex** | connector-supported operations के लिए OAuth pool workflow और पूर्ण tool-support behavior का समर्थन करता है। Codex-specific tool metadata हटाए बिना tool definitions और tool-call results पास करें। |
| **Google AI Pro** | OAuth pool workflow और SDK-backed provider integration का समर्थन करता है। requests route करने से पहले OAuth completion के बाद provider accounts refresh करें। |

Cursor Pro integration और setup pathways हटा दिए गए हैं। Cursor Pro को selectable provider के रूप में पंजीकृत न करें और custom connector UIs में Cursor-specific OAuth निर्देश प्रस्तुत न करें।

sandboxed या headless environments के लिए, manual OAuth fallback path दिखाएँ ताकि प्रशासक लौटाए गए authorization data को paste कर सकें और automatic browser redirect पर निर्भर हुए बिना account connection पूरा कर सकें।
