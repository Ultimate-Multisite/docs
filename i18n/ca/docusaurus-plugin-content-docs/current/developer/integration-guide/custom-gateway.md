---
title: Desenvolupament de Gateway Personalitzat
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Desenvolupament de Passarelles Personalitzades

Podeu crear passarelles de pagament personalitzades estendre la classe `Base_Gateway`.

## Classe de la Passarella

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

## Registrar la Passarella

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mètodes Clau

| Mètode | Objecte |
|--------|---------|
| `process_single_payment()` | Processar pagaments de fitxes |
| `process_signup()` | Configurar subscripcions recurrents |
| `process_refund()` | Gestionar sol·licituds de reemborse |
| `get_payment_methods()` | De retornar els mètodes de pagament guardats per un client |

## Consells

- Tornar sempre `WP_Error` en cas d'error perquè Ultimate Multisite pugui gestionar l'exhibició d'errors.
- Estableix `$this->supports` per declarar quins tipus de pagament gestiona la vostra passarella (`one-time`, `recurring`).
- Utilitzar `wu_log_add()` per a la comptabilitat (logging) específica de la passarella.
