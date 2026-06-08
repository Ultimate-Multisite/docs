---
title: Tworzenie niestandardowej bramy
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Tworzenie niestandardowej bramki płatności

Możesz stworzyć niestandardowe bramki płatności, rozszerzając klasę `Base_Gateway`.

## Klasa bramki

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

## Rejestrowanie bramki

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Kluczowe metody

| Metoda | Cel |
|--------|---------|
| `process_single_payment()` | Obsługa płatności jednorazowych |
| `process_signup()` | Ustawianie subskrypcji cyklicznych |
| `process_refund()` | Obsługa żądań zwrotu środków |
| `get_payment_methods()` | Pobranie zapisanych metod płatności dla klienta |

## Wskazówki

- Zawsze zwracaj `WP_Error` w przypadku błędu, aby Ultimate Multisite mogło obsłużyć wyświetlanie komunikatu o błędzie.
- Ustaw `$this->supports`, aby określić, jakie typy płatności obsługuje Twoja bramka (`one-time`, `recurring`).
- Używaj `wu_log_add()` do logowania specyficznego dla bramki.
