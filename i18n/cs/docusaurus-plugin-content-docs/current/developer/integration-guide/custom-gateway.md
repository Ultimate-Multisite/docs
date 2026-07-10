---
title: Vývoj vlastní platební brány
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Vývoj vlastní platební brány {#custom-gateway-development}

Vlastní platební brány můžete vytvářet rozšířením třídy `Base_Gateway`.

## Třída brány {#gateway-class}

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

## Registrace brány {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Klíčové metody {#key-methods}

| Metoda | Účel |
|--------|---------|
| `process_single_payment()` | Zpracovat jednorázové platby |
| `process_signup()` | Nastavit opakovaná předplatná |
| `process_refund()` | Zpracovat žádosti o vrácení peněz |
| `get_payment_methods()` | Vrátit uložené platební metody pro zákazníka |

## Přihlašovací údaje pro obnovení u opakovaných členství {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 umožňuje integracím platebních bran nahlásit, zda má opakované členství znovupoužitelný přihlašovací údaj pro obnovení, ještě před uložením `auto_renew`. Použijte hook `wu_membership_has_renewal_credential` a vraťte:

- `true`, když má členství předplatné v platební bráně, fakturační dohodu, vault token nebo ekvivalentní znovupoužitelnou platební metodu.
- `false`, když platební brána ví, že opakovaný přihlašovací údaj chybí nebo je nepoužitelný.
- `null`, pokud se chcete odhlásit a ponechat výchozí chování beze změny.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Když platební brána vrátí `false`, Ultimate Multisite uloží členství s vypnutým automatickým obnovením a uloží značku chybějícího přihlašovacího údaje. Použijte `wu_membership_renewal_credential_missing` k upozornění administrátorů, spuštění toku opětovné autorizace nebo přidání poznámek podpory:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Po uložení nového znovupoužitelného přihlašovacího údaje vymažte značku chybějícího přihlašovacího údaje jako součást úspěšného toku opětovné autorizace vaší platební brány.

## Tipy {#tips}

- Při selhání vždy vraťte `WP_Error`, aby Ultimate Multisite mohl zpracovat zobrazení chyby
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Používejte `wu_log_add()` pro logování specifické pro platební bránu

## Schopnosti poskytovatelů AI connectoru {#ai-connector-provider-capabilities}

Vlastní integrace, které volají operace založené na AI connectoru, by měly být v souladu s podporovanou sadou poskytovatelů OAuth zavedenou s AI Provider for Anthropic Max v1.3.0:

| Poskytovatel | Poznámky ke schopnostem |
|---|---|
| **Anthropic Max** | Podporuje stávající pracovní postup fondu OAuth účtů. Při proxyování požadavků connectoru zachovejte payloady Anthropic pro používání nástrojů, včetně prázdných polí nástrojů a obousměrných podpisů myšlení. |
| **OpenAI ChatGPT/Codex** | Podporuje pracovní postup fondu OAuth a plné chování podpory nástrojů pro operace podporované connectorem. Předávejte definice nástrojů a výsledky volání nástrojů dál bez odstraňování metadat nástrojů specifických pro Codex. |
| **Google AI Pro** | Podporuje pracovní postup fondu OAuth a integraci poskytovatele založenou na SDK. Po dokončení OAuth obnovte účty poskytovatele před směrováním požadavků. |

Integrace a postupy nastavení Cursor Pro byly odstraněny. Neregistrujte Cursor Pro jako volitelného poskytovatele ani v uživatelských rozhraních vlastních connectorů nezobrazujte OAuth pokyny specifické pro Cursor.

Pro sandboxovaná nebo headless prostředí zpřístupněte ruční záložní cestu OAuth, aby administrátoři mohli vložit vrácená autorizační data a dokončit připojení účtu bez spoléhání na automatické přesměrování prohlížeče.
