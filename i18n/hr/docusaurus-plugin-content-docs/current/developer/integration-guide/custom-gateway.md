---
title: Razvoj prilagođenog pristupnika
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Razvoj prilagođenog Gatewaya {#custom-gateway-development}

Možete izraditi prilagođene platne gatewaye proširivanjem klase `Base_Gateway`.

## Klasa Gatewaya {#gateway-class}

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

## Registrirajte Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ključne metode {#key-methods}

| Metoda | Svrha |
|--------|---------|
| `process_single_payment()` | Obrada jednokratnih plaćanja |
| `process_signup()` | Postavljanje ponavljajućih pretplata |
| `process_refund()` | Obrada zahtjeva za povrat sredstava |
| `get_payment_methods()` | Vraćanje spremljenih načina plaćanja za kupca |

## Vjerodajnice za obnovu za ponavljajuća članstva {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 omogućuje integracijama gatewaya da prijave ima li ponavljajuće članstvo ponovno upotrebljivu vjerodajnicu za obnovu prije nego što se `auto_renew` trajno spremi. Zakačite se na `wu_membership_has_renewal_credential` i vratite:

- `true` kada članstvo ima gateway pretplatu, ugovor o naplati, vault token ili ekvivalentan ponovno upotrebljiv način plaćanja.
- `false` kada gateway zna da vjerodajnica za ponavljanje nedostaje ili nije upotrebljiva.
- `null` za odustajanje i zadržavanje zadanog ponašanja nepromijenjenim.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kada gateway vrati `false`, Ultimate Multisite sprema članstvo s onemogućenom automatskom obnovom i pohranjuje oznaku nedostajuće vjerodajnice. Upotrijebite `wu_membership_renewal_credential_missing` za obavještavanje administratora, pokretanje tijeka ponovne autorizacije ili dodavanje bilješki za podršku:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Očistite oznaku nedostajuće vjerodajnice kao dio uspješnog tijeka ponovne autorizacije vašeg gatewaya nakon što se pohrani nova ponovno upotrebljiva vjerodajnica.

## Savjeti {#tips}

- Uvijek vratite `WP_Error` pri neuspjehu kako bi Ultimate Multisite mogao obraditi prikaz pogreške
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Upotrijebite `wu_log_add()` za zapisivanje specifično za gateway

## Mogućnosti pružatelja AI konektora {#ai-connector-provider-capabilities}

Prilagođene integracije koje pozivaju operacije podržane AI konektorom trebaju se uskladiti s podržanim skupom OAuth pružatelja uvedenim s AI Provider for Anthropic Max v1.3.0:

| Pružatelj | Napomene o mogućnostima |
|---|---|
| **Anthropic Max** | Podržava postojeći tijek rada skupa OAuth računa. Očuvajte Anthropic payloadove za upotrebu alata, uključujući prazne nizove alata i potpise razmišljanja za povratni tijek, pri proxyjanju zahtjeva konektora. |
| **OpenAI ChatGPT/Codex** | Podržava tijek rada OAuth skupa i potpuno ponašanje podrške za alate za operacije koje podržava konektor. Proslijedite definicije alata i rezultate poziva alata bez uklanjanja metapodataka alata specifičnih za Codex. |
| **Google AI Pro** | Podržava tijek rada OAuth skupa i integraciju pružatelja podržanu SDK-om. Osvježite račune pružatelja nakon dovršetka OAutha prije usmjeravanja zahtjeva. |

Integracija i putevi postavljanja za Cursor Pro uklonjeni su. Nemojte registrirati Cursor Pro kao pružatelja koji se može odabrati niti prikazivati OAuth upute specifične za Cursor u prilagođenim korisničkim sučeljima konektora.

Za sandbox ili headless okruženja izložite ručni rezervni OAuth put kako bi administratori mogli zalijepiti vraćene autorizacijske podatke i dovršiti povezivanje računa bez oslanjanja na automatsko preusmjeravanje preglednika.
