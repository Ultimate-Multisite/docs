---
title: Ыңгайлаштырылган шлюзду иштеп чыгуу
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Ыңгайлаштырылган Gateway иштеп чыгуу

`Base_Gateway` классын кеңейтүү аркылуу ыңгайлаштырылган төлөм gatewayлерин түзө аласыз.

## Gateway классы {#gateway-class}

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

## Gatewayди каттоо {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Негизги методдор {#key-methods}

| Метод | Максаты |
|--------|---------|
| `process_single_payment()` | Бир жолку төлөмдөрдү иштетүү |
| `process_signup()` | Кайталануучу жазылууларды орнотуу |
| `process_refund()` | Кайтарым сурамдарын иштетүү |
| `get_payment_methods()` | Кардар үчүн сакталган төлөм ыкмаларын кайтаруу |

## Кайталануучу мүчөлүктөр үчүн жаңыртуу эсептик дайындары {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway интеграцияларына `auto_renew` сакталганга чейин кайталануучу мүчөлүктө кайра колдонулуучу жаңыртуу эсептик дайыны бар-жогун билдирүүгө мүмкүндүк берет. `wu_membership_has_renewal_credential` hook колдонуңуз жана төмөнкүлөрдү кайтарыңыз:

- Мүчөлүктө gateway жазылуусу, эсеп-кысап келишими, vault token же ага барабар кайра колдонулуучу төлөм ыкмасы бар болсо, `true`.
- Gateway кайталануучу эсептик дайын жок же колдонууга жараксыз экенин билсе, `false`.
- Баш тартуу жана демейки жүрүм-турумду өзгөртүүсүз калтыруу үчүн `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway `false` кайтарганда, Ultimate Multisite мүчөлүктү авто-жаңыртуу өчүрүлгөн абалда сактайт жана жетишпеген эсептик дайын белгисин сактайт. Администраторлорго билдирүү, кайра авторизациялоо агымын баштоо же колдоо эскертмелерин кошуу үчүн `wu_membership_renewal_credential_missing` колдонуңуз:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Жаңы кайра колдонулуучу эсептик дайын сакталгандан кийин gatewayиңиздин ийгиликтүү кайра авторизациялоо агымынын бир бөлүгү катары жетишпеген эсептик дайын белгисин тазалаңыз.

## Кеңештер {#tips}

- Ultimate Multisite ката көрсөтүүнү иштете алышы үчүн, ийгиликсиз учурда дайыма `WP_Error` кайтарыңыз
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gatewayге тиешелүү журналдоо үчүн `wu_log_add()` колдонуңуз

## AI connector provider мүмкүнчүлүктөрү {#ai-connector-provider-capabilities}

AI connector негизиндеги операцияларды чакырган ыңгайлаштырылган интеграциялар AI Provider for Anthropic Max v1.3.0 менен киргизилген колдоого алынган OAuth provider топтомуна шайкеш болушу керек:

| Provider | Мүмкүнчүлүк эскертмелери |
|---|---|
| **Anthropic Max** | Учурдагы OAuth account pool иш агымын колдойт. Connector сурамдарын proxy кылууда Anthropic tool-use payloadдорун, анын ичинде бош tool массивдерин жана round-trip thinking signatures сактаңыз. |
| **OpenAI ChatGPT/Codex** | OAuth pool иш агымын жана connector колдогон операциялар үчүн толук tool-support жүрүм-турумун колдойт. Tool аныктамаларын жана tool-call натыйжаларын Codexке тиешелүү tool метадайындарын алып салбастан өткөрүңүз. |
| **Google AI Pro** | OAuth pool иш агымын жана SDK негизиндеги provider интеграциясын колдойт. Сурамдарды багыттоодон мурун OAuth аяктагандан кийин provider аккаунттарын жаңыртыңыз. |

Cursor Pro интеграциясы жана орнотуу жолдору алып салынган. Cursor Proну тандалуучу provider катары каттабаңыз же ыңгайлаштырылган connector UIларында Cursorго тиешелүү OAuth нускамаларын көрсөтпөңүз.

Sandbox же headless чөйрөлөрү үчүн кол менен OAuth fallback жолун көрсөтүңүз, ошондо администраторлор кайтарылган авторизация дайындарын чаптап, автоматтык браузер redirectине таянбастан account туташуусун аяктай алышат.
