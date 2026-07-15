---
title: Zhvillimi i portës së personalizuar
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Zhvillimi i portave të personalizuara

Mund të krijoni porta pagesash të personalizuara duke zgjeruar klasën `Base_Gateway`.

## Klasa e portës {#gateway-class}

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

## Regjistroni portën {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metodat kryesore {#key-methods}

| Metoda | Qëllimi |
|--------|---------|
| `process_single_payment()` | Trajton pagesat njëherëshe |
| `process_signup()` | Konfiguron abonimet e përsëritura |
| `process_refund()` | Trajton kërkesat për rimbursim |
| `get_payment_methods()` | Kthen metodat e ruajtura të pagesës për një klient |

## Kredencialet e rinovimit për anëtarësimet e përsëritura {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 u lejon integrimeve të portave të raportojnë nëse një anëtarësim i përsëritur ka një kredencial rinovimi të ripërdorshëm përpara se `auto_renew` të ruhet. Lidhuni me `wu_membership_has_renewal_credential` dhe ktheni:

- `true` kur anëtarësimi ka një abonim porte, marrëveshje faturimi, token vault, ose metodë ekuivalente pagese të ripërdorshme.
- `false` kur porta e di se kredenciali i përsëritur mungon ose është i papërdorshëm.
- `null` për të mos marrë pjesë dhe për ta mbajtur sjelljen e parazgjedhur të pandryshuar.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kur një portë kthen `false`, Ultimate Multisite e ruan anëtarësimin me rinovimin automatik të çaktivizuar dhe ruan një shenjues për kredencialin që mungon. Përdorni `wu_membership_renewal_credential_missing` për të njoftuar administratorët, për të nisur një rrjedhë riautorizimi, ose për të shtuar shënime mbështetjeje:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Pastroni shenjuesin e kredencialit që mungon si pjesë e rrjedhës së suksesshme të riautorizimit të portës suaj pasi të ruhet një kredencial i ri i ripërdorshëm.

## Këshilla {#tips}

- Gjithmonë ktheni `WP_Error` në rast dështimi që Ultimate Multisite të mund të trajtojë shfaqjen e gabimit
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Përdorni `wu_log_add()` për regjistrim specifik për portën

## Aftësitë e ofruesve të konektorit AI {#ai-connector-provider-capabilities}

Integrimet e personalizuara që thërrasin operacione të mbështetura nga konektori AI duhet të përputhen me grupin e mbështetur të ofruesve OAuth të prezantuar me AI Provider for Anthropic Max v1.3.0:

| Ofruesi | Shënime për aftësitë |
|---|---|
| **Anthropic Max** | Mbështet rrjedhën ekzistuese të grupit të llogarive OAuth. Ruani payload-et e përdorimit të mjeteve të Anthropic, duke përfshirë vargjet bosh të mjeteve dhe nënshkrimet e mendimit vajtje-ardhje, kur proksoni kërkesat e konektorit. |
| **OpenAI ChatGPT/Codex** | Mbështet rrjedhën e grupit OAuth dhe sjelljen e plotë të mbështetjes së mjeteve për operacionet e mbështetura nga konektori. Kaloni përkufizimet e mjeteve dhe rezultatet e thirrjeve të mjeteve pa hequr metadatat e mjeteve specifike për Codex. |
| **Google AI Pro** | Mbështet rrjedhën e grupit OAuth dhe integrimin e ofruesit të mbështetur nga SDK. Rifreskoni llogaritë e ofruesit pas përfundimit të OAuth përpara se të drejtoni kërkesat. |

Integrimi dhe rrugët e konfigurimit të Cursor Pro janë hequr. Mos e regjistroni Cursor Pro si ofrues të përzgjedhshëm dhe mos paraqitni udhëzime OAuth specifike për Cursor në ndërfaqet e personalizuara të konektorit.

Për mjedise sandbox ose headless, ekspozoni rrugën rezervë manuale OAuth që administratorët të mund të ngjisin të dhënat e autorizimit të kthyera dhe të përfundojnë lidhjen e llogarisë pa u mbështetur në një ridrejtim automatik të shfletuesit.
