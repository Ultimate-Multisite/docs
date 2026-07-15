---
title: Utvikling av tilpasset betalingsgateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Utvikling av tilpasset gateway

Du kan opprette tilpassede betalingsgateways ved å utvide klassen `Base_Gateway`.

## Gateway-klasse {#gateway-class}

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

## Registrer gatewayen {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Nøkkelmetoder {#key-methods}

| Metode | Formål |
|--------|---------|
| `process_single_payment()` | Håndter engangsbetalinger |
| `process_signup()` | Sett opp gjentakende abonnementer |
| `process_refund()` | Håndter refusjonsforespørsler |
| `get_payment_methods()` | Returner lagrede betalingsmetoder for en kunde |

## Fornyelseslegitimasjon for gjentakende medlemskap {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 lar gateway-integrasjoner rapportere om et gjentakende medlemskap har en gjenbrukbar fornyelseslegitimasjon før `auto_renew` lagres. Hook `wu_membership_has_renewal_credential` og returner:

- `true` når medlemskapet har et gateway-abonnement, en faktureringsavtale, et vault token eller en tilsvarende gjenbrukbar betalingsmetode.
- `false` når gatewayen vet at den gjentakende legitimasjonen mangler eller er ubrukelig.
- `null` for å velge bort og la standardatferden være uendret.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Når en gateway returnerer `false`, lagrer Ultimate Multisite medlemskapet med automatisk fornyelse deaktivert og lagrer en markør for manglende legitimasjon. Bruk `wu_membership_renewal_credential_missing` for å varsle administratorer, starte en ny autoriseringsflyt eller legge til støttenotater:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Fjern markøren for manglende legitimasjon som en del av gatewayens vellykkede nye autoriseringsflyt etter at en ny gjenbrukbar legitimasjon er lagret.

## Tips {#tips}

- Returner alltid `WP_Error` ved feil slik at Ultimate Multisite kan håndtere feilvisning
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Bruk `wu_log_add()` for gateway-spesifikk logging

## Funksjoner for AI connector-leverandører {#ai-connector-provider-capabilities}

Tilpassede integrasjoner som kaller operasjoner støttet av AI connector, bør samsvare med det støttede settet av OAuth-leverandører introdusert med AI Provider for Anthropic Max v1.3.0:

| Leverandør | Merknader om funksjoner |
|---|---|
| **Anthropic Max** | Støtter den eksisterende arbeidsflyten for OAuth-kontopool. Bevar Anthropic tool-use payloads, inkludert tomme verktøymatriser og tur-retur thinking signatures, når connector-forespørsler videresendes via proxy. |
| **OpenAI ChatGPT/Codex** | Støtter arbeidsflyten for OAuth-pool og full verktøystøtteatferd for operasjoner som støttes av connector. Send verktøydefinisjoner og resultater fra verktøykall videre uten å fjerne Codex-spesifikke verktøymetadata. |
| **Google AI Pro** | Støtter arbeidsflyten for OAuth-pool og SDK-støttet leverandørintegrasjon. Oppdater leverandørkontoer etter fullført OAuth før forespørsler rutes. |

Cursor Pro-integrasjon og oppsettsveier er fjernet. Ikke registrer Cursor Pro som en valgbar leverandør eller presenter Cursor-spesifikke OAuth-instruksjoner i tilpassede connector-UI-er.

For sandkasse- eller headless-miljøer, eksponer den manuelle OAuth-reserveløsningen slik at administratorer kan lime inn de returnerte autorisasjonsdataene og fullføre kontotilkoblingen uten å være avhengige av en automatisk nettleseromdirigering.
