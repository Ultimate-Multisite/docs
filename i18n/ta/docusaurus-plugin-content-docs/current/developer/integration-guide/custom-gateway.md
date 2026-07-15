---
title: தனிப்பயன் நுழைவாயில் உருவாக்கம்
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# தனிப்பயன் Gateway உருவாக்கம்

`Base_Gateway` class-ஐ நீட்டித்து தனிப்பயன் கட்டண gateways உருவாக்கலாம்.

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

## Gateway-ஐ பதிவு செய்யுங்கள் {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## முக்கிய முறைகள் {#key-methods}

| Method | நோக்கம் |
|--------|---------|
| `process_single_payment()` | ஒருமுறை கட்டணங்களை கையாளும் |
| `process_signup()` | மீண்டும் மீண்டும் வரும் subscriptions-ஐ அமைக்கும் |
| `process_refund()` | refund கோரிக்கைகளை கையாளும் |
| `get_payment_methods()` | ஒரு customer-க்கான சேமிக்கப்பட்ட கட்டண முறைகளை திருப்பி வழங்கும் |

## மீண்டும் மீண்டும் வரும் memberships-க்கான renewal credentials {#renewal-credentials-for-recurring-memberships}

`auto_renew` சேமிக்கப்படுவதற்கு முன், மீண்டும் மீண்டும் வரும் membership-க்கு மறுபயன்படுத்தக்கூடிய renewal credential உள்ளதா என்பதை gateway integrations தெரிவிக்க Ultimate Multisite v2.13.0 அனுமதிக்கிறது. `wu_membership_has_renewal_credential`-ஐ hook செய்து இதை திருப்பி வழங்குங்கள்:

- membership-க்கு gateway subscription, billing agreement, vault token, அல்லது அதற்கு இணையான மறுபயன்படுத்தக்கூடிய கட்டண முறை இருந்தால் `true`.
- மீண்டும் மீண்டும் வரும் credential இல்லை அல்லது பயன்படுத்த முடியாது என்பதை gateway அறிந்திருந்தால் `false`.
- விலகி, இயல்புநிலை நடத்தை மாறாமல் இருக்க `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ஒரு gateway `false` திருப்பி வழங்கும் போது, Ultimate Multisite membership-ஐ auto-renewal முடக்கப்பட்ட நிலையில் சேமித்து, காணாமல் போன credential குறியீட்டை சேமிக்கும். நிர்வாகிகளுக்கு அறிவிக்க, re-authorization ஓட்டத்தைத் தொடங்க, அல்லது ஆதரவு குறிப்புகளைச் சேர்க்க `wu_membership_renewal_credential_missing`-ஐ பயன்படுத்துங்கள்:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

புதிய மறுபயன்படுத்தக்கூடிய credential சேமிக்கப்பட்ட பிறகு, உங்கள் gateway-இன் வெற்றிகரமான re-authorization ஓட்டத்தின் ஒரு பகுதியாக காணாமல் போன credential குறியீட்டை நீக்குங்கள்.

## குறிப்புகள் {#tips}

- தோல்வி ஏற்பட்டால் எப்போதும் `WP_Error`-ஐ திருப்பி வழங்குங்கள்; இதனால் Ultimate Multisite பிழை காட்சியை கையாள முடியும்
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-க்கு குறிப்பான logging-க்கு `wu_log_add()`-ஐ பயன்படுத்துங்கள்

## AI connector provider திறன்கள் {#ai-connector-provider-capabilities}

AI connector ஆதரவு கொண்ட செயல்பாடுகளை அழைக்கும் தனிப்பயன் integrations, AI Provider for Anthropic Max v1.3.0 உடன் அறிமுகமான ஆதரிக்கப்படும் OAuth provider தொகுப்புடன் ஒத்திருக்க வேண்டும்:

| Provider | திறன் குறிப்புகள் |
|---|---|
| **Anthropic Max** | உள்ள OAuth account pool workflow-ஐ ஆதரிக்கிறது. connector கோரிக்கைகளை proxy செய்யும் போது, காலியான tool arrays மற்றும் round-trip thinking signatures உட்பட Anthropic tool-use payloads-ஐ பாதுகாக்கவும். |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow மற்றும் connector ஆதரவு செயல்பாடுகளுக்கான முழு tool-support நடத்தையை ஆதரிக்கிறது. Codex-க்கு குறிப்பான tool metadata-வை நீக்காமல், tool definitions மற்றும் tool-call results-ஐ அனுப்பவும். |
| **Google AI Pro** | OAuth pool workflow மற்றும் SDK ஆதரவு provider integration-ஐ ஆதரிக்கிறது. கோரிக்கைகளை route செய்வதற்கு முன், OAuth நிறைவுக்குப் பிறகு provider accounts-ஐ புதுப்பிக்கவும். |

Cursor Pro integration மற்றும் அமைப்பு வழிகள் நீக்கப்பட்டுள்ளன. தேர்வு செய்யக்கூடிய provider ஆக Cursor Pro-வை பதிவு செய்ய வேண்டாம்; தனிப்பயன் connector UIs-இல் Cursor-க்கு குறிப்பான OAuth வழிமுறைகளை காட்ட வேண்டாம்.

sandbox செய்யப்பட்ட அல்லது headless சூழல்களுக்கு, manual OAuth fallback பாதையை வெளிப்படுத்துங்கள். இதனால் நிர்வாகிகள் திருப்பி கிடைத்த authorization data-வை ஒட்டி, தானியங்கி browser redirect-ஐ சாராமல் account connection-ஐ முடிக்க முடியும்.
