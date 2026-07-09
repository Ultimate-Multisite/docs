---
title: Żvilupp ta' Gateway Personalizzat
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Żvilupp ta' Gateway Personalizzat

Tista' toħloq gateways ta' ħlas personalizzati billi testendi l-klassi `Base_Gateway`.

## Klassi Gateway

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

## Irreġistra l-Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metodi Ewlenin

| Metodu | Għan |
|--------|---------|
| `process_single_payment()` | Immaniġġja ħlasijiet ta' darba |
| `process_signup()` | Issettja abbonamenti rikorrenti |
| `process_refund()` | Immaniġġja talbiet għal rifużjoni |
| `get_payment_methods()` | Irritorna metodi ta' ħlas salvati għal klijent |

## Kredenzjali ta' tiġdid għal sħubijiet rikorrenti

Ultimate Multisite v2.13.0 jippermetti lill-integrazzjonijiet tal-gateway jirrapportaw jekk sħubija rikorrenti għandhiex kredenzjal ta' tiġdid li jista' jerġa' jintuża qabel ma `auto_renew` jiġi ppersistit. Qabbad `wu_membership_has_renewal_credential` u rritorna:

- `true` meta s-sħubija għandha abbonament tal-gateway, ftehim ta' billing, vault token, jew metodu ta' ħlas ekwivalenti li jista' jerġa' jintuża.
- `false` meta l-gateway jaf li l-kredenzjal rikorrenti huwa nieqes jew ma jistax jintuża.
- `null` biex tagħżel li ma tipparteċipax u żżomm l-imġiba predefinita mhux mibdula.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Meta gateway jirritorna `false`, Ultimate Multisite isalva s-sħubija b'tiġdid awtomatiku diżattivat u jaħżen marka ta' kredenzjal nieqes. Uża `wu_membership_renewal_credential_missing` biex tinnotifika lill-amministraturi, tibda fluss ta' awtorizzazzjoni mill-ġdid, jew iżżid noti ta' appoġġ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Neħħi l-marka ta' kredenzjal nieqes bħala parti mill-fluss ta' awtorizzazzjoni mill-ġdid b'suċċess tal-gateway tiegħek wara li kredenzjal ġdid li jista' jerġa' jintuża jinħażen.

## Pariri

- Dejjem irritorna `WP_Error` f'każ ta' falliment sabiex Ultimate Multisite ikun jista' jimmaniġġja l-wiri tal-iżbalji
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Uża `wu_log_add()` għal logging speċifiku għall-gateway

## Kapaċitajiet tal-fornitur tal-konnettur AI

Integrazzjonijiet personalizzati li jsejħu operazzjonijiet appoġġjati minn konnettur AI għandhom jallinjaw mas-sett ta' fornituri OAuth appoġġjat introdott ma' AI Provider for Anthropic Max v1.3.0:

| Fornitur | Noti dwar il-kapaċitajiet |
|---|---|
| **Anthropic Max** | Jappoġġja l-fluss tax-xogħol eżistenti tal-pool ta' Account OAuth. Ippreserva payloads tal-użu tal-għodod Anthropic, inklużi arrays ta' għodod vojta u firem ta' ħsieb bir-ritorn, meta tagħmel proxy ta' talbiet tal-konnettur. |
| **OpenAI ChatGPT/Codex** | Jappoġġja l-fluss tax-xogħol tal-pool OAuth u l-imġiba sħiħa ta' appoġġ għall-għodod għal operazzjonijiet appoġġjati mill-konnettur. Għaddi definizzjonijiet tal-għodod u riżultati ta' sejħiet tal-għodod mingħajr ma tneħħi metadata tal-għodod speċifika għal Codex. |
| **Google AI Pro** | Jappoġġja l-fluss tax-xogħol tal-pool OAuth u integrazzjoni ta' fornitur appoġġjata minn SDK. Aġġorna l-Accounts tal-fornitur wara t-tlestija ta' OAuth qabel ma tgħaddi t-talbiet. |

L-integrazzjoni u l-mogħdijiet ta' setup ta' Cursor Pro tneħħew. Tirreġistrax Cursor Pro bħala fornitur li jista' jintgħażel jew tippreżenta istruzzjonijiet OAuth speċifiċi għal Cursor f'UIs tal-konnettur personalizzati.

Għal ambjenti sandboxed jew headless, esponi l-mogħdija ta' fallback manwali ta' OAuth sabiex l-amministraturi jkunu jistgħu jwaħħlu d-dejta ta' awtorizzazzjoni rritornata u jlestu l-konnessjoni tal-Account mingħajr ma jiddependu fuq redirect awtomatiku tal-browser.
