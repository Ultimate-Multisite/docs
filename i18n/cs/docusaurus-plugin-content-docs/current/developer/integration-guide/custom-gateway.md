---
title: Vývoj vlastní brány
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Vývoj vlastní platební brány

Vlastní platební brány můžete vytvořit rozšířením třídy `Base_Gateway`.

## Gateway třída

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

## Registrace brány

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Klíčové metody

| Metoda | Účel |
|--------|---------|
| `process_single_payment()` | Spravuje jednorázové platby |
| `process_signup()` | Nastavuje opakující se předplatné |
| `process_refund()` | Spravuje žádosti o vracení peněz |
| `get_payment_methods()` | Vrátí uložené platební metody pro zákazníka |

## Tipy

- Vždy vraťte `WP_Error` při selhání, aby Ultimate Multisite mohlo zpracovat zobrazení chyb.
- Nastavte `$this->supports`, abyste deklarovali, jaké typy plateb vaše brána podporuje (`one-time`, `recurring`).
- Používejte `wu_log_add()` pro logování specifické pro bránu.
