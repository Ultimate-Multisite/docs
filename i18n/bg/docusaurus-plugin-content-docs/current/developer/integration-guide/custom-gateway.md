---
title: Разработка на персонализиран шлюз
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Разработка на Custom Gateway

Можете да създавате персонализирани платежни gateway-и, като разширите класа `Base_Gateway`.

## Клас на gateway {#gateway-class}

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

## Регистриране на gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Основни методи {#key-methods}

| Метод | Предназначение |
|--------|---------|
| `process_single_payment()` | Обработва еднократни плащания |
| `process_signup()` | Настройва повтарящи се абонаменти |
| `process_refund()` | Обработва заявки за възстановяване на средства |
| `get_payment_methods()` | Връща запазените методи на плащане за клиент |

## Данни за подновяване за повтарящи се членства {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 позволява на gateway интеграциите да докладват дали повтарящо се членство има повторно използваеми данни за подновяване, преди `auto_renew` да бъде запазено. Закачете се към `wu_membership_has_renewal_credential` и върнете:

- `true`, когато членството има gateway абонамент, споразумение за фактуриране, vault token или еквивалентен повторно използваем метод на плащане.
- `false`, когато gateway знае, че повтарящите се данни липсват или са неизползваеми.
- `null`, за да се откажете от участие и да оставите поведението по подразбиране непроменено.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Когато gateway върне `false`, Ultimate Multisite запазва членството с деактивирано автоматично подновяване и съхранява маркер за липсващи данни. Използвайте `wu_membership_renewal_credential_missing`, за да уведомите администраторите, да стартирате поток за повторно упълномощаване или да добавите бележки за поддръжката:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Изчистете маркера за липсващи данни като част от успешния поток за повторно упълномощаване на вашия gateway, след като бъдат съхранени нови повторно използваеми данни.

## Съвети {#tips}

- Винаги връщайте `WP_Error` при неуспех, за да може Ultimate Multisite да обработи показването на грешката
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Използвайте `wu_log_add()` за специфично за gateway регистриране в лог

## Възможности на доставчик на AI connector {#ai-connector-provider-capabilities}

Персонализираните интеграции, които извикват операции, базирани на AI connector, трябва да бъдат съобразени с поддържания набор OAuth доставчици, въведен с AI Provider for Anthropic Max v1.3.0:

| Доставчик | Бележки за възможностите |
|---|---|
| **Anthropic Max** | Поддържа съществуващия работен поток на OAuth Account pool. Запазвайте payload-ите за Anthropic tool-use, включително празни масиви от инструменти и двупосочни thinking signatures, когато проксирате заявки на connector. |
| **OpenAI ChatGPT/Codex** | Поддържа работния поток на OAuth pool и пълното поведение за поддръжка на инструменти за операции, поддържани от connector. Предавайте дефинициите на инструменти и резултатите от tool-call без премахване на специфични за Codex метаданни за инструменти. |
| **Google AI Pro** | Поддържа работния поток на OAuth pool и интеграция с доставчик, базирана на SDK. Обновявайте акаунтите на доставчика след завършване на OAuth, преди да маршрутизирате заявки. |

Интеграцията и пътищата за настройка на Cursor Pro са премахнати. Не регистрирайте Cursor Pro като избираем доставчик и не представяйте специфични за Cursor OAuth инструкции в персонализирани потребителски интерфейси на connector.

За sandboxed или headless среди изложете ръчния резервен OAuth път, за да могат администраторите да поставят върнатите данни за упълномощаване и да завършат свързването на акаунта, без да разчитат на автоматично пренасочване на браузъра.
