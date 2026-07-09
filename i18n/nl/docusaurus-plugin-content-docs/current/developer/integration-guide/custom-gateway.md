---
title: Ontwikkeling van aangepaste gateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway-ontwikkeling

Je kunt aangepaste betalingsgateways maken door de klasse `Base_Gateway` uit te breiden.

## Gateway-klasse

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

## De Gateway registreren

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Belangrijke methoden

| Methode | Doel |
|--------|---------|
| `process_single_payment()` | Eenmalige betalingen afhandelen |
| `process_signup()` | Terugkerende abonnementen instellen |
| `process_refund()` | Terugbetalingsverzoeken afhandelen |
| `get_payment_methods()` | Opgeslagen betaalmethoden voor een klant retourneren |

## Vernieuwingsgegevens voor terugkerende memberships

Ultimate Multisite v2.13.0 laat gateway-integraties melden of een terugkerende membership een herbruikbaar vernieuwingsgegeven heeft voordat `auto_renew` wordt opgeslagen. Hook `wu_membership_has_renewal_credential` en retourneer:

- `true` wanneer de membership een gateway-abonnement, factureringsovereenkomst, vault-token of gelijkwaardige herbruikbare betaalmethode heeft.
- `false` wanneer de gateway weet dat het terugkerende gegeven ontbreekt of onbruikbaar is.
- `null` om je af te melden en het standaardgedrag ongewijzigd te laten.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Wanneer een gateway `false` retourneert, slaat Ultimate Multisite de membership op met automatische verlenging uitgeschakeld en bewaart het een marker voor ontbrekende gegevens. Gebruik `wu_membership_renewal_credential_missing` om beheerders te informeren, een herautorisatieproces te starten of ondersteuningsnotities toe te voegen:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Wis de marker voor ontbrekende gegevens als onderdeel van de succesvolle herautorisatiestroom van je gateway nadat een nieuw herbruikbaar gegeven is opgeslagen.

## Tips

- Retourneer bij mislukking altijd `WP_Error`, zodat Ultimate Multisite foutweergave kan afhandelen
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gebruik `wu_log_add()` voor gateway-specifieke logging

## Mogelijkheden van AI-connectorproviders

Aangepaste integraties die AI-connector-ondersteunde bewerkingen aanroepen, moeten aansluiten bij de ondersteunde OAuth-providerset die is geïntroduceerd met AI Provider for Anthropic Max v1.3.0:

| Provider | Opmerkingen over mogelijkheden |
|---|---|
| **Anthropic Max** | Ondersteunt de bestaande workflow voor OAuth-accountpools. Behoud Anthropic tool-use-payloads, inclusief lege tool-arrays en round-trip thinking signatures, bij het proxyen van connectorverzoeken. |
| **OpenAI ChatGPT/Codex** | Ondersteunt de OAuth-poolworkflow en volledig tool-support-gedrag voor door connectors ondersteunde bewerkingen. Geef tooldefinities en tool-call-resultaten door zonder Codex-specifieke toolmetadata te verwijderen. |
| **Google AI Pro** | Ondersteunt de OAuth-poolworkflow en SDK-ondersteunde providerintegratie. Vernieuw provideraccounts na OAuth-voltooiing voordat je verzoeken routeert. |

Cursor Pro-integratie en installatieroutes zijn verwijderd. Registreer Cursor Pro niet als selecteerbare provider en toon geen Cursor-specifieke OAuth-instructies in aangepaste connector-UIs.

Stel voor sandbox- of headless omgevingen het handmatige OAuth-terugvalpad beschikbaar, zodat beheerders de geretourneerde autorisatiegegevens kunnen plakken en de accountverbinding kunnen voltooien zonder afhankelijk te zijn van een automatische browseromleiding.
