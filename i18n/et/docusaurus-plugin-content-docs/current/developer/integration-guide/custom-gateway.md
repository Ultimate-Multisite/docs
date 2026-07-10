---
title: Kohandatud maksevärava arendus
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Kohandatud makselüüsi arendus {#custom-gateway-development}

Saate luua kohandatud makselüüse, laiendades `Base_Gateway` klassi.

## Lüüsi klass {#gateway-class}

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

## Registreeri lüüs {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Peamised meetodid {#key-methods}

| Meetod | Eesmärk |
|--------|---------|
| `process_single_payment()` | Käsitle ühekordseid makseid |
| `process_signup()` | Seadista korduvad tellimused |
| `process_refund()` | Käsitle tagasimaksetaotlusi |
| `get_payment_methods()` | Tagasta kliendi salvestatud makseviisid |

## Uuendamise mandaadid korduvatele liikmesustele {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 võimaldab lüüsi integratsioonidel teatada, kas korduval liikmesusel on korduskasutatav uuendamise mandaat enne, kui `auto_renew` salvestatakse. Haagi `wu_membership_has_renewal_credential` külge ja tagasta:

- `true`, kui liikmesusel on lüüsi tellimus, arvelduskokkulepe, vault token või samaväärne korduskasutatav makseviis.
- `false`, kui lüüs teab, et korduv mandaat puudub või ei ole kasutatav.
- `null`, et loobuda ja jätta vaikekäitumine muutmata.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kui lüüs tagastab `false`, salvestab Ultimate Multisite liikmesuse automaatse uuendamiseta ja talletab puuduva mandaadi märgise. Kasutage `wu_membership_renewal_credential_missing`, et teavitada administraatoreid, käivitada uuesti autoriseerimise voog või lisada tugimärkmeid:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Eemaldage puuduva mandaadi märgis oma lüüsi eduka uuesti autoriseerimise voo osana pärast uue korduskasutatava mandaadi salvestamist.

## Näpunäited {#tips}

- Tagastage ebaõnnestumise korral alati `WP_Error`, et Ultimate Multisite saaks veateate kuvamist käsitleda
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Kasutage lüüsipõhiseks logimiseks `wu_log_add()`

## AI connectori teenusepakkuja võimekused {#ai-connector-provider-capabilities}

Kohandatud integratsioonid, mis kutsuvad AI connectori toetatud toiminguid, peaksid joonduma toetatud OAuth teenusepakkujate kogumiga, mis tutvustati AI Provider for Anthropic Max v1.3.0-ga:

| Teenusepakkuja | Võimekuse märkused |
|---|---|
| **Anthropic Max** | Toetab olemasolevat OAuth konto pool töövoogu. Säilitage Anthropic tööriistakasutuse payloadid, sealhulgas tühjad tööriistamassiivid ja edasi-tagasi mõtlemise signatuurid, kui vahendate connectori päringuid. |
| **OpenAI ChatGPT/Codex** | Toetab OAuth pool töövoogu ja täielikku tööriistatoe käitumist connectori toetatud toimingute jaoks. Edastage tööriistade definitsioonid ja tööriistakutse tulemused ilma Codexi-spetsiifilist tööriistametaandmeid eemaldamata. |
| **Google AI Pro** | Toetab OAuth pool töövoogu ja SDK-toega teenusepakkuja integratsiooni. Värskendage teenusepakkuja kontosid pärast OAuthi lõpetamist enne päringute suunamist. |

Cursor Pro integratsioon ja seadistusteed on eemaldatud. Ärge registreerige Cursor Pro-d valitava teenusepakkujana ega esitage kohandatud connectori UI-des Cursor-spetsiifilisi OAuth juhiseid.

Liivakasti- või headless-keskkondade jaoks tooge esile käsitsi OAuth varutee, et administraatorid saaksid kleepida tagastatud autoriseerimisandmed ja viia konto ühendamise lõpule ilma automaatsele brauseri ümbersuunamisele tuginemata.
