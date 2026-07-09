---
title: Fampivoarana vavahady namboarina manokana
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Fampivoarana Custom Gateway {#custom-gateway-development}

Afaka mamorona gateway fandoavam-bola manokana ianao amin'ny fanitarana ny class `Base_Gateway`.

## Class Gateway {#gateway-class}

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

## Soraty anarana ny Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Methods fototra {#key-methods}

| Method | Tanjona |
|--------|---------|
| `process_single_payment()` | Mikarakara fandoavam-bola indray mandeha |
| `process_signup()` | Mametraka subscriptions miverimberina |
| `process_refund()` | Mikarakara fangatahana famerenam-bola |
| `get_payment_methods()` | Mamerina ireo fomba fandoavam-bola voatahiry ho an'ny mpanjifa iray |

## Credentials fanavaozana ho an'ny memberships miverimberina {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 dia mamela ny integrations gateway hilaza raha manana credential fanavaozana azo ampiasaina indray ny membership miverimberina alohan'ny hitehirizana ny `auto_renew`. Ampiasao ny hook `wu_membership_has_renewal_credential` ary avereno:

- `true` rehefa manana subscription gateway, fifanarahana faktiora, vault token, na fomba fandoavam-bola mitovy azo ampiasaina indray ny membership.
- `false` rehefa fantatry ny gateway fa tsy eo na tsy azo ampiasaina ilay credential miverimberina.
- `null` raha hiala amin'izany ary hitazona ny fitondran-tena mahazatra ho tsy miova.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Rehefa mamerina `false` ny gateway iray, dia tehirizin'ny Ultimate Multisite ilay membership miaraka amin'ny auto-renewal voavono ary mitahiry marika credential tsy hita. Ampiasao ny `wu_membership_renewal_credential_missing` hampandre ny administrators, hanombohana lalan'ny fanomezan-dalana indray, na hanampiana naoty fanohanana:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Esory ny marika credential tsy hita ho ampahany amin'ny lalan'ny fanomezan-dalana indray nahomby an'ny gateway-nao rehefa voatahiry ny credential vaovao azo ampiasaina indray.

## Torohevitra {#tips}

- Avereno foana ny `WP_Error` rehefa misy tsy fahombiazana mba hahafahan'ny Ultimate Multisite mikarakara ny fanehoana hadisoana
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Ampiasao ny `wu_log_add()` ho an'ny logging manokana ho an'ny gateway

## Fahaizan'ny mpamatsy AI connector {#ai-connector-provider-capabilities}

Ny integrations manokana izay miantso asa tohanan'ny AI connector dia tokony hifanaraka amin'ny andiana mpamatsy OAuth tohanana nampidirina miaraka amin'ny AI Provider for Anthropic Max v1.3.0:

| Mpamatsy | Fanamarihana momba ny fahaiza-manao |
|---|---|
| **Anthropic Max** | Manohana ny workflow pool Account OAuth efa misy. Tazomy ny payloads fampiasana-fitaovana Anthropic, anisan'izany ny arrays fitaovana foana sy ny sonia fisainana mandeha sy miverina, rehefa manao proxy ny fangatahana connector. |
| **OpenAI ChatGPT/Codex** | Manohana ny workflow pool OAuth sy ny fitondran-tena fanohanana fitaovana feno ho an'ny asa tohanan'ny connector. Alefaso tsy misy fanesorana ny famaritana fitaovana sy ny valin'ny tool-call, anisan'izany ny metadata fitaovana manokana ho an'ny Codex. |
| **Google AI Pro** | Manohana ny workflow pool OAuth sy ny integration mpamatsy tohanan'ny SDK. Havaozy ny Accounts mpamatsy aorian'ny fahavitan'ny OAuth alohan'ny handefasana ny fangatahana. |

Nesorina ny integration Cursor Pro sy ny lalana setup. Aza manoratra anarana Cursor Pro ho mpamatsy azo fidina na mampiseho toromarika OAuth manokana ho an'ny Cursor ao amin'ny UIs connector manokana.

Ho an'ny tontolo sandboxed na headless, asehoy ny lalana fallback OAuth an-tanana mba hahafahan'ny administrators mametaka ny data fanomezan-dalana naverina ary mamita ny fifandraisana Account tsy miankina amin'ny redirect navigateur mandeha ho azy.
