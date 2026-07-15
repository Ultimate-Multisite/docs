---
title: Розробка індивідуального шлюзу
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Розробка користувацького шлюзу

Ви можете створювати користувацькі платіжні шлюзи, розширюючи клас `Base_Gateway`.

## Клас шлюзу {#gateway-class}

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

## Зареєструвати шлюз {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ключові методи {#key-methods}

| Метод | Призначення |
|--------|---------|
| `process_single_payment()` | Обробляти одноразові платежі |
| `process_signup()` | Налаштовувати повторювані підписки |
| `process_refund()` | Обробляти запити на повернення коштів |
| `get_payment_methods()` | Повернути збережені платіжні методи для клієнта |

## Облікові дані поновлення для повторюваних членств {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 дає інтеграціям шлюзів змогу повідомляти, чи має повторюване членство придатні для повторного використання облікові дані поновлення до того, як `auto_renew` буде збережено. Підключіть `wu_membership_has_renewal_credential` і поверніть:

- `true`, коли членство має підписку шлюзу, угоду про виставлення рахунків, токен сховища або еквівалентний придатний для повторного використання платіжний метод.
- `false`, коли шлюз знає, що повторювані облікові дані відсутні або непридатні до використання.
- `null`, щоб відмовитися від участі та залишити стандартну поведінку без змін.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Коли шлюз повертає `false`, Ultimate Multisite зберігає членство з вимкненим автоматичним поновленням і зберігає позначку про відсутні облікові дані. Використовуйте `wu_membership_renewal_credential_missing`, щоб сповіщати адміністраторів, запускати процес повторної авторизації або додавати нотатки підтримки:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Очистьте позначку про відсутні облікові дані як частину успішного процесу повторної авторизації вашого шлюзу після збереження нових придатних для повторного використання облікових даних.

## Поради {#tips}

- Завжди повертайте `WP_Error` у разі збою, щоб Ultimate Multisite міг обробити відображення помилки
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Використовуйте `wu_log_add()` для журналювання, специфічного для шлюзу

## Можливості постачальника AI connector {#ai-connector-provider-capabilities}

Користувацькі інтеграції, які викликають операції на основі AI connector, мають узгоджуватися з підтримуваним набором OAuth-постачальників, представленим в AI Provider for Anthropic Max v1.3.0:

| Постачальник | Примітки щодо можливостей |
|---|---|
| **Anthropic Max** | Підтримує наявний робочий процес пулу Account OAuth. Зберігайте корисні навантаження використання інструментів Anthropic, зокрема порожні масиви інструментів і наскрізні сигнатури мислення, під час проксіювання запитів connector. |
| **OpenAI ChatGPT/Codex** | Підтримує робочий процес пулу OAuth і повну поведінку підтримки інструментів для операцій, підтримуваних connector. Передавайте визначення інструментів і результати викликів інструментів без видалення специфічних для Codex метаданих інструментів. |
| **Google AI Pro** | Підтримує робочий процес пулу OAuth і інтеграцію постачальника на основі SDK. Оновлюйте облікові записи постачальника після завершення OAuth перед маршрутизацією запитів. |

Інтеграцію Cursor Pro і шляхи налаштування було видалено. Не реєструйте Cursor Pro як доступного для вибору постачальника й не показуйте специфічні для Cursor інструкції OAuth у користувацьких інтерфейсах connector.

Для ізольованих або безголових середовищ надайте ручний резервний шлях OAuth, щоб адміністратори могли вставити повернені дані авторизації та завершити підключення Account без покладання на автоматичне перенаправлення браузера.
