---
title: Розробка користувацького шлюзу
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Розробка власних шлюзів платежів

Ви можете створити власні шлюзи платежів, успадкувавши клас `Base_Gateway`.

## Клас шлюзу

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

## Реєстрація шлюзу

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Основні методи

| Метод | Призначення |
|--------|---------|
| `process_single_payment()` | Обробка одноразових платежів |
| `process_signup()` | Налаштування періодичних підписок |
| `process_refund()` | Обробка запитів на повернення коштів |
| `get_payment_methods()` | Повернення збережених способів оплати для клієнта |

## Поради

- Завжди повертайте `WP_Error` у разі помилки, щоб Ultimate Multisite могла коректно відобразити повідомлення про помилку.
- Встановіть `$this->supports`, щоб вказати, які типи платежів обробляє ваш шлюз (`one-time`, `recurring`).
- Використовуйте `wu_log_add()` для ведення логів, специфічних для шлюзу.
