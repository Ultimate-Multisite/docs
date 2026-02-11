---
title: Sviluppo di Gateway Personalizzato
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Sviluppo di Gateway Personalizzati

Puoi creare gateway di pagamento personalizzati estendendo la classe `Base_Gateway`.

## Classe Gateway

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

## Registrare il Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metodi Chiave

| Metodo | Scopo |
|--------|-------|
| `process_single_payment()` | Gestire pagamenti una tantum |
| `process_signup()` | Configurare abbonamenti ricorrenti |
| `process_refund()` | Gestire richieste di rimborso |
| `get_payment_methods()` | Restituire metodi di pagamento salvati per un cliente |

## Suggerimenti

- Restituisci sempre `WP_Error` in caso di fallimento così che Ultimate Multisite possa gestire la visualizzazione dell'errore
- Imposta `$this->supports` per dichiarare quali tipi di pagamento gestisce il tuo gateway (`one-time`, `recurring`)
- Usa `wu_log_add()` per la registrazione specifica del gateway
