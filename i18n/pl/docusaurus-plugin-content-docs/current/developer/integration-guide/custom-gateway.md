---
title: Tworzenie niestandardowej bramki
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Tworzenie niestandardowego Gateway

Możesz tworzyć niestandardowe bramki płatności, rozszerzając klasę `Base_Gateway`.

## Klasa Gateway {#gateway-class}

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

## Zarejestruj Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Kluczowe metody {#key-methods}

| Metoda | Cel |
|--------|---------|
| `process_single_payment()` | Obsługuje płatności jednorazowe |
| `process_signup()` | Konfiguruje cykliczne subskrypcje |
| `process_refund()` | Obsługuje żądania zwrotu |
| `get_payment_methods()` | Zwraca zapisane metody płatności dla klienta |

## Dane uwierzytelniające odnowienia dla cyklicznych członkostw {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 pozwala integracjom Gateway zgłaszać, czy cykliczne członkostwo ma wielokrotnego użytku dane uwierzytelniające odnowienia, zanim `auto_renew` zostanie utrwalone. Podepnij się pod `wu_membership_has_renewal_credential` i zwróć:

- `true`, gdy członkostwo ma subskrypcję Gateway, umowę rozliczeniową, token vault lub równoważną metodę płatności wielokrotnego użytku.
- `false`, gdy Gateway wie, że cykliczne dane uwierzytelniające są brakujące lub nieużyteczne.
- `null`, aby zrezygnować i pozostawić domyślne zachowanie bez zmian.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gdy Gateway zwraca `false`, Ultimate Multisite zapisuje członkostwo z wyłączonym automatycznym odnowieniem i przechowuje znacznik brakujących danych uwierzytelniających. Użyj `wu_membership_renewal_credential_missing`, aby powiadomić administratorów, rozpocząć proces ponownej autoryzacji lub dodać notatki pomocy technicznej:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Wyczyść znacznik brakujących danych uwierzytelniających jako część udanego procesu ponownej autoryzacji Gateway po zapisaniu nowych danych uwierzytelniających wielokrotnego użytku.

## Wskazówki {#tips}

- Zawsze zwracaj `WP_Error` w przypadku niepowodzenia, aby Ultimate Multisite mogło obsłużyć wyświetlanie błędu
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Używaj `wu_log_add()` do logowania specyficznego dla Gateway

## Możliwości dostawców konektora AI {#ai-connector-provider-capabilities}

Niestandardowe integracje, które wywołują operacje oparte na konektorze AI, powinny być zgodne z obsługiwanym zestawem dostawców OAuth wprowadzonym wraz z AI Provider for Anthropic Max v1.3.0:

| Dostawca | Uwagi dotyczące możliwości |
|---|---|
| **Anthropic Max** | Obsługuje istniejący przepływ pracy puli Account OAuth. Zachowuj payloady użycia narzędzi Anthropic, w tym puste tablice narzędzi i podpisy myślenia w obie strony, podczas pośredniczenia w żądaniach konektora. |
| **OpenAI ChatGPT/Codex** | Obsługuje przepływ pracy puli OAuth oraz pełne zachowanie obsługi narzędzi dla operacji wspieranych przez konektor. Przekazuj definicje narzędzi i wyniki wywołań narzędzi bez usuwania metadanych narzędzi specyficznych dla Codex. |
| **Google AI Pro** | Obsługuje przepływ pracy puli OAuth oraz integrację dostawcy opartą na SDK. Odśwież konta dostawcy po zakończeniu OAuth przed kierowaniem żądań. |

Integracja Cursor Pro i ścieżki konfiguracji zostały usunięte. Nie rejestruj Cursor Pro jako dostawcy możliwego do wyboru ani nie prezentuj instrukcji OAuth specyficznych dla Cursor w niestandardowych interfejsach konektora.

W środowiskach piaskownicowych lub bezinterfejsowych udostępnij ręczną ścieżkę awaryjną OAuth, aby administratorzy mogli wkleić zwrócone dane autoryzacyjne i dokończyć połączenie konta bez polegania na automatycznym przekierowaniu przeglądarki.
