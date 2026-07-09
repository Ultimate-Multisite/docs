---
title: Forbairt Gheata Saincheaptha
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Forbairt Gateway Saincheaptha

Is féidir leat gateways íocaíochta saincheaptha a chruthú trí shíneadh a chur leis an rang `Base_Gateway`.

## Rang Gateway

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

## Cláraigh an Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Príomh-Mhodhanna

| Modh | Cuspóir |
|--------|---------|
| `process_single_payment()` | Láimhseáil íocaíochtaí aonuaire |
| `process_signup()` | Socraigh síntiúis athfhillteacha |
| `process_refund()` | Láimhseáil iarratais ar aisíocaíocht |
| `get_payment_methods()` | Tabhair ar ais modhanna íocaíochta sábháilte do chustaiméir |

## Dintiúir athnuachana do bhallraíochtaí athfhillteacha

Ligeann Ultimate Multisite v2.13.0 do chomhtháthuithe gateway tuairisciú an bhfuil dintiúr athnuachana in-athúsáidte ag ballraíocht athfhillteach sula ndéantar `auto_renew` a bhuanú. Hook `wu_membership_has_renewal_credential` agus tabhair ar ais:

- `true` nuair atá síntiús gateway, comhaontú billeála, token taisce, nó modh íocaíochta in-athúsáidte coibhéiseach ag an mballraíocht.
- `false` nuair is eol don gateway go bhfuil an dintiúr athfhillteach ar iarraidh nó nach bhfuil sé inúsáidte.
- `null` chun diúltú páirt a ghlacadh agus an t-iompar réamhshocraithe a choinneáil gan athrú.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Nuair a thugann gateway `false` ar ais, sábhálann Ultimate Multisite an bhallraíocht le hathnuachan uathoibríoch díchumasaithe agus stórálann sé marcóir dintiúir ar iarraidh. Úsáid `wu_membership_renewal_credential_missing` chun riarthóirí a chur ar an eolas, sreabhadh athúdaraithe a thosú, nó nótaí tacaíochta a chur leis:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Glan an marcóir dintiúir ar iarraidh mar chuid de shreabhadh athúdaraithe rathúil do gateway tar éis dintiúr nua in-athúsáidte a stóráil.

## Leideanna

- Tabhair `WP_Error` ar ais i gcónaí ar theip ionas gur féidir le Ultimate Multisite taispeáint earráide a láimhseáil
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Úsáid `wu_log_add()` le haghaidh logála a bhaineann go sonrach leis an gateway

## Cumais soláthraí nascóra AI

Ba cheart do chomhtháthuithe saincheaptha a ghlaonn oibríochtaí atá tacaithe ag nascóir AI ailíniú leis an tacar soláthraithe OAuth tacaithe a tugadh isteach le AI Provider for Anthropic Max v1.3.0:

| Soláthraí | Nótaí cumais |
|---|---|
| **Anthropic Max** | Tacaíonn sé leis an sreabhadh reatha linn cuntas OAuth. Caomhnaigh ualaí uirlis-úsáide Anthropic, lena n-áirítear eagair uirlisí fholmha agus sínithe smaointeoireachta turais bhabhta, agus iarratais nascóra á seachfhreastalaí. |
| **OpenAI ChatGPT/Codex** | Tacaíonn sé leis an sreabhadh linn OAuth agus leis an iompar tacaíochta uirlisí iomlán d’oibríochtaí a dtacaíonn an nascóir leo. Cuir sainmhínithe uirlisí agus torthaí glaonna uirlisí tríd gan meiteashonraí uirlisí a bhaineann go sonrach le Codex a bhaint. |
| **Google AI Pro** | Tacaíonn sé leis an sreabhadh linn OAuth agus le comhtháthú soláthraí atá tacaithe ag SDK. Athnuaigh cuntais soláthraithe tar éis críochnú OAuth sula ndéantar iarratais a ródú. |

Baineadh comhtháthú agus bealaí socraithe Cursor Pro. Ná cláraigh Cursor Pro mar sholáthraí inroghnaithe ná ná cuir treoracha OAuth a bhaineann go sonrach le Cursor i láthair i gcomhéadain úsáideora nascóra saincheaptha.

I gcás timpeallachtaí bosca gainimh nó gan chomhéadan, nocht an cosán cúltaca OAuth láimhe ionas gur féidir le riarthóirí na sonraí údaraithe a chuirtear ar ais a ghreamú agus nascadh an chuntais a chur i gcrích gan brath ar atreorú uathoibríoch brabhsálaí.
