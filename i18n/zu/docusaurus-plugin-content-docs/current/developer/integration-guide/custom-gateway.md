---
title: Ukuthuthukiswa Kwesango Ngokwezifiso
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Ukuthuthukiswa Kwesango Ngokwezifiso {#custom-gateway-development}

Ungakha amasango okukhokha ngokwezifiso ngokwelula ikilasi le-`Base_Gateway`.

## Ikilasi Lesango {#gateway-class}

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

## Bhalisa Isango {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Izindlela Ezisemqoka {#key-methods}

| Indlela | Inhloso |
|--------|---------|
| `process_single_payment()` | Phatha izinkokhelo zesikhathi esisodwa |
| `process_signup()` | Setha okubhaliselwe okuphindaphindayo |
| `process_refund()` | Phatha izicelo zokubuyiselwa imali |
| `get_payment_methods()` | Buyisa izindlela zokukhokha ezigciniwe zekhasimende |

## Imininingwane yokuqinisekisa yokuvuselela yobulungu obuphindaphindayo {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ivumela ukuhlanganiswa kwamasango ukuthi kubike ukuthi ubulungu obuphindaphindayo bunayo yini imininingwane yokuqinisekisa yokuvuselela ephinde isetshenziswe ngaphambi kokuba i-`auto_renew` igcinwe. Xhuma ku-`wu_membership_has_renewal_credential` bese ubuyisa:

- `true` lapho ubulungu bunokubhaliselwe kwesango, isivumelwano sokukhokhisa, ithokheni ye-vault, noma indlela yokukhokha elinganayo ephinde isetshenziswe.
- `false` lapho isango lazi ukuthi imininingwane yokuqinisekisa ephindaphindayo ayikho noma ayisebenziseki.
- `null` ukuze uphume futhi ugcine ukuziphatha okuzenzakalelayo kungashintshiwe.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Lapho isango libuyisa `false`, Ultimate Multisite igcina ubulungu ngokuvuselela okuzenzakalelayo kukhutshaziwe futhi igcina umaki wemininingwane yokuqinisekisa engekho. Sebenzisa `wu_membership_renewal_credential_missing` ukuze wazise abaphathi, uqale ukugeleza kokugunyazwa kabusha, noma wengeze amanothi okusekela:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Sula umaki wemininingwane yokuqinisekisa engekho njengengxenye yokugeleza okuphumelelayo kokugunyazwa kabusha kwesango lakho ngemva kokuba imininingwane yokuqinisekisa entsha ephinde isetshenziswe isigciniwe.

## Amacebiso {#tips}

- Njalo buyisa `WP_Error` lapho kwehlulekile ukuze Ultimate Multisite ikwazi ukuphatha ukuboniswa kwephutha
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Sebenzisa `wu_log_add()` ukuze wenze ukuloga okuqondene nesango

## Amakhono abahlinzeki besixhumi se-AI {#ai-connector-provider-capabilities}

Ukuhlanganiswa ngokwezifiso okubiza imisebenzi esekelwa yisixhumi se-AI kufanele kuhambisane nesethi yomhlinzeki we-OAuth esekelwayo eyethulwe nge-AI Provider for Anthropic Max v1.3.0:

| Umhlinzeki | Amanothi amakhono |
|---|---|
| **Anthropic Max** | Isekela ukugeleza komsebenzi okukhona kwechibi lama-Account e-OAuth. Londoloza ama-payload okusebenzisa amathuluzi e-Anthropic, okuhlanganisa ama-array amathuluzi angenalutho namasiginesha okucabanga ajikeleza abuye, lapho udlulisa izicelo zesixhumi. |
| **OpenAI ChatGPT/Codex** | Isekela ukugeleza komsebenzi kwechibi le-OAuth nokuziphatha okuphelele kokusekelwa kwamathuluzi kwemisebenzi esekelwa yisixhumi. Dlulisa izincazelo zamathuluzi nemiphumela yokubizwa kwamathuluzi ngaphandle kokususa imethadatha yamathuluzi eqondene ne-Codex. |
| **Google AI Pro** | Isekela ukugeleza komsebenzi kwechibi le-OAuth nokuhlanganiswa komhlinzeki okusekelwa yi-SDK. Vuselela ama-Account omhlinzeki ngemva kokuqedwa kwe-OAuth ngaphambi kokuqondisa izicelo. |

Ukuhlanganiswa kwe-Cursor Pro nezindlela zokusetha zisusiwe. Ungabhalisi i-Cursor Pro njengomhlinzeki ongakhethwa noma wethule imiyalelo ye-OAuth eqondene ne-Cursor kuma-UI esixhumi ngokwezifiso.

Ezindaweni ze-sandbox noma ezingenakhanda, veza indlela yokubuyela emuva ye-OAuth eyenziwa ngesandla ukuze abaphathi bakwazi ukunamathisela idatha yokugunyazwa ebuyisiwe futhi baqedele ukuxhumeka kwe-Account ngaphandle kokuncika ekuqondisweni kabusha kwesiphequluli okuzenzakalelayo.
