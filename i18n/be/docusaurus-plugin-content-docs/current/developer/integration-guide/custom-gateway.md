---
title: Распрацоўка індывідуальнага шлюза
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Распрацоўка карыстальніцкага шлюза

Вы можаце ствараць карыстальніцкія плацежныя шлюзы, пашыраючы клас `Base_Gateway`.

## Клас шлюза

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

## Зарэгістраваць шлюз

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ключавыя метады

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Апрацоўка аднаразовых плацяжоў |
| `process_signup()` | Наладжванне перыядычных падпісак |
| `process_refund()` | Апрацоўка запытаў на вяртанне сродкаў |
| `get_payment_methods()` | Вяртанне захаваных спосабаў аплаты для кліента |

## Уліковыя даныя падаўжэння для перыядычных членстваў

Ultimate Multisite v2.13.0 дазваляе інтэграцыям шлюзаў паведамляць, ці мае перыядычнае членства шматразовы ўліковы даных для падаўжэння, перш чым `auto_renew` будзе захаваны. Падключыцеся да `wu_membership_has_renewal_credential` і вярніце:

- `true`, калі членства мае падпіску шлюза, пагадненне аб аплаце, токен сховішча або эквівалентны шматразовы спосаб аплаты.
- `false`, калі шлюз ведае, што перыядычны ўліковы даных адсутнічае або непрыдатны да выкарыстання.
- `null`, каб адмовіцца ад удзелу і пакінуць паводзіны па змаўчанні без змен.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Калі шлюз вяртае `false`, Ultimate Multisite захоўвае членства з адключаным аўтаматычным падаўжэннем і захоўвае маркер адсутнага ўліковага даных. Выкарыстоўвайце `wu_membership_renewal_credential_missing`, каб апавяшчаць адміністратараў, запускаць працэс паўторнай аўтарызацыі або дадаваць нататкі падтрымкі:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Ачысціце маркер адсутнага ўліковага даных як частку паспяховага працэсу паўторнай аўтарызацыі вашага шлюза пасля захавання новага шматразовага ўліковага даных.

## Парады

- Заўсёды вяртайце `WP_Error` пры збоі, каб Ultimate Multisite мог апрацаваць паказ памылкі
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Выкарыстоўвайце `wu_log_add()` для журналявання, спецыфічнага для шлюза

## Магчымасці пастаўшчыкоў AI-канектара

Карыстальніцкія інтэграцыі, якія выклікаюць аперацыі на базе AI-канектара, павінны адпавядаць падтрымліванаму набору пастаўшчыкоў OAuth, уведзенаму з AI Provider for Anthropic Max v1.3.0:

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | Падтрымлівае існуючы працоўны працэс пула ўліковых запісаў OAuth. Захоўвайце карысныя нагрузкі выкарыстання інструментаў Anthropic, уключаючы пустыя масівы інструментаў і подпісы мыслення для кругавой перадачы, пры праксіраванні запытаў канектара. |
| **OpenAI ChatGPT/Codex** | Падтрымлівае працоўны працэс пула OAuth і поўныя паводзіны падтрымкі інструментаў для аперацый, якія падтрымліваюцца канектарам. Перадавайце азначэнні інструментаў і вынікі выклікаў інструментаў без выдалення метаданых інструментаў, спецыфічных для Codex. |
| **Google AI Pro** | Падтрымлівае працоўны працэс пула OAuth і інтэграцыю пастаўшчыка на базе SDK. Абнаўляйце ўліковыя запісы пастаўшчыка пасля завяршэння OAuth перад маршрутызацыяй запытаў. |

Інтэграцыя Cursor Pro і шляхі наладжвання былі выдалены. Не рэгіструйце Cursor Pro як даступнага для выбару пастаўшчыка і не паказвайце інструкцыі OAuth, спецыфічныя для Cursor, у карыстальніцкіх інтэрфейсах канектараў.

Для ізаляваных або безгаловых асяроддзяў адкрыйце ручны рэзервовы шлях OAuth, каб адміністратары маглі ўставіць вернутыя даныя аўтарызацыі і завяршыць падключэнне ўліковага запісу без залежнасці ад аўтаматычнага перанакіравання браўзера.
