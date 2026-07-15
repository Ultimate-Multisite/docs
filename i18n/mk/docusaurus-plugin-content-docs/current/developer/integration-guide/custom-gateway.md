---
title: Развој на прилагоден Gateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Развој на приспособен Gateway

Можете да креирате приспособени платежни gateway-и со проширување на класата `Base_Gateway`.

## Gateway класа {#gateway-class}

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

## Регистрирајте го Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Клучни методи {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Обработува еднократни плаќања |
| `process_signup()` | Поставува повторливи претплати |
| `process_refund()` | Обработува барања за рефундирање |
| `get_payment_methods()` | Враќа зачувани начини на плаќање за клиент |

## Ингеренции за обновување за повторливи членства {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 им овозможува на gateway интеграциите да пријават дали повторливо членство има повторно употреблива ингеренција за обновување пред `auto_renew` да се зачува. Закачете `wu_membership_has_renewal_credential` и вратете:

- `true` кога членството има gateway претплата, договор за наплата, vault token или еквивалентен повторно употреблив начин на плаќање.
- `false` кога gateway знае дека повторливата ингеренција недостасува или не може да се користи.
- `null` за да се откажете и да го задржите стандардното однесување непроменето.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Кога gateway враќа `false`, Ultimate Multisite го зачувува членството со оневозможено автоматско обновување и складира ознака за недостасувачка ингеренција. Користете `wu_membership_renewal_credential_missing` за да ги известите администраторите, да започнете тек за повторна авторизација или да додадете белешки за поддршка:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Исчистете ја ознаката за недостасувачка ингеренција како дел од успешниот тек за повторна авторизација на вашиот gateway откако ќе се складира нова повторно употреблива ингеренција.

## Совети {#tips}

- Секогаш враќајте `WP_Error` при неуспех за Ultimate Multisite да може да се справи со прикажувањето грешки
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Користете `wu_log_add()` за логирање специфично за gateway

## Можности на AI connector provider {#ai-connector-provider-capabilities}

Приспособените интеграции што повикуваат операции поддржани од AI connector треба да се усогласат со поддржаниот сет на OAuth provider-и воведен со AI Provider for Anthropic Max v1.3.0:

| Provider | Белешки за можности |
|---|---|
| **Anthropic Max** | Го поддржува постојниот тек на OAuth базен на Account-и. Зачувајте ги Anthropic payload-и за користење алатки, вклучувајќи празни низи со алатки и потписи за размислување во двонасочна размена, кога посредувате connector барања. |
| **OpenAI ChatGPT/Codex** | Го поддржува текот на OAuth базенот и целосното однесување за поддршка на алатки за операции поддржани од connector. Пренесете ги дефинициите на алатките и резултатите од повиците на алатки без да ги отстранувате метаподатоците за алатки специфични за Codex. |
| **Google AI Pro** | Го поддржува текот на OAuth базенот и интеграција на provider поддржана од SDK. Освежете ги provider Account-ите по завршување на OAuth пред да насочите барања. |

Интеграцијата и патеките за поставување на Cursor Pro се отстранети. Не регистрирајте Cursor Pro како provider што може да се избере и не прикажувајте OAuth инструкции специфични за Cursor во приспособени connector UI-и.

За sandbox или headless околини, изложете ја рачната резервна OAuth патека за администраторите да можат да ги залепат вратените податоци за авторизација и да ја завршат врската со Account без да се потпираат на автоматско пренасочување на прелистувач.
