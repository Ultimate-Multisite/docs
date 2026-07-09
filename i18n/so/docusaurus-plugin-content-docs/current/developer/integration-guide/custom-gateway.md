---
title: Horumarinta Gateway-ka La Habeeyey
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Horumarinta Albaabka Lacag-bixinta ee Gaarka ah

Waxaad abuuri kartaa albaabbo lacag-bixineed oo gaar ah adigoo ballaarinaya class-ka `Base_Gateway`.

## Class-ka Gateway

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

## Diiwaangeli Gateway-ka

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Hababka Muhiimka ah

| Hab | Ujeeddo |
|--------|---------|
| `process_single_payment()` | Maaree lacag-bixinnada hal-mar ah |
| `process_signup()` | Deji subscriptions soo-noqnoqda |
| `process_refund()` | Maaree codsiyada lacag-celinta |
| `get_payment_methods()` | Soo celi hababka lacag-bixinta ee loo kaydiyay macmiil |

## Aqoonsiyada cusboonaysiinta ee memberships soo-noqnoqda

Ultimate Multisite v2.13.0 waxay u oggolaanaysaa isku-xirnaanta gateway inay soo sheegaan haddii membership soo-noqnoqda uu leeyahay aqoonsi cusboonaysiin dib loo isticmaali karo ka hor inta aan `auto_renew` la kaydin. Hook `wu_membership_has_renewal_credential` oo soo celi:

- `true` marka membership-ku leeyahay subscription gateway, heshiis biil-bixin, vault token, ama hab lacag-bixineed u dhigma oo dib loo isticmaali karo.
- `false` marka gateway-ku ogyahay in aqoonsiga soo-noqnoqda uu maqan yahay ama aan la isticmaali karin.
- `null` si aad uga baxdo oo aad u ilaaliso hab-dhaqanka caadiga ah inuusan isbeddelin.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Marka gateway uu soo celiyo `false`, Ultimate Multisite waxay membership-ka ku kaydisaa auto-renewal oo naafo ah waxayna kaydisaa calaamad aqoonsi maqan. Isticmaal `wu_membership_renewal_credential_missing` si aad u ogeysiiso maamulayaasha, u bilowdo socod dib-u-oggolaansho, ama ugu darto qoraallo taageero:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Nadiifi calaamadda aqoonsiga maqan iyadoo qayb ka ah socodka dib-u-oggolaanshaha guulaystay ee gateway-kaaga ka dib marka aqoonsi cusub oo dib loo isticmaali karo la kaydiyo.

## Talooyin

- Had iyo jeer soo celi `WP_Error` marka fashil dhaco si Ultimate Multisite ay u maareyn karto muujinta qaladka
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Isticmaal `wu_log_add()` diiwaangelinta u gaar ah gateway

## Awoodaha bixiyaha isku-xiraha AI

Isku-xirnaanta gaarka ah ee waca hawlgallada ku tiirsan isku-xiraha AI waa inay la jaanqaadaan qaybta bixiyeyaasha OAuth ee la taageero ee lagu soo bandhigay AI Provider for Anthropic Max v1.3.0:

| Bixiye | Qoraallada awoodda |
|---|---|
| **Anthropic Max** | Waxay taageertaa socodka jira ee kaydka Account OAuth. Ilaali payloads-ka isticmaalka qalabka ee Anthropic, oo ay ku jiraan arrays qalab oo madhan iyo saxiixyada fikirka ee wareegga-noqoshada, markaad wakiil uga tahay codsiyada isku-xiraha. |
| **OpenAI ChatGPT/Codex** | Waxay taageertaa socodka kaydka OAuth iyo hab-dhaqanka taageerada qalabka oo buuxa ee hawlgallada ay isku-xiruhu taageeraan. Gudbi qeexitaannada qalabka iyo natiijooyinka tool-call adigoon ka saarin metadata-ga qalabka ee u gaarka ah Codex. |
| **Google AI Pro** | Waxay taageertaa socodka kaydka OAuth iyo isku-xirnaanta bixiye ee ku tiirsan SDK. Cusboonaysii accounts-ka bixiyaha ka dib dhammaystirka OAuth ka hor inta aan codsiyada la marin. |

Isku-xirnaanta Cursor Pro iyo waddooyinkii dejinta waa la saaray. Ha u diiwaangelin Cursor Pro inuu yahay bixiye la dooran karo hana ku soo bandhigin tilmaamaha OAuth ee u gaarka ah Cursor gudaha UIs isku-xiraha gaarka ah.

Deegaannada sandboxed ama headless ah, muuji waddada beddelka gacanta ee OAuth si maamulayaashu u dhejin karaan xogta oggolaanshaha ee la soo celiyay oo ay u dhammaystiraan isku-xirka Account iyaga oo aan ku tiirsanaan browser redirect otomaatig ah.
