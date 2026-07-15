---
title: Разработка пользовательского шлюза
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Разработка пользовательского шлюза

Вы можете создавать пользовательские платежные шлюзы, расширяя класс `Base_Gateway`.

## Класс шлюза {#gateway-class}

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

## Регистрация шлюза {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ключевые методы {#key-methods}

| Метод | Назначение |
|--------|---------|
| `process_single_payment()` | Обрабатывает разовые платежи |
| `process_signup()` | Настраивает регулярные подписки |
| `process_refund()` | Обрабатывает запросы на возврат средств |
| `get_payment_methods()` | Возвращает сохраненные способы оплаты для клиента |

## Учетные данные продления для регулярных memberships {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 позволяет интеграциям шлюзов сообщать, есть ли у регулярного membership повторно используемые учетные данные продления, до сохранения `auto_renew`. Подключите `wu_membership_has_renewal_credential` и верните:

- `true`, когда у membership есть подписка шлюза, соглашение о выставлении счетов, vault token или эквивалентный повторно используемый способ оплаты.
- `false`, когда шлюз знает, что регулярные учетные данные отсутствуют или непригодны для использования.
- `null`, чтобы отказаться от участия и оставить поведение по умолчанию без изменений.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Когда шлюз возвращает `false`, Ultimate Multisite сохраняет membership с отключенным автопродлением и сохраняет маркер отсутствующих учетных данных. Используйте `wu_membership_renewal_credential_missing`, чтобы уведомить администраторов, запустить процесс повторной авторизации или добавить заметки поддержки:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Очистите маркер отсутствующих учетных данных в рамках успешного процесса повторной авторизации вашего шлюза после сохранения новых повторно используемых учетных данных.

## Советы {#tips}

- Всегда возвращайте `WP_Error` при сбое, чтобы Ultimate Multisite мог обработать отображение ошибки
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Используйте `wu_log_add()` для ведения журналов, специфичных для шлюза

## Возможности провайдера AI connector {#ai-connector-provider-capabilities}

Пользовательские интеграции, которые вызывают операции на базе AI connector, должны соответствовать поддерживаемому набору OAuth-провайдеров, представленному в AI Provider for Anthropic Max v1.3.0:

| Провайдер | Примечания о возможностях |
|---|---|
| **Anthropic Max** | Поддерживает существующий рабочий процесс пула OAuth-аккаунтов. Сохраняйте payloads использования инструментов Anthropic, включая пустые массивы инструментов и сквозные thinking signatures, при проксировании запросов connector. |
| **OpenAI ChatGPT/Codex** | Поддерживает рабочий процесс OAuth-пула и полное поведение поддержки инструментов для операций, поддерживаемых connector. Передавайте определения инструментов и результаты вызовов инструментов без удаления метаданных инструментов, специфичных для Codex. |
| **Google AI Pro** | Поддерживает рабочий процесс OAuth-пула и интеграцию провайдера на базе SDK. Обновляйте аккаунты провайдера после завершения OAuth перед маршрутизацией запросов. |

Интеграция Cursor Pro и пути настройки были удалены. Не регистрируйте Cursor Pro как выбираемого провайдера и не показывайте инструкции OAuth, специфичные для Cursor, в пользовательских интерфейсах connector.

Для песочниц или headless-сред предоставьте ручной резервный путь OAuth, чтобы администраторы могли вставить возвращенные данные авторизации и завершить подключение аккаунта без зависимости от автоматического перенаправления браузера.
