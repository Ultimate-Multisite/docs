---
title: Пабудова карысных шлюзов
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Пабудова карысных шлюзов

Вы можаце стварыць карысных шлюзы плацമെнта, пашыршы клас `Base_Gateway`.

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

## Рэгістрацыя шлюзу

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Асноўныя метады

| Метод | Мэта |
|--------|---------|
| `process_single_payment()` | Апрацоўка плацമെнтаў ад аднаго разу |
| `process_signup()` | Наладжаванне паўторных падпісак |
| `process_refund()` | Апрацоўка запытаў на вяртанне аплаты |
| `get_payment_methods()` | Павертанне захаваных спосабаў аплаты для кліента |

## Парады

- Заўсёды павярTacце `WP_Error` у выпадку збоя, каб Ultimate Multisite мог апрацаваць паказ збоя.
- Уставіце `$this->supports`, каб пазначыць, якія тыпы плацമെнтаў апрацоўвае ваш шлюз (`one-time`, `recurring`).
- Выкарыстоўвайце `wu_log_add()` для кантактавання, спецыфічнага для шлюзу.
