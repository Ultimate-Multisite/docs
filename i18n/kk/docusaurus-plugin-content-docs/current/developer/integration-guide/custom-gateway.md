---
title: Жеке шлюзді әзірлеу
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Арнайы шлюз әзірлеу {#custom-gateway-development}

`Base_Gateway` класын кеңейту арқылы арнайы төлем шлюздерін жасай аласыз.

## Шлюз класы {#gateway-class}

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

## Шлюзді тіркеу {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Негізгі әдістер {#key-methods}

| Әдіс | Мақсаты |
|--------|---------|
| `process_single_payment()` | Бір реттік төлемдерді өңдеу |
| `process_signup()` | Қайталанатын жазылымдарды баптау |
| `process_refund()` | Қайтару сұрауларын өңдеу |
| `get_payment_methods()` | Клиент үшін сақталған төлем әдістерін қайтару |

## Қайталанатын мүшеліктерге арналған ұзарту тіркелгі деректері {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 шлюз интеграцияларына `auto_renew` сақталмай тұрып, қайталанатын мүшелікте қайта пайдалануға болатын ұзарту тіркелгі дерегі бар-жоғын хабарлауға мүмкіндік береді. `wu_membership_has_renewal_credential` hook-ын қолданып, мынаны қайтарыңыз:

- Мүшелікте шлюз жазылымы, биллинг келісімі, vault token немесе соған тең қайта пайдалануға болатын төлем әдісі болғанда `true`.
- Шлюз қайталанатын тіркелгі дерегінің жоқ немесе жарамсыз екенін білгенде `false`.
- Бас тарту және әдепкі мінез-құлықты өзгеріссіз қалдыру үшін `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Шлюз `false` қайтарғанда, Ultimate Multisite мүшелікті авто-ұзарту өшірілген күйде сақтайды және жоқ тіркелгі дерегі белгісін сақтайды. Әкімшілерге хабарлау, қайта авторизациялау ағынын бастау немесе қолдау ескертпелерін қосу үшін `wu_membership_renewal_credential_missing` пайдаланыңыз:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Жаңа қайта пайдалануға болатын тіркелгі дерегі сақталғаннан кейін, шлюзіңіздің сәтті қайта авторизациялау ағынының бөлігі ретінде жоқ тіркелгі дерегі белгісін тазалаңыз.

## Кеңестер {#tips}

- Сәтсіздік кезінде әрқашан `WP_Error` қайтарыңыз, сонда Ultimate Multisite қате көрсетілуін өңдей алады
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Шлюзге тән журналдау үшін `wu_log_add()` пайдаланыңыз

## AI connector провайдерінің мүмкіндіктері {#ai-connector-provider-capabilities}

AI connector арқылы қолдау көрсетілетін операцияларды шақыратын арнайы интеграциялар Anthropic Max v1.3.0 үшін AI Provider бірге енгізілген қолдау көрсетілетін OAuth провайдерлер жиынымен үйлесуі керек:

| Провайдер | Мүмкіндік ескертпелері |
|---|---|
| **Anthropic Max** | Қолданыстағы OAuth account pool жұмыс ағынын қолдайды. Connector сұрауларын прокси арқылы жібергенде, Anthropic құрал пайдалану payload-тарын, соның ішінде бос құрал массивтерін және екі жақты thinking қолтаңбаларын сақтаңыз. |
| **OpenAI ChatGPT/Codex** | OAuth pool жұмыс ағынын және connector қолдайтын операциялар үшін толық құрал қолдау мінез-құлқын қолдайды. Құрал анықтамалары мен құрал шақыру нәтижелерін Codex-ке тән құрал metadata-сын алып тастамай өткізіңіз. |
| **Google AI Pro** | OAuth pool жұмыс ағынын және SDK арқылы қолдау көрсетілетін провайдер интеграциясын қолдайды. Сұрауларды бағыттамас бұрын OAuth аяқталғаннан кейін провайдер Account-тарын жаңартыңыз. |

Cursor Pro интеграциясы мен баптау жолдары жойылды. Cursor Pro-ды таңдауға болатын провайдер ретінде тіркемеңіз немесе арнайы connector UI-ларында Cursor-ға тән OAuth нұсқауларын көрсетпеңіз.

Sandbox немесе headless орталар үшін қолмен OAuth fallback жолын ашыңыз, сонда әкімшілер қайтарылған авторизация деректерін қойып, автоматты браузер қайта бағыттауына сүйенбей Account байланысын аяқтай алады.
