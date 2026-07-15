---
title: ಕಸ್ಟಮ್ ಗೇಟ್‌ವೇ ಅಭಿವೃದ್ಧಿ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ಕಸ್ಟಮ್ ಗೇಟ್‌ವೇ ಅಭಿವೃದ್ಧಿ

`Base_Gateway` ಕ್ಲಾಸ್ ಅನ್ನು ವಿಸ್ತರಿಸುವ ಮೂಲಕ ನೀವು ಕಸ್ಟಮ್ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ರಚಿಸಬಹುದು.

## ಗೇಟ್‌ವೇ ಕ್ಲಾಸ್ {#gateway-class}

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

## ಗೇಟ್‌ವೇ ನೋಂದಾಯಿಸಿ {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ಮುಖ್ಯ ವಿಧಾನಗಳು {#key-methods}

| ವಿಧಾನ | ಉದ್ದೇಶ |
|--------|---------|
| `process_single_payment()` | ಒಂದೇ ಸಲದ ಪಾವತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ |
| `process_signup()` | ಮರುಕಳಿಸುವ ಚಂದಾದಾರಿಕೆಗಳನ್ನು ಹೊಂದಿಸಿ |
| `process_refund()` | ಮರುಪಾವತಿ ವಿನಂತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ |
| `get_payment_methods()` | ಗ್ರಾಹಕರಿಗೆ ಉಳಿಸಿದ ಪಾವತಿ ವಿಧಾನಗಳನ್ನು ಹಿಂತಿರುಗಿಸಿ |

## ಮರುಕಳಿಸುವ ಸದಸ್ಯತ್ವಗಳಿಗಾಗಿ ನವೀಕರಣ ಗುರುತಿನ ವಿವರಗಳು {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0, `auto_renew` ಉಳಿಸುವ ಮೊದಲು ಮರುಕಳಿಸುವ ಸದಸ್ಯತ್ವಕ್ಕೆ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ನವೀಕರಣ ಗುರುತಿನ ವಿವರ ಇದೆಯೇ ಎಂದು ಗೇಟ್‌ವೇ ಸಂಯೋಜನೆಗಳು ವರದಿ ಮಾಡಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ. `wu_membership_has_renewal_credential` ಅನ್ನು hook ಮಾಡಿ ಮತ್ತು ಹಿಂತಿರುಗಿಸಿ:

