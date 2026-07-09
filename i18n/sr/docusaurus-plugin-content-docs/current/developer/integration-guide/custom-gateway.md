---
title: Развој прилагођеног гејтвеја
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Развој прилагођеног Gateway-а

Можете креирати прилагођене payment gateway-е проширивањем класе `Base_Gateway`.

## Gateway класа

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

## Регистровање Gateway-а

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Кључне методе

| Метод | Сврха |
|--------|---------|
| `process_single_payment()` | Обрада једнократних плаћања |
| `process_signup()` | Подешавање понављајућих претплата |
| `process_refund()` | Обрада захтева за повраћај средстава |
| `get_payment_methods()` | Враћа сачуване методе плаћања за купца |

## Акредитиви за обнову понављајућих чланстава

Ultimate Multisite v2.13.0 омогућава интеграцијама gateway-а да пријаве да ли понављајуће чланство има поново употребљив акредитив за обнову пре него што се `auto_renew` сачува. Закачите `wu_membership_has_renewal_credential` и вратите:

- `true` када чланство има gateway претплату, уговор о наплати, vault token или еквивалентан поново употребљиви метод плаћања.
- `false` када gateway зна да акредитив за понављање недостаје или је неупотребљив.
- `null` да се изузмете и оставите подразумевано понашање непромењено.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Када gateway врати `false`, Ultimate Multisite чува чланство са онемогућеном аутоматском обновом и чува ознаку недостајућег акредитива. Користите `wu_membership_renewal_credential_missing` да обавестите администраторе, покренете ток поновне ауторизације или додате напомене подршке:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Обришите ознаку недостајућег акредитива као део успешног тока поновне ауторизације вашег gateway-а након што се сачува нови поново употребљиви акредитив.

## Савети

- Увек вратите `WP_Error` при неуспеху како би Ultimate Multisite могао да обради приказ грешке
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Користите `wu_log_add()` за евидентирање специфично за gateway

## Могућности провајдера AI конектора

Прилагођене интеграције које позивају операције подржане AI конектором треба да буду усклађене са подржаним скупом OAuth провајдера уведеним уз AI Provider for Anthropic Max v1.3.0:

| Провајдер | Напомене о могућностима |
|---|---|
| **Anthropic Max** | Подржава постојећи ток рада скупа OAuth налога. Сачувајте Anthropic payload-е за коришћење алата, укључујући празне низове алата и thinking потписе за повратни пролаз, када проксирате захтеве конектора. |
| **OpenAI ChatGPT/Codex** | Подржава ток рада OAuth скупа и пуно понашање подршке за алате за операције које подржава конектор. Проследите дефиниције алата и резултате позива алата без уклањања Codex-специфичних метаподатака алата. |
| **Google AI Pro** | Подржава ток рада OAuth скупа и интеграцију провајдера подржану SDK-ом. Освежите налоге провајдера након завршетка OAuth-а пре усмеравања захтева. |

Интеграција Cursor Pro и путање подешавања су уклоњене. Немојте регистровати Cursor Pro као провајдера који се може изабрати нити приказивати OAuth упутства специфична за Cursor у прилагођеним UI-јевима конектора.

За sandboxed или headless окружења, изложите ручну резервну OAuth путању како би администратори могли да налепе враћене податке за ауторизацију и доврше повезивање налога без ослањања на аутоматско преусмеравање прегледача.
