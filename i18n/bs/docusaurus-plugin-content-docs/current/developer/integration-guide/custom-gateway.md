---
title: Razvoj prilagođenog gatewaya
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Razvoj prilagođenog gatewaya

Možete kreirati prilagođene gatewaye za plaćanje proširivanjem klase `Base_Gateway`.

## Klasa gatewaya

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

## Registracija gatewaya

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ključne metode

| Metoda | Svrha |
|--------|---------|
| `process_single_payment()` | Obrada jednokratnih plaćanja |
| `process_signup()` | Postavljanje ponavljajućih pretplata |
| `process_refund()` | Obrada zahtjeva za povrat novca |
| `get_payment_methods()` | Vraća sačuvane metode plaćanja za kupca |

## Akreditivi za obnovu za ponavljajuća članstva

Ultimate Multisite v2.13.0 omogućava gateway integracijama da prijave da li ponavljajuće članstvo ima višekratno upotrebljiv akreditiv za obnovu prije nego što se `auto_renew` trajno sačuva. Zakačite se na `wu_membership_has_renewal_credential` i vratite:

- `true` kada članstvo ima gateway pretplatu, ugovor o naplati, vault token ili ekvivalentnu višekratno upotrebljivu metodu plaćanja.
- `false` kada gateway zna da ponavljajući akreditiv nedostaje ili je neupotrebljiv.
- `null` da odustanete i ostavite zadano ponašanje nepromijenjenim.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kada gateway vrati `false`, Ultimate Multisite sprema članstvo s onemogućenom automatskom obnovom i pohranjuje oznaku nedostajućeg akreditiva. Koristite `wu_membership_renewal_credential_missing` da obavijestite administratore, pokrenete tok ponovne autorizacije ili dodate napomene za podršku:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Očistite oznaku nedostajućeg akreditiva kao dio uspješnog toka ponovne autorizacije vašeg gatewaya nakon što se pohrani novi višekratno upotrebljiv akreditiv.

## Savjeti

- Uvijek vratite `WP_Error` pri neuspjehu kako bi Ultimate Multisite mogao obraditi prikaz greške
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Koristite `wu_log_add()` za evidentiranje specifično za gateway

## Mogućnosti provajdera AI konektora

Prilagođene integracije koje pozivaju operacije podržane AI konektorom trebaju se uskladiti s podržanim skupom OAuth provajdera uvedenim s AI Provider for Anthropic Max v1.3.0:

| Provajder | Napomene o mogućnostima |
|---|---|
| **Anthropic Max** | Podržava postojeći tok rada OAuth skupa Accounta. Sačuvajte Anthropic payloadove za korištenje alata, uključujući prazne nizove alata i povratne potpise razmišljanja, kada prosljeđujete zahtjeve konektora preko proxyja. |
| **OpenAI ChatGPT/Codex** | Podržava tok rada OAuth skupa i potpuno ponašanje podrške za alate za operacije koje podržava konektor. Proslijedite definicije alata i rezultate poziva alata bez uklanjanja metapodataka alata specifičnih za Codex. |
| **Google AI Pro** | Podržava tok rada OAuth skupa i integraciju provajdera podržanu SDK-om. Osvježite Account provajdera nakon završetka OAutha prije usmjeravanja zahtjeva. |

Integracija i putevi postavljanja za Cursor Pro su uklonjeni. Nemojte registrovati Cursor Pro kao provajdera koji se može odabrati niti prikazivati OAuth upute specifične za Cursor u prilagođenim korisničkim sučeljima konektora.

Za sandbox ili headless okruženja, omogućite ručnu OAuth rezervnu putanju kako bi administratori mogli zalijepiti vraćene autorizacijske podatke i dovršiti povezivanje Accounta bez oslanjanja na automatsko preusmjeravanje preglednika.