- ಸದಸ್ಯತ್ವಕ್ಕೆ ಗೇಟ್‌ವೇ ಚಂದಾದಾರಿಕೆ, ಬಿಲ್ಲಿಂಗ್ ಒಪ್ಪಂದ, vault token, ಅಥವಾ ಸಮಾನ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಪಾವತಿ ವಿಧಾನ ಇದ್ದಾಗ `true`.
- ಮರುಕಳಿಸುವ ಗುರುತಿನ ವಿವರ ಕಾಣೆಯಾಗಿದೆ ಅಥವಾ ಬಳಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಗೇಟ್‌ವೇಗೆ ತಿಳಿದಿದ್ದಾಗ `false`.
- ಹೊರಗುಳಿಯಲು ಮತ್ತು ಡೀಫಾಲ್ಟ್ ವರ್ತನೆಯನ್ನು ಬದಲಾಯಿಸದೆ ಇರಿಸಲು `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ಗೇಟ್‌ವೇ `false` ಹಿಂತಿರುಗಿಸಿದಾಗ, Ultimate Multisite ಸದಸ್ಯತ್ವವನ್ನು ಸ್ವಯಂ-ನವೀಕರಣ ನಿಷ್ಕ್ರಿಯಗೊಂಡಂತೆ ಉಳಿಸುತ್ತದೆ ಮತ್ತು ಕಾಣೆಯಾದ ಗುರುತಿನ ವಿವರದ ಗುರುತನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ. ನಿರ್ವಾಹಕರಿಗೆ ತಿಳಿಸಲು, ಮರು-ಅಧಿಕೃತಗೊಳಿಸುವ ಹರಿವು ಪ್ರಾರಂಭಿಸಲು, ಅಥವಾ ಬೆಂಬಲ ಟಿಪ್ಪಣಿಗಳನ್ನು ಸೇರಿಸಲು `wu_membership_renewal_credential_missing` ಬಳಸಿ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

ಹೊಸ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಗುರುತಿನ ವಿವರ ಸಂಗ್ರಹವಾದ ನಂತರ, ನಿಮ್ಮ ಗೇಟ್‌ವೇಯ ಯಶಸ್ವಿ ಮರು-ಅಧಿಕೃತಗೊಳಿಸುವ ಹರಿವಿನ ಭಾಗವಾಗಿ ಕಾಣೆಯಾದ ಗುರುತಿನ ವಿವರದ ಗುರುತನ್ನು ತೆರವುಗೊಳಿಸಿ.

## ಸಲಹೆಗಳು {#tips}

- ವಿಫಲವಾದಾಗ ಯಾವಾಗಲೂ `WP_Error` ಹಿಂತಿರುಗಿಸಿ, ಇದರಿಂದ Ultimate Multisite ದೋಷ ಪ್ರದರ್ಶನವನ್ನು ನಿರ್ವಹಿಸಬಹುದು
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ಗೇಟ್‌ವೇ-ನಿರ್ದಿಷ್ಟ ಲಾಗಿಂಗ್‌ಗಾಗಿ `wu_log_add()` ಬಳಸಿ

## AI ಕನೆಕ್ಟರ್ ಪೂರೈಕೆದಾರರ ಸಾಮರ್ಥ್ಯಗಳು {#ai-connector-provider-capabilities}

AI ಕನೆಕ್ಟರ್-ಆಧಾರಿತ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಕರೆಮಾಡುವ ಕಸ್ಟಮ್ ಸಂಯೋಜನೆಗಳು, AI Provider for Anthropic Max v1.3.0 ಜೊತೆಗೆ ಪರಿಚಯಿಸಲಾದ ಬೆಂಬಲಿತ OAuth ಪೂರೈಕೆದಾರರ ಸಮೂಹಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳಬೇಕು:

| ಪೂರೈಕೆದಾರ | ಸಾಮರ್ಥ್ಯ ಟಿಪ್ಪಣಿಗಳು |
|---|---|
| **Anthropic Max** | ಈಗಿರುವ OAuth Account pool ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ಕನೆಕ್ಟರ್ ವಿನಂತಿಗಳನ್ನು proxy ಮಾಡುವಾಗ ಖಾಲಿ tool arrays ಮತ್ತು round-trip thinking signatures ಸೇರಿ Anthropic tool-use payloads ಅನ್ನು ಉಳಿಸಿ. |
| **OpenAI ChatGPT/Codex** | OAuth pool ಕಾರ್ಯಪ್ರವಾಹ ಮತ್ತು ಕನೆಕ್ಟರ್-ಬೆಂಬಲಿತ ಕಾರ್ಯಾಚರಣೆಗಳಿಗಾಗಿ ಸಂಪೂರ್ಣ tool-support ವರ್ತನೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. Codex-ನಿರ್ದಿಷ್ಟ tool metadata ಅನ್ನು ತೆಗೆದುಹಾಕದೆ tool definitions ಮತ್ತು tool-call results ಅನ್ನು ಮುಂದಕ್ಕೆ ಕಳುಹಿಸಿ. |
| **Google AI Pro** | OAuth pool ಕಾರ್ಯಪ್ರವಾಹ ಮತ್ತು SDK-ಆಧಾರಿತ ಪೂರೈಕೆದಾರ ಸಂಯೋಜನೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ವಿನಂತಿಗಳನ್ನು ರೌಟ್ ಮಾಡುವ ಮೊದಲು OAuth ಪೂರ್ಣಗೊಂಡ ನಂತರ ಪೂರೈಕೆದಾರ Account‌ಗಳನ್ನು refresh ಮಾಡಿ. |

Cursor Pro ಸಂಯೋಜನೆ ಮತ್ತು ಸೆಟಪ್ ಮಾರ್ಗಗಳನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ. Cursor Pro ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದಾದ ಪೂರೈಕೆದಾರವಾಗಿ ನೋಂದಾಯಿಸಬೇಡಿ ಅಥವಾ ಕಸ್ಟಮ್ ಕನೆಕ್ಟರ್ UI‌ಗಳಲ್ಲಿ Cursor-ನಿರ್ದಿಷ್ಟ OAuth ಸೂಚನೆಗಳನ್ನು ತೋರಿಸಬೇಡಿ.

ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ headless ಪರಿಸರಗಳಿಗಾಗಿ, ಕೈಯಾರೆ OAuth fallback ಮಾರ್ಗವನ್ನು ಒದಗಿಸಿ. ಇದರಿಂದ ನಿರ್ವಾಹಕರು ಹಿಂತಿರುಗಿದ authorization data ಅಂಟಿಸಿ, ಸ್ವಯಂಚಾಲಿತ browser redirect ಮೇಲೆ ಅವಲಂಬಿಸದೆ Account ಸಂಪರ್ಕವನ್ನು ಪೂರ್ಣಗೊಳಿಸಬಹುದು.
