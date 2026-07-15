---
title: Benotzerdefinéiert Gateway-Entwécklung
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Benotzerdefinéiert Gateway-Entwécklung

Du kanns benotzerdefinéiert Bezuel-Gateways erstellen, andeems du d'Klass `Base_Gateway` erweiders.

## Gateway-Klass {#gateway-class}

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

## De Gateway registréieren {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Wichteg Methoden {#key-methods}

| Method | Zweck |
|--------|---------|
| `process_single_payment()` | Eemoleg Bezuelungen verschaffen |
| `process_signup()` | Widderhuelend Abonnementer ariichten |
| `process_refund()` | Remboursementsufroe verschaffen |
| `get_payment_methods()` | Gespäichert Bezuelmethoden fir e Client zeréckginn |

## Erneierungs-Zougangsdaten fir widderhuelend Memberschaften {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 léisst Gateway-Integratiounen mellen, ob eng widderhuelend Memberschaft eng nees benotzbar Erneierungs-Zougangsdat huet, ier `auto_renew` gespäichert gëtt. Hook `wu_membership_has_renewal_credential` a gëff zeréck:

- `true`, wann d'Memberschaft e Gateway-Abonnement, e Rechnungsaccord, e Vault-Token oder eng gläichwäerteg nees benotzbar Bezuelmethod huet.
- `false`, wann de Gateway weess, datt déi widderhuelend Zougangsdat feelt oder net benotzbar ass.
- `null`, fir auszestiechen an d'Standardverhalen onverännert ze loossen.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Wann e Gateway `false` zeréckgëtt, späichert Ultimate Multisite d'Memberschaft mat deaktivéierter automatescher Erneierung a späichert e Marker fir feelend Zougangsdaten. Benotz `wu_membership_renewal_credential_missing`, fir Administrateuren ze informéieren, en Neiautoriséierungs-Oflaf ze starten oder Support-Notizen derbäizesetzen:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Läsch de Marker fir feelend Zougangsdaten als Deel vum erfollegräichen Neiautoriséierungs-Oflaf vun dengem Gateway, nodeems eng nei nees benotzbar Zougangsdat gespäichert gouf.

## Tipps {#tips}

- Gëff bei engem Feeler ëmmer `WP_Error` zeréck, sou datt Ultimate Multisite d'Feeleruweisung handhabe kann
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Benotz `wu_log_add()` fir gateway-spezifescht Logging

## Fäegkeete vum AI-Connector-Provider {#ai-connector-provider-capabilities}

Benotzerdefinéiert Integratiounen, déi AI-Connector-gestäipt Operatiounen opruffen, sollten op de Set vun ënnerstëtzten OAuth-Provideren ofgestëmmt sinn, deen mat AI Provider for Anthropic Max v1.3.0 agefouert gouf:

| Provider | Notizen zu de Fäegkeeten |
|---|---|
| **Anthropic Max** | Ënnerstëtzt den existente Workflow fir den OAuth-Account-Pool. Erhal Anthropic-Tool-Use-Payloads, inklusiv eidel Tool-Arrays a Round-Trip-Thinking-Signaturen, wanns du Connector-Ufroe weiderleets. |
| **OpenAI ChatGPT/Codex** | Ënnerstëtzt den OAuth-Pool-Workflow an dat vollt Tool-Support-Verhale fir Connector-ënnerstëtzt Operatiounen. Gëff Tool-Definitiounen an Tool-Call-Resultater weider, ouni Codex-spezifesch Tool-Metadaten ze entfernen. |
| **Google AI Pro** | Ënnerstëtzt den OAuth-Pool-Workflow an SDK-gestäipt Provider-Integratioun. Aktualiséier Provider-Accounts nom Ofschloss vun OAuth, ier Ufroe gerout ginn. |

Cursor Pro-Integratioun an Ariichtungsweeër goufen ewechgeholl. Registréier Cursor Pro net als auswielbare Provider a weist keng Cursor-spezifesch OAuth-Instruktiounen a benotzerdefinéierte Connector-UIs.

Fir sandboxéiert oder headless Ëmfeld, stell de manuelle OAuth-Fallback-Wee bereet, sou datt Administrateuren déi zeréckginn Autoriséierungsdaten apeche kënnen an d'Account-Verbindung ofschléisse kënnen, ouni op eng automatesch Browser-Ëmleedung ugewisen ze sinn.
