---
title: कस्टम गेटवे विकास
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# सानुकूल गेटवे विकास

`Base_Gateway` class विस्तारून तुम्ही सानुकूल पेमेंट गेटवे तयार करू शकता.

## गेटवे class {#gateway-class}

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

## गेटवे नोंदणी करा {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## मुख्य पद्धती {#key-methods}

| पद्धत | उद्देश |
|--------|---------|
| `process_single_payment()` | एकदाच होणारी पेमेंट हाताळा |
| `process_signup()` | आवर्ती सदस्यता सेट करा |
| `process_refund()` | परतावा विनंत्या हाताळा |
| `get_payment_methods()` | ग्राहकासाठी जतन केलेल्या पेमेंट पद्धती परत करा |

## आवर्ती सदस्यत्वांसाठी नूतनीकरण credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 मुळे गेटवे एकत्रीकरणांना `auto_renew` कायमस्वरूपी जतन होण्यापूर्वी आवर्ती सदस्यत्वाकडे पुन्हा वापरता येणारे नूतनीकरण credential आहे की नाही हे कळवता येते. `wu_membership_has_renewal_credential` hook करा आणि परत करा:

- सदस्यत्वाकडे गेटवे subscription, बिलिंग करार, vault token किंवा समतुल्य पुन्हा वापरता येणारी पेमेंट पद्धत असल्यास `true`.
- गेटवेला आवर्ती credential गहाळ आहे किंवा वापरण्यायोग्य नाही हे माहीत असल्यास `false`.
- बाहेर राहण्यासाठी आणि default वर्तन अपरिवर्तित ठेवण्यासाठी `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

जेव्हा गेटवे `false` परत करतो, तेव्हा Ultimate Multisite auto-renewal अक्षम करून सदस्यत्व जतन करते आणि गहाळ-credential marker साठवते. प्रशासकांना सूचित करण्यासाठी, पुनः-अधिकृतता flow सुरू करण्यासाठी किंवा support notes जोडण्यासाठी `wu_membership_renewal_credential_missing` वापरा:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

नवीन पुन्हा वापरता येणारे credential साठवल्यानंतर तुमच्या गेटवेच्या यशस्वी पुनः-अधिकृतता flow चा भाग म्हणून गहाळ-credential marker साफ करा.

## टिप्स {#tips}

- अपयश आल्यास नेहमी `WP_Error` परत करा, जेणेकरून Ultimate Multisite त्रुटी प्रदर्शन हाताळू शकेल
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- गेटवे-विशिष्ट लॉगिंगसाठी `wu_log_add()` वापरा

## AI connector provider क्षमता {#ai-connector-provider-capabilities}

AI connector-आधारित operations कॉल करणाऱ्या सानुकूल एकत्रीकरणांनी AI Provider for Anthropic Max v1.3.0 सह सादर केलेल्या समर्थित OAuth provider संचाशी सुसंगत राहावे:

| Provider | क्षमतेच्या टिपा |
|---|---|
| **Anthropic Max** | विद्यमान OAuth Account pool workflow समर्थित करते. connector विनंत्या proxy करताना रिकाम्या tool arrays आणि round-trip thinking signatures सह Anthropic tool-use payloads जतन करा. |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow आणि connector-समर्थित operations साठी पूर्ण tool-support वर्तन समर्थित करते. Codex-विशिष्ट tool metadata काढून न टाकता tool definitions आणि tool-call results पुढे पाठवा. |
| **Google AI Pro** | OAuth pool workflow आणि SDK-आधारित provider integration समर्थित करते. विनंत्या route करण्यापूर्वी OAuth पूर्ण झाल्यानंतर provider accounts refresh करा. |

Cursor Pro integration आणि setup pathways काढून टाकले आहेत. Cursor Pro निवडण्यायोग्य provider म्हणून नोंदणी करू नका किंवा सानुकूल connector UIs मध्ये Cursor-विशिष्ट OAuth सूचना दाखवू नका.

sandboxed किंवा headless वातावरणांसाठी, manual OAuth fallback path उघडा, जेणेकरून प्रशासक परत आलेला authorization data पेस्ट करून automatic browser redirect वर अवलंबून न राहता account connection पूर्ण करू शकतील.
