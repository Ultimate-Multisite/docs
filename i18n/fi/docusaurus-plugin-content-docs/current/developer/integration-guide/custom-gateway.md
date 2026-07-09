---
title: Mukautetun maksuvälityspalvelun kehitys
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Mukautetun maksuyhdyskäytävän kehitys

Voit luoda mukautettuja maksuyhdyskäytäviä laajentamalla `Base_Gateway`-luokkaa.

## Maksuyhdyskäytävän luokka

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

## Rekisteröi maksuyhdyskäytävä

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Keskeiset metodit

| Metodi | Tarkoitus |
|--------|---------|
| `process_single_payment()` | Käsittele kertamaksut |
| `process_signup()` | Määritä toistuvat tilaukset |
| `process_refund()` | Käsittele hyvityspyynnöt |
| `get_payment_methods()` | Palauta asiakkaan tallennetut maksutavat |

## Uusimistunnistetiedot toistuville jäsenyyksille

Ultimate Multisite v2.13.0 sallii maksuyhdyskäytäväintegraatioiden ilmoittaa, onko toistuvalla jäsenyydellä uudelleenkäytettävä uusimistunnistetieto ennen kuin `auto_renew` tallennetaan. Kytke `wu_membership_has_renewal_credential` ja palauta:

- `true`, kun jäsenyydellä on maksuyhdyskäytävän tilaus, laskutussopimus, holvitunnus tai vastaava uudelleenkäytettävä maksutapa.
- `false`, kun maksuyhdyskäytävä tietää, että toistuva tunnistetieto puuttuu tai ei ole käytettävissä.
- `null`, jos haluat jättäytyä pois ja pitää oletustoiminnan muuttumattomana.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kun maksuyhdyskäytävä palauttaa `false`, Ultimate Multisite tallentaa jäsenyyden automaattinen uusinta poistettuna käytöstä ja tallentaa puuttuvan tunnistetiedon merkinnän. Käytä `wu_membership_renewal_credential_missing`-hookia ilmoittaaksesi ylläpitäjille, käynnistääksesi uudelleenvaltuutusprosessin tai lisätäksesi tukimuistiinpanoja:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Tyhjennä puuttuvan tunnistetiedon merkintä osana maksuyhdyskäytäväsi onnistunutta uudelleenvaltuutusprosessia sen jälkeen, kun uusi uudelleenkäytettävä tunnistetieto on tallennettu.

## Vinkit

- Palauta aina `WP_Error` epäonnistumisen yhteydessä, jotta Ultimate Multisite voi käsitellä virhenäytön
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Käytä `wu_log_add()`-funktiota maksuyhdyskäytäväkohtaiseen lokitukseen

## AI-yhdistimen tarjoajan ominaisuudet

Mukautettujen integraatioiden, jotka kutsuvat AI-yhdistimen tukemia toimintoja, tulisi olla linjassa AI Provider for Anthropic Max v1.3.0:n mukana esitellyn tuetun OAuth-tarjoajajoukon kanssa:

| Tarjoaja | Ominaisuushuomiot |
|---|---|
| **Anthropic Max** | Tukee nykyistä OAuth-tilipoolin työnkulkua. Säilytä Anthropic-työkalunkäyttökuormat, mukaan lukien tyhjät työkalutaulukot ja edestakaiset thinking-allekirjoitukset, kun välität yhdistinpyyntöjä. |
| **OpenAI ChatGPT/Codex** | Tukee OAuth-poolin työnkulkua ja täyttä työkalutuen toimintaa yhdistimen tukemille toiminnoille. Välitä työkalumääritykset ja työkalukutsujen tulokset poistamatta Codex-kohtaista työkalumetadataa. |
| **Google AI Pro** | Tukee OAuth-poolin työnkulkua ja SDK-tuettua tarjoajaintegraatiota. Päivitä tarjoajatilien tiedot OAuthin valmistumisen jälkeen ennen pyyntöjen reitittämistä. |

Cursor Pro -integraatio ja määrityspolut on poistettu. Älä rekisteröi Cursor Prota valittavaksi tarjoajaksi tai esitä Cursor-kohtaisia OAuth-ohjeita mukautettujen yhdistimien käyttöliittymissä.

Hiekkalaatikko- tai headless-ympäristöissä tuo näkyviin manuaalinen OAuth-varapolku, jotta ylläpitäjät voivat liittää palautetut valtuutustiedot ja viimeistellä tilin yhdistämisen ilman automaattista selaimen uudelleenohjausta.
