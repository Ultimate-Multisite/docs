---
title: Pasgemaakte poortontwikkeling
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway-ontwikkeling

Jy kan pasgemaakte betalingsgateways skep deur die `Base_Gateway`-klas uit te brei.

## Gateway-klas {#gateway-class}

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

## Registreer die Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Sleutelmetodes {#key-methods}

| Metode | Doel |
|--------|---------|
| `process_single_payment()` | Hanteer eenmalige betalings |
| `process_signup()` | Stel herhalende intekeninge op |
| `process_refund()` | Hanteer terugbetalingsversoeke |
| `get_payment_methods()` | Gee gestoorde betalingsmetodes vir ’n kliënt terug |

## Hernuwingsbewyse vir herhalende lidmaatskappe {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 laat gateway-integrasies rapporteer of ’n herhalende lidmaatskap ’n herbruikbare hernuwingsbewys het voordat `auto_renew` voortgesit word. Hook `wu_membership_has_renewal_credential` en gee terug:

- `true` wanneer die lidmaatskap ’n gateway-intekening, faktureringsooreenkoms, vault token, of ekwivalente herbruikbare betalingsmetode het.
- `false` wanneer die gateway weet die herhalende bewys ontbreek of onbruikbaar is.
- `null` om uit te teken en die verstekgedrag onveranderd te hou.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Wanneer ’n gateway `false` teruggee, stoor Ultimate Multisite die lidmaatskap met outomatiese hernuwing gedeaktiveer en stoor ’n ontbrekende-bewys-merker. Gebruik `wu_membership_renewal_credential_missing` om administrateurs in kennis te stel, ’n hermagtigingsvloei te begin, of ondersteuningsnotas by te voeg:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Verwyder die ontbrekende-bewys-merker as deel van jou gateway se suksesvolle hermagtigingsvloei nadat ’n nuwe herbruikbare bewys gestoor is.

## Wenke {#tips}

- Gee altyd `WP_Error` terug by mislukking sodat Ultimate Multisite foutvertoning kan hanteer
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gebruik `wu_log_add()` vir gateway-spesifieke logboekregistrasie

## AI-connector-verskaffervermoëns {#ai-connector-provider-capabilities}

Pasgemaakte integrasies wat AI-connector-gesteunde bewerkings aanroep, moet ooreenstem met die ondersteunde OAuth-verskafferstel wat met AI Provider for Anthropic Max v1.3.0 bekendgestel is:

| Verskaffer | Vermoënotas |
|---|---|
| **Anthropic Max** | Ondersteun die bestaande OAuth-rekeningpoel-werkvloei. Behou Anthropic tool-use-payloads, insluitend leë tool-skikkings en heen-en-weer thinking-handtekeninge, wanneer connector-versoeke geproxy word. |
| **OpenAI ChatGPT/Codex** | Ondersteun die OAuth-poel-werkvloei en volledige tool-ondersteuningsgedrag vir connector-gesteunde bewerkings. Gee tool-definisies en tool-call-resultate deur sonder om Codex-spesifieke tool-metadata te verwyder. |
| **Google AI Pro** | Ondersteun die OAuth-poel-werkvloei en SDK-gesteunde verskafferintegrasie. Verfris verskafferrekeninge ná OAuth-voltooiing voordat versoeke gerouteer word. |

Cursor Pro-integrasie en opstelroetes is verwyder. Moenie Cursor Pro as ’n kiesbare verskaffer registreer of Cursor-spesifieke OAuth-instruksies in pasgemaakte connector-UI’s aanbied nie.

Vir sandbox- of headless-omgewings, stel die handmatige OAuth-terugvalpad beskikbaar sodat administrateurs die teruggestuurde magtigingsdata kan plak en rekeningverbinding kan voltooi sonder om op ’n outomatiese blaaierherleiding staat te maak.
