---
title: Ìdàgbàsókè Ẹnu-ọ̀nà Àdáni
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Idagbasoke Gateway Aṣa

O le ṣẹda àwọn gateway isanwo àṣà nípa fífi kún kilasi `Base_Gateway`.

## Kilasi Gateway

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

## Forúkọsílẹ Gateway náà

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Àwọn Ọna Pátá

| Ọna | Ète |
|--------|---------|
| `process_single_payment()` | Ṣàkóso àwọn isanwo ẹ̀ẹ̀kan ṣoṣo |
| `process_signup()` | Ṣètò àwọn subscription tó ń tún ṣẹlẹ̀ |
| `process_refund()` | Ṣàkóso àwọn ìbéèrè ìdápadà owó |
| `get_payment_methods()` | Dá àwọn ọ̀nà isanwo tí a ti fipamọ́ padà fún oníbàárà |

## Àwọn credential ìtúnṣe fún àwọn membership tó ń tún ṣẹlẹ̀

Ultimate Multisite v2.13.0 jẹ́ kí àwọn ìṣepọ̀ gateway ròyìn bóyá membership tó ń tún ṣẹlẹ̀ ní credential ìtúnṣe tí a lè tún lò ṣáájú kí `auto_renew` tó wa ní pípa mọ́. Hook `wu_membership_has_renewal_credential` kí o sì dá padà:

- `true` nígbà tí membership náà ní subscription gateway, àdéhùn billing, token vault, tàbí ọ̀nà isanwo tó jọra tí a lè tún lò.
- `false` nígbà tí gateway mọ̀ pé credential tó ń tún ṣẹlẹ̀ náà kò sí tàbí kò ṣeé lò.
- `null` láti jáde kúrò kí ìhùwàsí àiyipada dúró bí ó ṣe wà láìyípadà.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Nígbà tí gateway bá dá `false` padà, Ultimate Multisite máa fipamọ́ membership náà pẹ̀lú ìtúnṣe aládàáṣiṣẹ́ tí a ti pa, ó sì máa tọ́jú àmì credential tí kò sí. Lo `wu_membership_renewal_credential_missing` láti fi tó àwọn alákóso létí, bẹ̀rẹ̀ ìṣàn re-authorization, tàbí ṣàfikún àwọn àkọsílẹ̀ ìtìlẹ́yìn:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Pa àmì credential tí kò sí rẹ́ gẹ́gẹ́ bí apá kan nínú ìṣàn re-authorization gateway rẹ tí ó ṣàṣeyọrí lẹ́yìn tí a bá ti fipamọ́ credential tuntun tí a lè tún lò.

## Àwọn ìmọ̀ràn

- Máa dá `WP_Error` padà nígbà gbogbo nígbà ìkùnà kí Ultimate Multisite lè ṣàkóso fífi àṣìṣe hàn
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Lo `wu_log_add()` fún logging tó jẹ mọ́ gateway

## Àwọn agbára olupese connector AI

Àwọn ìṣepọ̀ àṣà tí ń pe àwọn iṣẹ́ tí AI connector ṣe àtìlẹ́yìn gbọ́dọ̀ bá àkójọpọ̀ olupese OAuth tí a ṣe àgbékalẹ̀ pẹ̀lú AI Provider for Anthropic Max v1.3.0 mu:

| Olupese | Àwọn àkọsílẹ̀ agbára |
|---|---|
| **Anthropic Max** | Ṣe àtìlẹ́yìn fún ìṣàn iṣẹ́ pool Account OAuth tó wà tẹ́lẹ̀. Pa àwọn payload lílo-irinṣẹ́ Anthropic mọ́, pẹ̀lú àwọn array irinṣẹ́ òfo àti àwọn signature ìrònú round-trip, nígbà tí o bá ń ṣe proxy àwọn ìbéèrè connector. |
| **OpenAI ChatGPT/Codex** | Ṣe àtìlẹ́yìn fún ìṣàn iṣẹ́ pool OAuth àti ìhùwàsí àtìlẹ́yìn-irinṣẹ́ kíkún fún àwọn iṣẹ́ tí connector ṣe àtìlẹ́yìn. Jẹ́ kí àwọn ìtumọ̀ irinṣẹ́ àti àwọn abajade ìpè-irinṣẹ́ kọjá láì yọ metadata irinṣẹ́ tó jẹ mọ́ Codex kúrò. |
| **Google AI Pro** | Ṣe àtìlẹ́yìn fún ìṣàn iṣẹ́ pool OAuth àti ìṣepọ̀ olupese tí SDK ṣe àtìlẹ́yìn. Ṣe refresh àwọn Account olupese lẹ́yìn ìparí OAuth kí o tó darí àwọn ìbéèrè. |

Ìṣepọ̀ Cursor Pro àti àwọn ipa-ọ̀nà ìṣètò ni a ti yọ kúrò. Má ṣe forúkọsílẹ Cursor Pro gẹ́gẹ́ bí olupese tí a lè yan tàbí fi àwọn ìtọ́nisọ́nà OAuth tó jẹ mọ́ Cursor hàn nínú àwọn UI connector àṣà.

Fún àwọn ayika sandboxed tàbí headless, ṣí ipa-ọ̀nà fallback OAuth afọwọ́ṣe sílẹ̀ kí àwọn alákóso lè lẹ̀ data authorization tí a dá padà mọ́lẹ̀ kí wọ́n sì parí àsopọ̀ Account láì gbẹ́kẹ̀ lé redirect aṣàwákiri aládàáṣiṣẹ́.
