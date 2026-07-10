---
title: Individualaus šliuzo kūrimas
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pasirinktinio Gateway kūrimas {#custom-gateway-development}

Galite sukurti pasirinktinius mokėjimų Gateway išplėsdami `Base_Gateway` klasę.

## Gateway klasė {#gateway-class}

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

## Užregistruokite Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Pagrindiniai metodai {#key-methods}

| Metodas | Paskirtis |
|--------|---------|
| `process_single_payment()` | Apdoroti vienkartinius mokėjimus |
| `process_signup()` | Nustatyti pasikartojančias prenumeratas |
| `process_refund()` | Apdoroti grąžinimo užklausas |
| `get_payment_methods()` | Grąžinti išsaugotus kliento mokėjimo metodus |

## Atnaujinimo kredencialai pasikartojančioms narystėms {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 leidžia Gateway integracijoms pranešti, ar pasikartojanti narystė turi pakartotinai naudojamą atnaujinimo kredencialą prieš išsaugant `auto_renew`. Prijunkite `wu_membership_has_renewal_credential` ir grąžinkite:

- `true`, kai narystė turi Gateway prenumeratą, atsiskaitymo susitarimą, saugyklos tokeną arba lygiavertį pakartotinai naudojamą mokėjimo metodą.
- `false`, kai Gateway žino, kad pasikartojantis kredencialas trūksta arba yra netinkamas naudoti.
- `null`, kad atsisakytumėte dalyvauti ir paliktumėte numatytąją elgseną nepakeistą.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kai Gateway grąžina `false`, Ultimate Multisite išsaugo narystę su išjungtu automatiniu atnaujinimu ir įrašo trūkstamo kredencialo žymeklį. Naudokite `wu_membership_renewal_credential_missing`, kad praneštumėte administratoriams, pradėtumėte pakartotinio autorizavimo eigą arba pridėtumėte pagalbos pastabų:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Išvalykite trūkstamo kredencialo žymeklį kaip savo Gateway sėkmingos pakartotinio autorizavimo eigos dalį po to, kai išsaugomas naujas pakartotinai naudojamas kredencialas.

## Patarimai {#tips}

- Nesėkmės atveju visada grąžinkite `WP_Error`, kad Ultimate Multisite galėtų apdoroti klaidos rodymą
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Naudokite `wu_log_add()` Gateway specifiniam registravimui

## AI jungties teikėjo galimybės {#ai-connector-provider-capabilities}

Pasirinktinės integracijos, kurios kviečia AI jungtimi paremtas operacijas, turėtų būti suderintos su palaikomu OAuth teikėjų rinkiniu, pristatytu su AI Provider for Anthropic Max v1.3.0:

| Teikėjas | Galimybių pastabos |
|---|---|
| **Anthropic Max** | Palaiko esamą OAuth paskyrų fondo darbo eigą. Perduodami jungties užklausas per tarpinį serverį, išsaugokite Anthropic įrankių naudojimo apkrovas, įskaitant tuščius įrankių masyvus ir abipusio kelio mąstymo parašus. |
| **OpenAI ChatGPT/Codex** | Palaiko OAuth fondo darbo eigą ir visą įrankių palaikymo elgseną jungties palaikomoms operacijoms. Perduokite įrankių apibrėžimus ir įrankių iškvietimų rezultatus nepašalindami Codex specifinių įrankių metaduomenų. |
| **Google AI Pro** | Palaiko OAuth fondo darbo eigą ir SDK paremtą teikėjo integraciją. Atnaujinkite teikėjo paskyras po OAuth užbaigimo prieš nukreipdami užklausas. |

Cursor Pro integracija ir nustatymo keliai buvo pašalinti. Neregistruokite Cursor Pro kaip pasirenkamo teikėjo ir pasirinktinių jungčių UI nepateikite Cursor specifinių OAuth instrukcijų.

Izoliuotoms arba headless aplinkoms pateikite rankinį OAuth atsarginį kelią, kad administratoriai galėtų įklijuoti grąžintus autorizavimo duomenis ir užbaigti paskyros prijungimą nepasikliaudami automatiniu naršyklės peradresavimu.
