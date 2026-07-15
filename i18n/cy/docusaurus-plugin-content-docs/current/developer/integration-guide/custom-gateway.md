---
title: Datblygu Porth wedi’i Deilwra
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Datblygu Gateway Personol

Gallwch greu pyrth talu personol drwy ymestyn y dosbarth `Base_Gateway`.

## Dosbarth Gateway {#gateway-class}

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

## Cofrestru’r Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Dulliau Allweddol {#key-methods}

| Dull | Diben |
|--------|---------|
| `process_single_payment()` | Trin taliadau untro |
| `process_signup()` | Sefydlu tanysgrifiadau cylchol |
| `process_refund()` | Trin ceisiadau ad-daliad |
| `get_payment_methods()` | Dychwelyd dulliau talu sydd wedi’u cadw ar gyfer cwsmer |

## Manylion adnewyddu ar gyfer aelodaeth gylchol {#renewal-credentials-for-recurring-memberships}

Mae Ultimate Multisite v2.13.0 yn caniatáu i integreiddiadau gateway adrodd a oes gan aelodaeth gylchol fanylyn adnewyddu ail-ddefnyddiadwy cyn i `auto_renew` gael ei gadw. Bachwch `wu_membership_has_renewal_credential` a dychwelwch:

- `true` pan fydd gan yr aelodaeth danysgrifiad gateway, cytundeb bilio, tocyn vault, neu ddull talu ail-ddefnyddiadwy cyfatebol.
- `false` pan fydd y gateway yn gwybod bod y manylyn cylchol ar goll neu’n annefnyddiadwy.
- `null` i optio allan a chadw’r ymddygiad diofyn heb ei newid.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Pan fydd gateway yn dychwelyd `false`, mae Ultimate Multisite yn cadw’r aelodaeth gydag awto-adnewyddu wedi’i analluogi ac yn storio marciwr manylyn coll. Defnyddiwch `wu_membership_renewal_credential_missing` i hysbysu gweinyddwyr, dechrau llif ail-awdurdodi, neu ychwanegu nodiadau cymorth:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Cliriwch y marciwr manylyn coll fel rhan o lif ail-awdurdodi llwyddiannus eich gateway ar ôl i fanylyn ail-ddefnyddiadwy newydd gael ei storio.

## Awgrymiadau {#tips}

- Dychwelwch `WP_Error` bob amser ar fethiant fel y gall Ultimate Multisite drin dangos gwallau
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Defnyddiwch `wu_log_add()` ar gyfer cofnodi penodol i gateway

## Galluoedd darparwr cysylltydd AI {#ai-connector-provider-capabilities}

Dylai integreiddiadau personol sy’n galw gweithrediadau a gefnogir gan gysylltydd AI gyd-fynd â’r set darparwyr OAuth a gefnogir a gyflwynwyd gydag AI Provider for Anthropic Max v1.3.0:

| Darparwr | Nodiadau gallu |
|---|---|
| **Anthropic Max** | Yn cefnogi llif gwaith presennol cronfa Account OAuth. Cadwch lwythi offer Anthropic, gan gynnwys araeau offer gwag a llofnodion meddwl taith gron, wrth ddirprwyo ceisiadau cysylltydd. |
| **OpenAI ChatGPT/Codex** | Yn cefnogi llif gwaith cronfa OAuth ac ymddygiad cefnogaeth offer llawn ar gyfer gweithrediadau a gefnogir gan gysylltydd. Trosglwyddwch ddiffiniadau offer a chanlyniadau galwadau offer ymlaen heb dynnu metadata offer penodol i Codex. |
| **Google AI Pro** | Yn cefnogi llif gwaith cronfa OAuth ac integreiddiad darparwr a gefnogir gan SDK. Adnewyddwch gyfrifon darparwr ar ôl cwblhau OAuth cyn llwybro ceisiadau. |

Mae integreiddiad Cursor Pro a llwybrau sefydlu wedi’u dileu. Peidiwch â chofrestru Cursor Pro fel darparwr dewisadwy na chyflwyno cyfarwyddiadau OAuth penodol i Cursor mewn UIau cysylltydd personol.

Ar gyfer amgylcheddau sandbox neu heb ben, datgelwch y llwybr wrth gefn OAuth â llaw fel y gall gweinyddwyr ludo’r data awdurdodi a ddychwelwyd a chwblhau cysylltu Account heb ddibynnu ar ailgyfeirio porwr awtomatig.
