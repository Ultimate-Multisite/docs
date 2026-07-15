---
title: Uphuhliso lweSango eliLungiselelweyo
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Uphuhliso lwe-Custom Gateway

Ungadala ii-gateway zentlawulo ezenzelwe wena ngokwandisa iklasi `Base_Gateway`.

## Iklasi ye-Gateway {#gateway-class}

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

## Bhalisa i-Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Iindlela Ezibalulekileyo {#key-methods}

| Indlela | Injongo |
|--------|---------|
| `process_single_payment()` | Phatha iintlawulo zexesha elinye |
| `process_signup()` | Misela imirhumo ephindaphindayo |
| `process_refund()` | Phatha izicelo zokubuyiselwa imali |
| `get_payment_methods()` | Buyisela iindlela zentlawulo ezigciniweyo zomthengi |

## Iinkcukacha zokuqinisekisa ukuvuselelwa kobulungu obuphindaphindayo {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ivumela udibaniso lwe-gateway ukuba luxele ukuba ubulungu obuphindaphindayo bunenkcukacha yokuqinisekisa ukuvuselelwa enokusetyenziswa kwakhona phambi kokuba `auto_renew` igcinwe. Hook `wu_membership_has_renewal_credential` uze ubuyise:

- `true` xa ubulungu bunomrhumo we-gateway, isivumelwano sentlawulo, vault token, okanye indlela yentlawulo efanayo enokusetyenziswa kwakhona.
- `false` xa i-gateway isazi ukuba iinkcukacha zokuqinisekisa eziphindaphindayo azikho okanye azinakusetyenziswa.
- `null` ukuphuma uze ugcine indlela yokuziphatha engagqibekanga ingatshintshanga.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Xa i-gateway ibuyisa `false`, Ultimate Multisite igcina ubulungu ngokuvuselela ngokuzenzekelayo kucinyiwe kwaye igcina umakisheli weenkcukacha zokuqinisekisa ezingekhoyo. Sebenzisa `wu_membership_renewal_credential_missing` ukwazisa abalawuli, ukuqala inkqubo yokugunyazisa kwakhona, okanye ukongeza amanqaku enkxaso:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Cima umakisheli weenkcukacha zokuqinisekisa ezingekhoyo njengenxalenye yenkqubo ye-gateway yakho ephumeleleyo yokugunyazisa kwakhona emva kokuba kugcinwe iinkcukacha ezintsha ezinokusetyenziswa kwakhona.

## Iingcebiso {#tips}

- Soloko ubuyisa `WP_Error` xa kusilela ukuze Ultimate Multisite ikwazi ukuphatha ukuboniswa kweempazamo
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Sebenzisa `wu_log_add()` ukurekhoda okuthile kwe-gateway

## Izakhono zomboneleli wesidibanisi se-AI {#ai-connector-provider-capabilities}

Udibaniso olwenzelwe wena olubiza imisebenzi exhaswa sisidibanisi se-AI kufuneka luhambelane neseti exhaswayo yababoneleli be-OAuth eyaziswa nge-AI Provider ye-Anthropic Max v1.3.0:

| Umboneleli | Amanqaku ezakhono |
|---|---|
| **Anthropic Max** | Ixhasa inkqubo ekhoyo yequla le-Account ye-OAuth. Gcina imithwalo ye-Anthropic yokusebenzisa izixhobo, kuquka uluhlu lwezixhobo olungenanto kunye neesignature zokucinga ezijikelezayo, xa uthumela izicelo zesidibanisi nge-proxy. |
| **OpenAI ChatGPT/Codex** | Ixhasa inkqubo yequla le-OAuth kunye nokuziphatha okupheleleyo kwenkxaso yezixhobo kwimisebenzi exhaswa sisidibanisi. Dlulisa iinkcazo zezixhobo kunye neziphumo zokubizwa kwezixhobo ngaphandle kokususa imetadata yezixhobo ekhethekileyo ye-Codex. |
| **Google AI Pro** | Ixhasa inkqubo yequla le-OAuth kunye nodibaniso lomboneleli oluxhaswa yi-SDK. Hlaziya ii-Account zomboneleli emva kokugqitywa kwe-OAuth phambi kokuhambisa izicelo. |

Udibaniso lwe-Cursor Pro kunye neendlela zokuseta zisusiwe. Musa ukubhalisa i-Cursor Pro njengomboneleli onokukhethwa okanye ukubonisa imiyalelo ye-OAuth ekhethekileyo ye-Cursor kwii-UI zesidibanisi ezenzelwe wena.

Kwiimeko-bume ze-sandbox okanye ezingenantloko, bonisa indlela yokubuyela umva ye-OAuth yesandla ukuze abalawuli bancamathisele idatha yokugunyazisa ebuyisiweyo baze bagqibe uqhagamshelo lwe-Account ngaphandle kokuxhomekeka ekuthunyelweni kwakhona kwesikhangeli okuzenzekelayo.
