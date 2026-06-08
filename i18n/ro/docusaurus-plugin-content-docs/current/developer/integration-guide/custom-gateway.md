---
title: Dezvoltare de Gateway Personalizat
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Dezvoltarea Gateway-urilor Personalizate

Poți crea gateway-uri de plată personalizate prin extinderea clasei `Base_Gateway`.

## Clasa Gateway

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

## Înregistrarea Gateway-ului

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metode Cheie

| Metodă | Scop |
|--------|---------|
| `process_single_payment()` | Gestionarea plăților unice |
| `process_signup()` | Configurarea abonamentelor recurente |
| `process_refund()` | Gestionarea cererilor de rambursare |
| `get_payment_methods()` | Returnarea metodei de plată salvate pentru un client |

## Sfaturi

- Returnează întotdeauna `WP_Error` în cazul unei erori, astfel încât Ultimate Multisite să poată gestiona afișarea mesajului de eroare.
- Setează `$this->supports` pentru a declara tipurile de plată pe care le gestionează gateway-ul tău (`one-time`, `recurring`).
- Folosește `wu_log_add()` pentru log-uri specifice gateway-ului.
