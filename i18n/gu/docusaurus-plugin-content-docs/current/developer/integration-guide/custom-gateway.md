---
title: કસ્ટમ ગેટવે ડેવલપમેન્ટ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# કસ્ટમ Gateway વિકાસ {#custom-gateway-development}

તમે `Base_Gateway` class ને વિસ્તારીને કસ્ટમ ચુકવણી gateways બનાવી શકો છો.

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

## Gateway નોંધણી કરો {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## મુખ્ય પદ્ધતિઓ {#key-methods}

| પદ્ધતિ | હેતુ |
|--------|---------|
| `process_single_payment()` | એક-વખતની ચુકવણીઓ સંભાળો |
| `process_signup()` | પુનરાવર્તિત subscriptions સેટ કરો |
| `process_refund()` | રિફંડ વિનંતીઓ સંભાળો |
| `get_payment_methods()` | ગ્રાહક માટે સાચવેલી ચુકવણી પદ્ધતિઓ પરત કરો |

## પુનરાવર્તિત memberships માટે નવીકરણ credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway એકીકરણોને `auto_renew` સચવાય તે પહેલાં પુનરાવર્તિત membership પાસે ફરીથી વાપરી શકાય તેવું નવીકરણ credential છે કે નહીં તેની જાણ કરવાની સુવિધા આપે છે. `wu_membership_has_renewal_credential` hook કરો અને પરત કરો:

- જ્યારે membership પાસે gateway subscription, બિલિંગ કરાર, વૉલ્ટ token, અથવા સમકક્ષ ફરીથી વાપરી શકાય તેવી ચુકવણી પદ્ધતિ હોય ત્યારે `true`.
- જ્યારે gateway જાણે છે કે પુનરાવર્તિત credential ગાયબ છે અથવા ઉપયોગલાયક નથી ત્યારે `false`.
- opt out કરવા અને default વર્તન અપરિવર્તિત રાખવા માટે `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

જ્યારે gateway `false` પરત કરે છે, ત્યારે Ultimate Multisite auto-renewal અક્ષમ કરીને membership સાચવે છે અને ગાયબ-credential marker સંગ્રહે છે. સંચાલકોને સૂચિત કરવા, ફરી-અધિકૃતતા પ્રવાહ શરૂ કરવા, અથવા સહાય નોંધો ઉમેરવા માટે `wu_membership_renewal_credential_missing` નો ઉપયોગ કરો:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

નવું ફરીથી વાપરી શકાય એવું credential સંગ્રહાયા પછી તમારા gateway ના સફળ ફરી-અધિકૃતતા પ્રવાહના ભાગ રૂપે ગાયબ-credential marker સાફ કરો.

## સૂચનો {#tips}

- નિષ્ફળતા પર હંમેશા `WP_Error` પરત કરો જેથી Ultimate Multisite ભૂલ પ્રદર્શન સંભાળી શકે
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-વિશિષ્ટ logging માટે `wu_log_add()` નો ઉપયોગ કરો

## AI connector provider ક્ષમતાઓ {#ai-connector-provider-capabilities}

AI connector-backed operations કૉલ કરતા કસ્ટમ એકીકરણોએ AI Provider for Anthropic Max v1.3.0 સાથે રજૂ કરાયેલા સપોર્ટેડ OAuth provider સેટ સાથે સુસંગત રહેવું જોઈએ:

| Provider | ક્ષમતા નોંધો |
|---|---|
| **Anthropic Max** | હાલના OAuth Account pool workflow ને સપોર્ટ કરે છે. connector વિનંતીઓને proxy કરતી વખતે ખાલી tool arrays અને round-trip thinking signatures સહિત Anthropic tool-use payloads જાળવો. |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow અને connector-supported operations માટે સંપૂર્ણ tool-support વર્તનને સપોર્ટ કરે છે. Codex-વિશિષ્ટ tool metadata દૂર કર્યા વિના tool definitions અને tool-call results પસાર કરો. |
| **Google AI Pro** | OAuth pool workflow અને SDK-backed provider integration ને સપોર્ટ કરે છે. વિનંતીઓ route કરતા પહેલાં OAuth પૂર્ણ થયા પછી provider accounts refresh કરો. |

Cursor Pro એકીકરણ અને સેટઅપ pathways દૂર કરવામાં આવ્યા છે. Cursor Pro ને પસંદ કરી શકાય તેવા provider તરીકે નોંધણી ન કરો અથવા કસ્ટમ connector UIs માં Cursor-વિશિષ્ટ OAuth સૂચનાઓ રજૂ ન કરો.

sandboxed અથવા headless environments માટે, manual OAuth fallback path બહાર પાડો જેથી સંચાલકો પરત મળેલા authorization data પેસ્ટ કરી શકે અને automatic browser redirect પર નિર્ભર રહ્યા વિના Account connection પૂર્ણ કરી શકે.
