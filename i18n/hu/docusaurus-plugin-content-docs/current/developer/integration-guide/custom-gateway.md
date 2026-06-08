---
title: Személyre szabott gateway fejlesztése
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Saját Gateway Fejlesztése

Saját fizetési gateway-eket létrehozhatsz a `Base_Gateway` osztály kiterjesztésével.

## Gateway Osztály

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

## A Gateway Regisztrálása

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Kulcsfontosságú Metódusok

| Metódus | Cél/Funkció |
|--------|---------|
| `process_single_payment()` | Kezel egy egyszeri fizetést |
| `process_signup()` | Beállítja a periódikus előfizetéseket |
| `process_refund()` | Kezel a visszatérítési kéréseket |
| `get_payment_methods()` | Visszaadja a felhasználó elmentett fizetési módjait |

## Tippek

- Mindig `WP_Error`-t kell visszaadnod a sikertelen esetekben, hogy az Ultimate Multisite kezelje a hiba megjelenítését.
- Állítsd be a `$this->supports` tulajdonságot, hogy megjelöld, milyen fizetési típusokat támogat a gateway-ed (`one-time`, `recurring`).
- Használj `wu_log_add()`-t a gateway-hez specifikus naplózáshoz (logging).
