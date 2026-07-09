---
title: Þróun sérsniðinnar greiðslugáttar
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Sérsniðin þróun greiðslugáttar

Þú getur búið til sérsniðnar greiðslugáttir með því að útvíkka `Base_Gateway` klasann.

## Greiðslugáttarklasi

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

## Skrá greiðslugáttina

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Lykilaðferðir

| Aðferð | Tilgangur |
|--------|---------|
| `process_single_payment()` | Meðhöndla eingreiðslur |
| `process_signup()` | Setja upp endurteknar áskriftir |
| `process_refund()` | Meðhöndla endurgreiðslubeiðnir |
| `get_payment_methods()` | Skila vistuðum greiðslumátum fyrir viðskiptavin |

## Endurnýjunarskilríki fyrir endurteknar memberships

Ultimate Multisite v2.13.0 gerir samþættingum greiðslugátta kleift að tilkynna hvort endurtekin membership hafi endurnýtanlegt endurnýjunarskilríki áður en `auto_renew` er vistað. Tengdu við `wu_membership_has_renewal_credential` og skilaðu:

- `true` þegar membership hefur áskrift hjá greiðslugátt, greiðslusamning, vault token eða samsvarandi endurnýtanlegan greiðslumáta.
- `false` þegar greiðslugáttin veit að endurtekna skilríkið vantar eða er ónothæft.
- `null` til að afþakka og halda sjálfgefinni hegðun óbreyttri.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Þegar greiðslugátt skilar `false` vistar Ultimate Multisite membership með sjálfvirka endurnýjun óvirka og geymir merki um skilríki sem vantar. Notaðu `wu_membership_renewal_credential_missing` til að láta stjórnendur vita, hefja endurheimildarferli eða bæta við stuðningsathugasemdum:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Hreinsaðu merkið um skilríki sem vantar sem hluta af vel heppnuðu endurheimildarferli greiðslugáttarinnar þinnar eftir að nýtt endurnýtanlegt skilríki hefur verið vistað.

## Ábendingar

- Skilaðu alltaf `WP_Error` við bilun svo Ultimate Multisite geti séð um birtingu villna
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Notaðu `wu_log_add()` fyrir skráningu sem er sértæk fyrir greiðslugáttina

## Geta AI-tengilsveitenda

Sérsniðnar samþættingar sem kalla á aðgerðir studdar af AI-tengli ættu að samræmast studda OAuth-veitendasettinu sem kynnt var með AI Provider for Anthropic Max v1.3.0:

| Veitandi | Athugasemdir um getu |
|---|---|
| **Anthropic Max** | Styður núverandi OAuth workflow fyrir account-pool. Varðveittu Anthropic tool-use hleðslur, þar á meðal tóma verkfærafylki og thinking signatures fyrir báðar leiðir, þegar beiðnum tengils er framsent í gegnum proxy. |
| **OpenAI ChatGPT/Codex** | Styður OAuth pool workflow og fulla hegðun verkfærastuðnings fyrir aðgerðir sem tengill styður. Sendu verkfæraskilgreiningar og niðurstöður verkfærakalla áfram án þess að fjarlægja Codex-sértæk verkfæralýsigögn. |
| **Google AI Pro** | Styður OAuth pool workflow og SDK-studda samþættingu veitanda. Endurhlaðaðu provider accounts eftir að OAuth lýkur áður en beiðnum er beint áfram. |

Cursor Pro samþætting og uppsetningarleiðir hafa verið fjarlægðar. Ekki skrá Cursor Pro sem valanlegan veitanda eða sýna Cursor-sértækar OAuth-leiðbeiningar í sérsniðnum viðmótum tengla.

Fyrir sandboxed eða headless umhverfi skaltu birta handvirku OAuth-varaleiðina svo stjórnendur geti límt inn skilaðar heimildargögn og lokið account-tengingu án þess að treysta á sjálfvirka vafratilvísun.
