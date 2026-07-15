---
title: Disvolvado de laŭmenda pagpordego
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Propra pagopordega disvolvado

Vi povas krei proprajn pagopordegojn per etendo de la klaso `Base_Gateway`.

## Pagopordega klaso {#gateway-class}

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

## Registri la pagopordegon {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ĉefaj metodoj {#key-methods}

| Metodo | Celo |
|--------|---------|
| `process_single_payment()` | Pritrakti unufojajn pagojn |
| `process_signup()` | Agordi ripetiĝantajn abonojn |
| `process_refund()` | Pritrakti repagajn petojn |
| `get_payment_methods()` | Redoni konservitajn pagmetodojn por kliento |

## Renovigaj akreditaĵoj por ripetiĝantaj membrecoj {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 permesas al pagopordegaj integriĝoj raporti ĉu ripetiĝanta membreco havas reuzeblan renovigan akreditaĵon antaŭ ol `auto_renew` estas konservita. Hoku `wu_membership_has_renewal_credential` kaj redonu:

- `true` kiam la membreco havas pagopordegan abonon, fakturan interkonsenton, trezoran token, aŭ ekvivalentan reuzeblan pagmetodon.
- `false` kiam la pagopordego scias ke la ripetiĝanta akreditaĵo mankas aŭ estas neuzebla.
- `null` por rezigni kaj lasi la defaŭltan konduton senŝanĝa.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kiam pagopordego redonas `false`, Ultimate Multisite konservas la membrecon kun aŭtomata renovigo malŝaltita kaj konservas markilon pri mankanta akreditaĵo. Uzu `wu_membership_renewal_credential_missing` por sciigi administrantojn, komenci re-rajtigan fluon, aŭ aldoni subtenajn notojn:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Forigu la markilon pri mankanta akreditaĵo kiel parton de la sukcesa re-rajtiga fluo de via pagopordego post kiam nova reuzebla akreditaĵo estas konservita.

## Konsiloj {#tips}

- Ĉiam redonu `WP_Error` ĉe malsukceso por ke Ultimate Multisite povu pritrakti erarmontradon
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Uzu `wu_log_add()` por pagopordeg-specifa protokolado

## Kapabloj de AI-konektila provizanto {#ai-connector-provider-capabilities}

Propraj integriĝoj kiuj vokas operaciojn subtenatajn de AI-konektiloj devas kongrui kun la subtenata OAuth-provizantaro enkondukita kun AI Provider for Anthropic Max v1.3.0:

| Provizanto | Kapablaj notoj |
|---|---|
| **Anthropic Max** | Subtenas la ekzistantan laborfluon de OAuth-konta grupo. Konservu Anthropic-iluzajn ŝargojn, inkluzive de malplenaj ilaroj kaj tien-reenaj pensaj subskriboj, kiam vi prokurilas konektilajn petojn. |
| **OpenAI ChatGPT/Codex** | Subtenas la laborfluon de OAuth-grupo kaj plenan il-subtenan konduton por operacioj subtenataj de konektiloj. Transdonu ilajn difinojn kaj rezultojn de ilvokoj sen forigi Codex-specifajn ilajn metadatumojn. |
| **Google AI Pro** | Subtenas la laborfluon de OAuth-grupo kaj SDK-subtenatan provizantan integriĝon. Refreŝigu provizantajn kontojn post OAuth-kompletigo antaŭ ol enkursigi petojn. |

Cursor Pro-integriĝo kaj agordaj vojoj estis forigitaj. Ne registru Cursor Pro kiel elekteblan provizanton nek prezentu Cursor-specifajn OAuth-instrukciojn en propraj konektilaj UI-oj.

Por sablokejaj aŭ senkapaj medioj, elmontru la manan OAuth-rezervan vojon por ke administrantoj povu alglui la resenditajn rajtigajn datumojn kaj kompletigi kontan konekton sen dependi de aŭtomata retumila alidirekto.
