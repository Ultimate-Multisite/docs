---
title: Razvoj plačilnega prehoda po meri
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Razvoj Custom Gateway

Ustvarite lahko prilagojene plačilne prehode z razširitvijo razreda `Base_Gateway`.

## Razred Gateway

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

## Registrirajte Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ključne metode

| Metoda | Namen |
|--------|---------|
| `process_single_payment()` | Obdelajte enkratna plačila |
| `process_signup()` | Nastavite ponavljajoče se naročnine |
| `process_refund()` | Obdelajte zahtevke za vračilo |
| `get_payment_methods()` | Vrnite shranjene plačilne metode za stranko |

## Poverilnice za obnovitev pri ponavljajočih se članstvih

Ultimate Multisite v2.13.0 integracijam gateway omogoča poročanje, ali ima ponavljajoče se članstvo ponovno uporabljivo poverilnico za obnovitev, preden se `auto_renew` shrani. Uporabite hook `wu_membership_has_renewal_credential` in vrnite:

- `true`, ko ima članstvo naročnino gateway, pogodbo o obračunavanju, vault token ali enakovredno ponovno uporabljivo plačilno metodo.
- `false`, ko gateway ve, da poverilnica za ponavljanje manjka ali je neuporabna.
- `null`, da se odjavite in ohranite privzeto vedenje nespremenjeno.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Ko gateway vrne `false`, Ultimate Multisite shrani članstvo z onemogočeno samodejno obnovitvijo in shrani oznako manjkajoče poverilnice. Uporabite `wu_membership_renewal_credential_missing`, da obvestite administratorje, zaženete potek ponovne avtorizacije ali dodate opombe za podporo:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Po uspešnem poteku ponovne avtorizacije vašega gateway, ko je shranjena nova ponovno uporabna poverilnica, počistite oznako manjkajoče poverilnice.

## Nasveti

- Ob napaki vedno vrnite `WP_Error`, da lahko Ultimate Multisite obravnava prikaz napak
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Uporabite `wu_log_add()` za beleženje, specifično za gateway

## Zmožnosti ponudnika AI connector

Prilagojene integracije, ki kličejo operacije, podprte z AI connector, morajo biti usklajene s podprtim naborom ponudnikov OAuth, uvedenim z AI Provider for Anthropic Max v1.3.0:

| Ponudnik | Opombe o zmožnostih |
|---|---|
| **Anthropic Max** | Podpira obstoječi potek dela z zalogo OAuth Account. Pri posredovanju zahtev connector ohranite obremenitve Anthropic tool-use, vključno s praznimi polji orodij in povratnimi podpisi razmišljanja. |
| **OpenAI ChatGPT/Codex** | Podpira potek dela z zalogo OAuth in polno vedenje podpore orodjem za operacije, ki jih podpira connector. Definicije orodij in rezultate klicev orodij posredujte naprej, ne da bi odstranili metapodatke orodij, specifične za Codex. |
| **Google AI Pro** | Podpira potek dela z zalogo OAuth in integracijo ponudnika, podprto s SDK. Po dokončanju OAuth osvežite račune ponudnika, preden usmerite zahteve. |

Integracija Cursor Pro in poti nastavitve so bile odstranjene. Cursor Pro ne registrirajte kot izbirnega ponudnika in v prilagojenih uporabniških vmesnikih connector ne prikazujte navodil OAuth, specifičnih za Cursor.

Za peskovniška ali brezglava okolja izpostavite ročno nadomestno pot OAuth, da lahko administratorji prilepijo vrnjene avtorizacijske podatke in dokončajo povezavo Account brez zanašanja na samodejno preusmeritev brskalnika.
