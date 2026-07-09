---
title: Kuvandudzwa kweGateway Yakagadzirirwa
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Kuvandudza Gedhi Rakagadziridzwa {#custom-gateway-development}

Unogona kugadzira magedhi ekubhadhara akagadziridzwa nekuwedzera kirasi ye`Base_Gateway`.

## Kirasi yeGedhi {#gateway-class}

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

## Nyoresa Gedhi {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Nzira Dzakakosha {#key-methods}

| Nzira | Chinangwa |
|--------|---------|
| `process_single_payment()` | Bata kubhadhara kamwe chete |
| `process_signup()` | Gadzira kunyoresa kunodzokororwa |
| `process_refund()` | Bata zvikumbiro zvekudzoserwa mari |
| `get_payment_methods()` | Dzosa nzira dzekubhadhara dzakachengetwa dzemutengi |

## Magwaro ekumutsiridza ehunhengo hunodzokororwa {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 inobvumira kubatanidzwa kwemagedhi kuzivisa kana hunhengo hunodzokororwa huine gwaro rekumutsiridza rinogona kushandiswazve `auto_renew` isati yachengetedzwa. Hook `wu_membership_has_renewal_credential` uye dzosa:

- `true` kana hunhengo hune kunyoresa kwegedhi, chibvumirano chekubhadhara, vault token, kana imwe nzira yekubhadhara inogona kushandiswazve yakafanana.
- `false` kana gedhi richiziva kuti gwaro rinodzokororwa haripo kana harishandisike.
- `null` kuti urege kupinda uye uchengete maitiro akajairwa asina kuchinjwa.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kana gedhi rikadzosa `false`, Ultimate Multisite inochengetedza hunhengo iine kumutsiridza otomatiki kwakadzimwa uye inochengeta mucherechedzo wegwaro risipo. Shandisa `wu_membership_renewal_credential_missing` kuzivisa vatungamiri, kutanga nzira yekubvumidza zvakare, kana kuwedzera manotsi erutsigiro:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Bvisa mucherechedzo wegwaro risipo sechikamu chenzira yegedhi rako yakabudirira yekubvumidza zvakare mushure mekunge gwaro idzva rinogona kushandiswazve rachengetwa.

## Mazano {#tips}

- Gara uchidzosa `WP_Error` pakundikana kuitira kuti Ultimate Multisite ikwanise kubata kuratidzwa kwemhosho
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Shandisa `wu_log_add()` pakunyora zvinyorwa zvakanangana negedhi

## Kugona kwevanopa AI connector {#ai-connector-provider-capabilities}

Kubatanidzwa kwakagadziridzwa kunodaidza mashandiro anotsigirwa neAI connector kunofanira kuenderana neseti yevanopa OAuth inotsigirwa yakaunzwa neAI Provider for Anthropic Max v1.3.0:

| Mupi | Manotsi ekugona |
|---|---|
| **Anthropic Max** | Inotsigira mafambiro aripo eOAuth account pool. Chengetedza Anthropic tool-use payloads, kusanganisira tool arrays dzisina chinhu uye round-trip thinking signatures, paunenge uchipfuudza zvikumbiro zveconnector. |
| **OpenAI ChatGPT/Codex** | Inotsigira mafambiro eOAuth pool uye maitiro akazara ekutsigira maturusi pamashandiro anotsigirwa neconnector. Pfuudza tool definitions uye tool-call results pasina kubvisa metadata yematurusi yakanangana neCodex. |
| **Google AI Pro** | Inotsigira mafambiro eOAuth pool uye kubatanidzwa kwemupi kunotsigirwa neSDK. Vandudza maakaundi emupi mushure mekupedzwa kweOAuth usati waendesa zvikumbiro. |

Kubatanidzwa kweCursor Pro nenzira dzekumisikidza zvabviswa. Usanyorese Cursor Pro semupi anosarudzwa kana kupa mirayiridzo yeOAuth yakanangana neCursor muUIs dzeconnector dzakagadziridzwa.

Kune nharaunda dzesandbox kana dzisina musoro, ratidza nzira yekudzokera kuOAuth yemanyuwari kuitira kuti vatungamiri vakwanise kunamira data rekubvumidza rakadzoserwa uye kupedzisa kubatanidza account pasina kuvimba nekudzoserwa otomatiki kwebrowser.
