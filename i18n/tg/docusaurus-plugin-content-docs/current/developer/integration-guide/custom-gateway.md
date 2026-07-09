---
title: Таҳияи шлюзи фармоишӣ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Таҳияи Gateway фармоишӣ {#custom-gateway-development}

Шумо метавонед gateway-ҳои пардохтии фармоиширо бо васеъ кардани синфи `Base_Gateway` эҷод кунед.

## Синфи Gateway {#gateway-class}

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

## Сабти Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Усулҳои калидӣ {#key-methods}

| Усул | Мақсад |
|--------|---------|
| `process_single_payment()` | Коркарди пардохтҳои якдафъаина |
| `process_signup()` | Танзими обунаҳои даврӣ |
| `process_refund()` | Коркарди дархостҳои баргардонидани маблағ |
| `get_payment_methods()` | Баргардонидани усулҳои пардохти захирашуда барои муштарӣ |

## Маълумоти эътибории навсозӣ барои узвиятҳои даврӣ {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ба интегратсияҳои gateway имкон медиҳад гузориш диҳанд, ки оё узвияти даврӣ пеш аз захира шудани `auto_renew` маълумоти эътибории навсозии такроран истифодашаванда дорад ё не. `wu_membership_has_renewal_credential`-ро hook кунед ва баргардонед:

- `true` вақте ки узвият обунаи gateway, созишномаи ҳисоббарорӣ, vault token ё усули пардохти муодили такроран истифодашаванда дорад.
- `false` вақте ки gateway медонад, ки маълумоти эътибории даврӣ мавҷуд нест ё корношоям аст.
- `null` барои даст кашидан ва бетағйир нигоҳ доштани рафтори пешфарз.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Вақте ки gateway `false` бармегардонад, Ultimate Multisite узвиятро бо навсозии худкор ғайрифаъол захира мекунад ва нишонаи маълумоти эътибории гумшударо нигоҳ медорад. `wu_membership_renewal_credential_missing`-ро барои огоҳ кардани маъмурон, оғоз кардани ҷараёни иҷозатдиҳии дубора ё илова кардани қайдҳои дастгирӣ истифода баред:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Нишонаи маълумоти эътибории гумшударо ҳамчун қисми ҷараёни бомуваффақияти иҷозатдиҳии дубораи gateway-и худ пас аз захира шудани маълумоти эътибории нави такроран истифодашаванда тоза кунед.

## Маслиҳатҳо {#tips}

- Ҳангоми нокомӣ ҳамеша `WP_Error` баргардонед, то Ultimate Multisite тавонад намоиши хаторо коркард кунад
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Барои сабти рӯйдодҳои махсуси gateway аз `wu_log_add()` истифода баред

## Қобилиятҳои провайдери пайвасткунандаи AI {#ai-connector-provider-capabilities}

Интегратсияҳои фармоишӣ, ки амалиётҳои пуштибонишудаи пайвасткунандаи AI-ро даъват мекунанд, бояд бо маҷмӯи провайдерҳои дастгиришавандаи OAuth, ки бо AI Provider for Anthropic Max v1.3.0 ҷорӣ шудааст, ҳамоҳанг бошанд:

| Провайдер | Қайдҳои қобилият |
|---|---|
| **Anthropic Max** | Ҷараёни кории мавҷудаи ҳавзи Account-и OAuth-ро дастгирӣ мекунад. Ҳангоми миёнаравии дархостҳои пайвасткунанда payload-ҳои истифодаи абзори Anthropic-ро, аз ҷумла массивҳои холии абзор ва имзоҳои thinking-и рафтуомад, нигоҳ доред. |
| **OpenAI ChatGPT/Codex** | Ҷараёни кории ҳавзи OAuth ва рафтори пурраи дастгирии абзорро барои амалиётҳои дастгиришавандаи пайвасткунанда дастгирӣ мекунад. Таърифҳои абзор ва натиҷаҳои даъвати абзорро бе ҳазф кардани метамаълумоти абзори махсуси Codex гузаронед. |
| **Google AI Pro** | Ҷараёни кории ҳавзи OAuth ва интегратсияи провайдери пуштибонишуда бо SDK-ро дастгирӣ мекунад. Пас аз анҷоми OAuth, пеш аз масирдиҳии дархостҳо Account-ҳои провайдерро навсозӣ кунед. |

Интегратсияи Cursor Pro ва роҳҳои танзим хориҷ карда шудаанд. Cursor Pro-ро ҳамчун провайдери интихобшаванда сабт накунед ва дар UI-ҳои пайвасткунандаи фармоишӣ дастурҳои OAuth-и махсуси Cursor-ро пешниҳод накунед.

Барои муҳитҳои sandboxed ё headless, роҳи эҳтиётии дастии OAuth-ро намоён кунед, то маъмурон тавонанд маълумоти authorization-и баргардондашударо гузоранд ва пайвасти Account-ро бе такя ба redirect-и худкори browser анҷом диҳанд.
