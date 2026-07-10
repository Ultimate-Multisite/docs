---
title: Progressio Portae ad Mensuram
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Explicatio Portae Consuetudinariae {#custom-gateway-development}

Portas solutionis consuetudinarias creare potes extendendo classem `Base_Gateway`.

## Classis Portae {#gateway-class}

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

## Portam Inscribe {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Methodi Praecipui {#key-methods}

| Methodus | Propositum |
|--------|---------|
| `process_single_payment()` | Solutiones semel factas tractare |
| `process_signup()` | Subscriptiones recurrentes constituere |
| `process_refund()` | Petitiones restitutionis tractare |
| `get_payment_methods()` | Methodos solutionis servatos pro cliente reddere |

## Documenta renovationis pro sodaliciis recurrentibus {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 integrationibus portae permittit referre utrum sodalicium recurrens documentum renovationis iterum utibile habeat antequam `auto_renew` persistatur. Adiunge `wu_membership_has_renewal_credential` et redde:

- `true` cum sodalicium subscriptionem portae, pactum rationis solvendae, vault token, aut aequivalentem methodum solutionis iterum utibilem habet.
- `false` cum porta scit documentum recurrens deesse aut inutilizabile esse.
- `null` ut te subtrahas et mores praedefinitos immutatos serves.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Cum porta `false` reddit, Ultimate Multisite sodalicium cum renovatione automatica debilitata servat et signum documenti deficientis reponit. Utere `wu_membership_renewal_credential_missing` ut administratores certiores facias, cursum re-authorizationis incipias, aut notas auxilii addas:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Signum documenti deficientis dele ut partem felicis cursus re-authorizationis tuae portae postquam novum documentum iterum utibile repositum est.

## Consilia {#tips}

- Semper redde `WP_Error` in defectu, ut Ultimate Multisite ostensionem erroris tractare possit
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Utere `wu_log_add()` ad acta portae propria

## Facultates provisoris coniunctionis AI {#ai-connector-provider-capabilities}

Integrationes consuetudinariae quae operationes coniunctione AI suffultas vocant congruere debent cum copia provisorum OAuth sustentata, inducta cum AI Provider for Anthropic Max v1.3.0:

| Provisor | Notae facultatum |
|---|---|
| **Anthropic Max** | Sustinet cursum existentem communis copiae rationum OAuth. Serva onera utilia usus instrumentorum Anthropic, inclusis vacuis ordinibus instrumentorum et signaturis cogitationis eundi et redeundi, cum petitiones coniunctionis per procuratorem transmittis. |
| **OpenAI ChatGPT/Codex** | Sustinet cursum communis copiae OAuth et plenam rationem auxilii instrumentorum pro operationibus coniunctione sustentatis. Definitiones instrumentorum et eventus vocationum instrumentorum sine remotione metadatorum instrumentorum Codex propriorum transmitte. |
| **Google AI Pro** | Sustinet cursum communis copiae OAuth et integrationem provisoris SDK suffultam. Rationes provisoris post completionem OAuth renova antequam petitiones dirigas. |

Integratio Cursor Pro et viae institutionis remotae sunt. Noli Cursor Pro ut provisorem eligibilem inscribere neque instructiones OAuth Cursor proprias in consuetudinariis interfaces coniunctionis praebere.

Pro ambitibus conclusis aut sine capite, viam subsidiariam manualem OAuth expone, ut administratores data authorizationis reddita inserere et coniunctionem rationis perficere possint sine fiducia in automatica redirectione navigatoris.
