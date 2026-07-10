---
title: Udvikling af tilpasset gateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Udvikling af brugerdefineret gateway {#custom-gateway-development}

Du kan oprette brugerdefinerede betalingsgateways ved at udvide klassen `Base_Gateway`.

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

## Nøglemetoder {#key-methods}

| Metode | Formål |
|--------|---------|
| `process_single_payment()` | Håndter engangsbetalinger |
| `process_signup()` | Opsæt tilbagevendende abonnementer |
| `process_refund()` | Håndter anmodninger om refundering |
| `get_payment_methods()` | Returner gemte betalingsmetoder for en kunde |

## Fornyelseslegitimationsoplysninger for tilbagevendende medlemskaber {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 lader gateway-integrationer rapportere, om et tilbagevendende medlemskab har en genanvendelig fornyelseslegitimationsoplysning, før `auto_renew` gemmes. Hook `wu_membership_has_renewal_credential` og returner:

- `true`, når medlemskabet har et gateway-abonnement, en faktureringsaftale, vault token eller tilsvarende genanvendelig betalingsmetode.
- `false`, når gatewayen ved, at den tilbagevendende legitimationsoplysning mangler eller ikke kan bruges.
- `null` for at fravælge og lade standardadfærden være uændret.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Når en gateway returnerer `false`, gemmer Ultimate Multisite medlemskabet med automatisk fornyelse deaktiveret og gemmer en markør for manglende legitimationsoplysning. Brug `wu_membership_renewal_credential_missing` til at underrette administratorer, starte et flow til gengodkendelse eller tilføje supportnoter:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Ryd markøren for manglende legitimationsoplysning som en del af din gateways vellykkede flow til gengodkendelse, efter at en ny genanvendelig legitimationsoplysning er gemt.

## Tips {#tips}

- Returner altid `WP_Error` ved fejl, så Ultimate Multisite kan håndtere fejlvisning
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Brug `wu_log_add()` til gateway-specifik logning

## AI connector-udbyderfunktioner {#ai-connector-provider-capabilities}

Brugerdefinerede integrationer, der kalder operationer understøttet af AI connector, bør være afstemt med det understøttede sæt af OAuth-udbydere, der blev introduceret med AI Provider for Anthropic Max v1.3.0:

| Udbyder | Funktionsnoter |
|---|---|
| **Anthropic Max** | Understøtter den eksisterende arbejdsgang for OAuth-konto-pulje. Bevar Anthropic tool-use payloads, herunder tomme tool arrays og round-trip thinking signatures, når connector-anmodninger proxyes. |
| **OpenAI ChatGPT/Codex** | Understøtter arbejdsgangen for OAuth-puljen og fuld tool-support-adfærd for connector-understøttede operationer. Send tool definitions og tool-call results videre uden at fjerne Codex-specifikke tool-metadata. |
| **Google AI Pro** | Understøtter arbejdsgangen for OAuth-puljen og SDK-understøttet udbyderintegration. Opdater udbyderkonti efter OAuth-gennemførelse, før anmodninger routes. |

Cursor Pro-integration og opsætningsveje er blevet fjernet. Registrer ikke Cursor Pro som en valgbar udbyder, og vis ikke Cursor-specifikke OAuth-instruktioner i brugerdefinerede connector-UIs.

For sandboxede eller headless miljøer skal du eksponere den manuelle OAuth-fallbacksti, så administratorer kan indsætte de returnerede autorisationsdata og fuldføre kontoforbindelsen uden at være afhængige af en automatisk browseromdirigering.
