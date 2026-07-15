---
title: Pielāgotas vārtejas izstrāde
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pielāgotas maksājumu vārtejas izstrāde

Varat izveidot pielāgotas maksājumu vārtejas, paplašinot `Base_Gateway` klasi.

## Vārtejas klase {#gateway-class}

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

## Reģistrēt vārteju {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Galvenās metodes {#key-methods}

| Metode | Mērķis |
|--------|---------|
| `process_single_payment()` | Apstrādāt vienreizējus maksājumus |
| `process_signup()` | Iestatīt periodiskus abonementus |
| `process_refund()` | Apstrādāt atmaksas pieprasījumus |
| `get_payment_methods()` | Atgriezt saglabātās maksājumu metodes klientam |

## Atjaunošanas akreditācijas dati periodiskām dalībām {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ļauj vārtejas integrācijām ziņot, vai periodiskai dalībai ir atkārtoti izmantojami atjaunošanas akreditācijas dati, pirms tiek saglabāts `auto_renew`. Piesaistiet `wu_membership_has_renewal_credential` un atgrieziet:

- `true`, ja dalībai ir vārtejas abonements, norēķinu līgums, glabātuves tokens vai līdzvērtīga atkārtoti izmantojama maksājumu metode.
- `false`, ja vārteja zina, ka periodiskie akreditācijas dati trūkst vai nav lietojami.
- `null`, lai atteiktos un saglabātu noklusējuma darbību nemainīgu.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kad vārteja atgriež `false`, Ultimate Multisite saglabā dalību ar atspējotu automātisko atjaunošanu un saglabā trūkstošu akreditācijas datu marķieri. Izmantojiet `wu_membership_renewal_credential_missing`, lai informētu administratorus, sāktu atkārtotas autorizācijas plūsmu vai pievienotu atbalsta piezīmes:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Notīriet trūkstošu akreditācijas datu marķieri kā daļu no jūsu vārtejas veiksmīgas atkārtotas autorizācijas plūsmas pēc tam, kad ir saglabāti jauni atkārtoti izmantojami akreditācijas dati.

## Padomi {#tips}

- Kļūmes gadījumā vienmēr atgrieziet `WP_Error`, lai Ultimate Multisite varētu apstrādāt kļūdas attēlošanu
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Izmantojiet `wu_log_add()` vārtejai specifiskai žurnalēšanai

## AI savienotāja nodrošinātāja iespējas {#ai-connector-provider-capabilities}

Pielāgotām integrācijām, kas izsauc AI savienotāja nodrošinātas darbības, jābūt saskaņotām ar atbalstīto OAuth nodrošinātāju kopu, kas ieviesta ar AI Provider for Anthropic Max v1.3.0:

| Nodrošinātājs | Iespēju piezīmes |
|---|---|
| **Anthropic Max** | Atbalsta esošo OAuth kontu kopas darbplūsmu. Starpniekojot savienotāja pieprasījumus, saglabājiet Anthropic rīku izmantošanas slodzes, tostarp tukšus rīku masīvus un turp-atpakaļ domāšanas parakstus. |
| **OpenAI ChatGPT/Codex** | Atbalsta OAuth kopas darbplūsmu un pilnu rīku atbalsta darbību savienotāja atbalstītām operācijām. Nododiet tālāk rīku definīcijas un rīku izsaukumu rezultātus, nenoņemot Codex specifiskos rīku metadatus. |
| **Google AI Pro** | Atbalsta OAuth kopas darbplūsmu un SDK balstītu nodrošinātāja integrāciju. Pēc OAuth pabeigšanas atsvaidziniet nodrošinātāju kontus, pirms maršrutējat pieprasījumus. |

Cursor Pro integrācija un iestatīšanas ceļi ir noņemti. Nereģistrējiet Cursor Pro kā atlasāmu nodrošinātāju un nerādiet Cursor specifiskas OAuth instrukcijas pielāgotās savienotāja UI.

Smilškastes vai bezgalvas vidēm atklājiet manuālo OAuth rezerves ceļu, lai administratori varētu ielīmēt atgrieztos autorizācijas datus un pabeigt konta savienošanu, nepaļaujoties uz automātisku pārlūka novirzīšanu.
