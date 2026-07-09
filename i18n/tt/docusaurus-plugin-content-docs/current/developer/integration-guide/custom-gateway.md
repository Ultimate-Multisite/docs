---
title: Махсус шлюз эшләү
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Махсус түләү шлюзын эшләү

Сез `Base_Gateway` классын киңәйтеп, махсус түләү шлюзлары булдыра аласыз.

## Шлюз классы

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

## Шлюзны теркәү

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Төп методлар

| Метод | Максат |
|--------|---------|
| `process_single_payment()` | Бер тапкыр түләүләрне эшкәртү |
| `process_signup()` | Кабатлана торган язылуларны көйләү |
| `process_refund()` | Акчаны кире кайтару сорауларын эшкәртү |
| `get_payment_methods()` | Клиент өчен сакланган түләү ысулларын кайтару |

## Кабатлана торган әгъзалыклар өчен яңарту реквизитлары

Ultimate Multisite v2.13.0 шлюз интеграцияләренә `auto_renew` сакланганчы, кабатлана торган әгъзалыкның кабат кулланыла торган яңарту реквизиты бармы икәнен хәбәр итәргә мөмкинлек бирә. `wu_membership_has_renewal_credential` hookын кулланыгыз һәм түбәндәгене кайтарыгыз:

- Әгъзалыкта шлюз язылуы, исәп-хисап килешүе, vault token яки шуңа тиң кабат кулланыла торган түләү ысулы булганда `true`.
- Шлюз кабатлана торган реквизитның юк яки кулланырга яраксыз икәнен белгәндә `false`.
- Катнашмаска һәм default эш тәртибен үзгәрешсез калдырырга `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Шлюз `false` кайтарганда, Ultimate Multisite әгъзалыкны автоматик яңарту сүндерелгән килеш саклый һәм югалган реквизит маркерын саклый. Администраторларга хәбәр итү, кабат авторизация агымын башлау яки ярдәм искәрмәләре өстәү өчен `wu_membership_renewal_credential_missing` кулланыгыз:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Яңа кабат кулланыла торган реквизит сакланганнан соң, шлюзыгызның уңышлы кабат авторизация агымы кысаларында югалган реквизит маркерын чистартыгыз.

## Киңәшләр

- Уңышсызлык очрагында һәрвакыт `WP_Error` кайтарыгыз, шулай итеп Ultimate Multisite хата күрсәтүне эшкәртә ала
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Шлюзга хас журналлау өчен `wu_log_add()` кулланыгыз

## AI тоташтыргыч провайдер мөмкинлекләре

AI тоташтыргычка таянган операцияләрне чакыра торган махсус интеграцияләр AI Provider for Anthropic Max v1.3.0 белән кертелгән ярдәм ителә торган OAuth провайдерлар җыелмасы белән яраклашырга тиеш:

| Провайдер | Мөмкинлек искәрмәләре |
|---|---|
| **Anthropic Max** | Гамәлдәге OAuth Account пул эш агымын хуплый. Тоташтыргыч сорауларын proxy аша үткәргәндә, буш tool массивларын һәм ике якка да йөрүче thinking имзаларын да кертеп, Anthropic tool-use payloadларын саклагыз. |
| **OpenAI ChatGPT/Codex** | OAuth пул эш агымын һәм тоташтыргыч хуплаган операцияләр өчен тулы tool-support тәртибен хуплый. Tool билгеләмәләрен һәм tool-call нәтиҗәләрен Codexка хас tool метабирелмәләрен алып ташламыйча үткәрегез. |
| **Google AI Pro** | OAuth пул эш агымын һәм SDKка таянган провайдер интеграциясен хуплый. Сорауларны маршрутлаганчы, OAuth тәмамланганнан соң провайдер Accountларын яңартыгыз. |

Cursor Pro интеграциясе һәм көйләү юллары бетерелде. Cursor Proны сайлана торган провайдер итеп теркәмәгез һәм махсус тоташтыргыч UIларында Cursorга хас OAuth күрсәтмәләрен күрсәтмәгез.

Sandbox яки headless мохитләр өчен, администраторлар кайтарылган авторизация мәгълүматларын куеп, автоматик браузер юнәлтүенә таянмыйча Account тоташтыруын тәмамлый алсын өчен, кул белән OAuth fallback юлын ачыгыз.
