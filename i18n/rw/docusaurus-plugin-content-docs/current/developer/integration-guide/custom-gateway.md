---
title: Guteza imbere irembo ryihariye
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Gutegura irembo ryihariye

Ushobora gukora amarembo yihariye yo kwishyura wongerera ubushobozi class `Base_Gateway`.

## Class y'irembo

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

## Kwandikisha irembo

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Uburyo bw'ingenzi

| Method | Intego |
|--------|---------|
| `process_single_payment()` | Gukemura ubwishyu bw'igihe kimwe |
| `process_signup()` | Gushyiraho subscriptions zisubiramo |
| `process_refund()` | Gukemura ubusabe bwo gusubiza amafaranga |
| `get_payment_methods()` | Gusubiza uburyo bwo kwishyura bwabitswe bw'umukiriya |

## Ibyangombwa byo kuvugurura kuri memberships zisubiramo

Ultimate Multisite v2.13.0 yemerera integrations z'amarembo gutangaza niba membership isubiramo ifite credential yo kuvugurura ishobora kongera gukoreshwa mbere y'uko `auto_renew` ibikwa. Koresha hook `wu_membership_has_renewal_credential` maze usubize:

- `true` igihe membership ifite subscription y'irembo, amasezerano yo kwishyura, vault token, cyangwa ubundi buryo bwo kwishyura bungana na byo bushobora kongera gukoreshwa.
- `false` igihe irembo rizi ko credential isubiramo ibura cyangwa idashobora gukoreshwa.
- `null` kugira ngo uhitamo kutabigira no kugumisha imikorere isanzwe uko iri.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Iyo irembo risubije `false`, Ultimate Multisite ibika membership ifite auto-renewal yazimijwe kandi ikabika ikimenyetso cya credential ibura. Koresha `wu_membership_renewal_credential_missing` kugira ngo umenyeshe administrators, utangize inzira yo kongera gutanga uburenganzira, cyangwa wongereho inyandiko z'ubufasha:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Siba ikimenyetso cya credential ibura nk'igice cy'inzira y'irembo ryawe yagenze neza yo kongera gutanga uburenganzira nyuma y'uko credential nshya ishobora kongera gukoreshwa ibitswe.

## Inama

- Buri gihe subiza `WP_Error` igihe habaye kunanirwa kugira ngo Ultimate Multisite ishobore gukemura iyerekanwa ry'ikosa
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Koresha `wu_log_add()` ku nyandiko za log zihariye z'irembo

## Ubushobozi bw'abatanga serivisi b'umuhuza wa AI

Integrations zihariye zihamagara ibikorwa bishyigikiwe n'umuhuza wa AI zikwiye guhuzwa n'urutonde rw'abatanga serivisi ba OAuth rushyigikiwe rwatangijwe na AI Provider for Anthropic Max v1.3.0:

| Utanga serivisi | Inyandiko z'ubushobozi |
|---|---|
| **Anthropic Max** | Ishyigikira workflow isanzwe ya pool ya Account ya OAuth. Zigama payloads za tool-use za Anthropic, harimo tool arrays zirimo ubusa na thinking signatures zisubira inyuma n'imbere, igihe wohereza ubusabe bw'umuhuza binyuze kuri proxy. |
| **OpenAI ChatGPT/Codex** | Ishyigikira workflow ya pool ya OAuth n'imikorere yuzuye y'ubufasha bwa tools ku bikorwa bishyigikiwe n'umuhuza. Ohereza tool definitions n'ibisubizo bya tool-call uko biri utakuyeho metadata yihariye ya Codex. |
| **Google AI Pro** | Ishyigikira workflow ya pool ya OAuth na integration y'utanga serivisi ishingiye kuri SDK. Vugurura accounts z'utanga serivisi nyuma yo kurangiza OAuth mbere yo kohereza ubusabe. |

Integration ya Cursor Pro n'inzira zo kuyishyiraho byakuweho. Ntukandikishe Cursor Pro nk'utanga serivisi ushobora gutoranywa cyangwa ngo werekane amabwiriza ya OAuth yihariye ya Cursor muri UIs z'abahuza zihariye.

Ku bidukikije bya sandbox cyangwa bidafite interface, garagaza inzira y'inyongera ya OAuth ikorwa n'intoki kugira ngo administrators bashobore komekamo amakuru y'uburenganzira yagaruwe kandi barangize guhuza Account batishingikirije kuri browser redirect yikora.
