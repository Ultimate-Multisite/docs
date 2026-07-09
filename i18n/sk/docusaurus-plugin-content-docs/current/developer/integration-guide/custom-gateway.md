---
title: Vývoj vlastnej brány
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Vývoj vlastnej platobnej brány

Vlastné platobné brány môžete vytvárať rozšírením triedy `Base_Gateway`.

## Trieda platobnej brány

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

## Registrácia platobnej brány

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Kľúčové metódy

| Metóda | Účel |
|--------|---------|
| `process_single_payment()` | Spracovať jednorazové platby |
| `process_signup()` | Nastaviť opakované predplatné |
| `process_refund()` | Spracovať žiadosti o refundáciu |
| `get_payment_methods()` | Vrátiť uložené platobné metódy pre zákazníka |

## Obnovovacie prihlasovacie údaje pre opakované členstvá

Ultimate Multisite v2.13.0 umožňuje integráciám platobných brán hlásiť, či má opakované členstvo opakovane použiteľný obnovovací prihlasovací údaj pred uložením `auto_renew`. Pripojte sa na `wu_membership_has_renewal_credential` a vráťte:

- `true`, keď má členstvo predplatné platobnej brány, fakturačnú dohodu, vault token alebo ekvivalentnú opakovane použiteľnú platobnú metódu.
- `false`, keď platobná brána vie, že opakovaný prihlasovací údaj chýba alebo je nepoužiteľný.
- `null`, ak sa chcete odhlásiť a ponechať predvolené správanie nezmenené.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Keď platobná brána vráti `false`, Ultimate Multisite uloží členstvo s vypnutým automatickým obnovovaním a uloží značku chýbajúceho prihlasovacieho údaja. Použite `wu_membership_renewal_credential_missing` na upozornenie administrátorov, spustenie toku opätovnej autorizácie alebo pridanie poznámok podpory:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Vymažte značku chýbajúceho prihlasovacieho údaja ako súčasť úspešného toku opätovnej autorizácie vašej platobnej brány po uložení nového opakovane použiteľného prihlasovacieho údaja.

## Tipy

- Pri zlyhaní vždy vráťte `WP_Error`, aby Ultimate Multisite mohol spracovať zobrazenie chyby
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Použite `wu_log_add()` na zaznamenávanie špecifické pre platobnú bránu

## Schopnosti poskytovateľov AI connectora

Vlastné integrácie, ktoré volajú operácie podporované AI connectorom, by mali byť v súlade s podporovanou sadou poskytovateľov OAuth zavedenou s AI Provider for Anthropic Max v1.3.0:

| Poskytovateľ | Poznámky k schopnostiam |
|---|---|
| **Anthropic Max** | Podporuje existujúci pracovný postup fondu účtov OAuth. Pri proxyovaní požiadaviek connectora zachovajte payloady používania nástrojov Anthropic vrátane prázdnych polí nástrojov a round-trip thinking podpisov. |
| **OpenAI ChatGPT/Codex** | Podporuje pracovný postup fondu OAuth a plné správanie podpory nástrojov pre operácie podporované connectorom. Odovzdávajte definície nástrojov a výsledky volaní nástrojov bez odstránenia metadát nástrojov špecifických pre Codex. |
| **Google AI Pro** | Podporuje pracovný postup fondu OAuth a integráciu poskytovateľa podporovanú SDK. Po dokončení OAuth obnovte účty poskytovateľa pred smerovaním požiadaviek. |

Integrácia Cursor Pro a cesty nastavenia boli odstránené. Neregistrujte Cursor Pro ako voliteľného poskytovateľa ani nezobrazujte pokyny OAuth špecifické pre Cursor vo vlastných používateľských rozhraniach connectora.

Pre sandboxované alebo headless prostredia sprístupnite manuálnu záložnú cestu OAuth, aby administrátori mohli vložiť vrátené autorizačné údaje a dokončiť pripojenie účtu bez spoliehania sa na automatické presmerovanie prehliadača.
