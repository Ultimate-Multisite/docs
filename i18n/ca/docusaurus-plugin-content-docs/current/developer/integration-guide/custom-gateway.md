---
title: Desenvolupament de passarel·la personalitzada
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Desenvolupament de Custom Gateway

Pots crear passarel·les de pagament personalitzades ampliant la classe `Base_Gateway`.

## Classe de Gateway

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

## Registra el Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mètodes clau

| Mètode | Propòsit |
|--------|---------|
| `process_single_payment()` | Gestiona pagaments únics |
| `process_signup()` | Configura subscripcions recurrents |
| `process_refund()` | Gestiona sol·licituds de reembossament |
| `get_payment_methods()` | Retorna els mètodes de pagament desats per a un client |

## Credencials de renovació per a membresies recurrents

Ultimate Multisite v2.13.0 permet que les integracions de gateway informin si una membresia recurrent té una credencial de renovació reutilitzable abans que `auto_renew` es persisteixi. Enganxa’t a `wu_membership_has_renewal_credential` i retorna:

- `true` quan la membresia té una subscripció de gateway, un acord de facturació, un token de caixa forta o un mètode de pagament reutilitzable equivalent.
- `false` quan el gateway sap que la credencial recurrent falta o no es pot utilitzar.
- `null` per excloure-se’n i mantenir el comportament predeterminat sense canvis.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Quan un gateway retorna `false`, Ultimate Multisite desa la membresia amb la renovació automàtica desactivada i emmagatzema un marcador de credencial absent. Fes servir `wu_membership_renewal_credential_missing` per notificar els administradors, iniciar un flux de reautorització o afegir notes de suport:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Esborra el marcador de credencial absent com a part del flux de reautorització correcte del teu gateway després que s’hagi emmagatzemat una nova credencial reutilitzable.

## Consells

- Retorna sempre `WP_Error` en cas d’error perquè Ultimate Multisite pugui gestionar la visualització de l’error
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Fes servir `wu_log_add()` per al registre específic del gateway

## Capacitats dels proveïdors del connector d’AI

Les integracions personalitzades que criden operacions basades en el connector d’AI s’han d’alinear amb el conjunt de proveïdors OAuth admesos introduït amb AI Provider for Anthropic Max v1.3.0:

| Proveïdor | Notes de capacitat |
|---|---|
| **Anthropic Max** | Admet el flux de treball del conjunt d’Account OAuth existent. Conserva les càrregues útils d’ús d’eines d’Anthropic, inclosos els arrays d’eines buits i les signatures de raonament d’anada i tornada, quan facis de proxy per a les sol·licituds del connector. |
| **OpenAI ChatGPT/Codex** | Admet el flux de treball del conjunt OAuth i el comportament complet de suport d’eines per a les operacions compatibles amb el connector. Passa les definicions d’eines i els resultats de crides d’eines sense eliminar les metadades d’eines específiques de Codex. |
| **Google AI Pro** | Admet el flux de treball del conjunt OAuth i la integració de proveïdor basada en SDK. Actualitza els Accounts del proveïdor després de completar OAuth abans d’encaminar les sol·licituds. |

La integració de Cursor Pro i les vies de configuració s’han eliminat. No registris Cursor Pro com a proveïdor seleccionable ni presentis instruccions OAuth específiques de Cursor a les UI de connectors personalitzats.

Per a entorns aïllats o sense interfície gràfica, exposa la via alternativa manual d’OAuth perquè els administradors puguin enganxar les dades d’autorització retornades i completar la connexió de l’Account sense dependre d’una redirecció automàtica del navegador.
