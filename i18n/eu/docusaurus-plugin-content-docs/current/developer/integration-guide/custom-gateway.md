---
title: Pasabide pertsonalizatuaren garapena
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Gateway pertsonalizatuen garapena

Ordainketa-gateway pertsonalizatuak sor ditzakezu `Base_Gateway` klasea hedatuz.

## Gateway klasea {#gateway-class}

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

## Erregistratu Gateway-a {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metodo nagusiak {#key-methods}

| Metodoa | Helburua |
|--------|---------|
| `process_single_payment()` | Behin bakarriko ordainketak kudeatu |
| `process_signup()` | Harpidetza errepikariak konfiguratu |
| `process_refund()` | Itzulketa-eskaerak kudeatu |
| `get_payment_methods()` | Bezero baten gordetako ordainketa-metodoak itzuli |

## Kidetza errepikarietarako berritze-kredentzialak {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0-k gateway integrazioei aukera ematen die adierazteko kidetza errepikari batek berrerabil daitekeen berritze-kredentzial bat duen ala ez, `auto_renew` iraunarazi aurretik. Lotu `wu_membership_has_renewal_credential` eta itzuli:

- `true` kidetzak gateway harpidetza, fakturazio-akordioa, vault token-a edo pareko berrerabil daitekeen ordainketa-metodo bat duenean.
- `false` gateway-ak badakienean kredentzial errepikaria falta dela edo ezin dela erabili.
- `null` kanpoan geratzeko eta portaera lehenetsia aldatu gabe mantentzeko.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway batek `false` itzultzen duenean, Ultimate Multisite-k kidetza auto-berritzea desgaituta gordetzen du eta falta den kredentzialaren markatzaile bat gordetzen du. Erabili `wu_membership_renewal_credential_missing` administratzaileei jakinarazteko, berriro baimentzeko fluxu bat hasteko edo laguntza-oharrak gehitzeko:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Garbitu falta den kredentzialaren markatzailea zure gateway-aren berriro baimentzeko fluxu arrakastatsuaren parte gisa, berrerabil daitekeen kredentzial berri bat gorde ondoren.

## Aholkuak {#tips}

- Hutsegitean, itzuli beti `WP_Error`, Ultimate Multisite-k errorearen bistaratzea kudeatu ahal izan dezan
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Erabili `wu_log_add()` gateway-ari berariazko erregistroetarako

## AI konektore-hornitzaileen gaitasunak {#ai-connector-provider-capabilities}

AI connector-ean oinarritutako eragiketak deitzen dituzten integrazio pertsonalizatuek AI Provider for Anthropic Max v1.3.0-rekin sartutako OAuth hornitzaileen multzo onartuarekin bat etorri behar dute:

| Hornitzailea | Gaitasun-oharrak |
|---|---|
| **Anthropic Max** | Lehendik dagoen OAuth kontu-poolaren lan-fluxua onartzen du. Gorde Anthropic-en tresna-erabilera kargak, tresna-matrize hutsak eta joan-etorriko pentsamendu-sinadurak barne, konektore-eskaerak proxytzean. |
| **OpenAI ChatGPT/Codex** | OAuth pool lan-fluxua eta tresna-euskarri osoa onartzen ditu konektoreak onartutako eragiketetarako. Pasatu tresna-definizioak eta tresna-deien emaitzak, Codex-i berariazko tresna-metadatuak kendu gabe. |
| **Google AI Pro** | OAuth pool lan-fluxua eta SDK-n oinarritutako hornitzaile-integrazioa onartzen ditu. Freskatu hornitzaile-kontuak OAuth osatu ondoren eskaerak bideratu aurretik. |

Cursor Pro integrazioa eta konfigurazio-bideak kendu dira. Ez erregistratu Cursor Pro hornitzaile hautagarri gisa, eta ez aurkeztu Cursor-i berariazko OAuth argibiderik konektore-UI pertsonalizatuetan.

Sandbox edo headless inguruneetarako, azaldu eskuzko OAuth ordezko bidea, administratzaileek itzulitako baimen-datuak itsatsi eta kontu-konexioa osatu ahal izan dezaten arakatzailearen birbideratze automatiko batean oinarritu gabe.
