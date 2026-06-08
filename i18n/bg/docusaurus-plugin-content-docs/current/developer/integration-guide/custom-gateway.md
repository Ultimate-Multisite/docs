---
title: Разработка на персонализирани портали
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Разработване на персонализирани платежни шлюзове

Можете да създадете персонализирани платежни шлюзове, като разширите (extend) класа `Base_Gateway`.

## Gateway Class

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

## Register the Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Key Methods

| Метод | Цел |
|--------|---------|
| `process_single_payment()` | Обработка на еднократни плащания |
| `process_signup()` | Настройване на повтарящи се абонаменти |
| `process_refund()` | Обработка на заявки за възстановяване на средства |
| `get_payment_methods()` | Връщане на запазени методи за плащане за клиент |

## Tips

- Винаги връщайте `WP_Error` при грешка, за да може Ultimate Multisite да обработи показването на грешките.
- Задайте `$this->supports`, за да декларирате какви типове плащания поддържа вашият шлюз (`one-time`, `recurring`).
- Използвайте `wu_log_add()` за логиране, специфично за шлюза.
