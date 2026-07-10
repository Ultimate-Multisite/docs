---
title: Pêşxistina Gateway-a Taybet
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pêşxistina Gateway-ê Taybet {#custom-gateway-development}

Tu dikarî gateway-ên dayîna taybet biafirînî bi dirêjkirina pola `Base_Gateway`.

## Pola Gateway {#gateway-class}

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

## Tomarkirina Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Rêbazên Girîng {#key-methods}

| Method | Armanc |
|--------|---------|
| `process_single_payment()` | Dayînên yekcarî birêve bibe |
| `process_signup()` | Abonementên dubare saz bike |
| `process_refund()` | Daxwazên vegerandina pere birêve bibe |
| `get_payment_methods()` | Rêbazên dayîna tomarkirî ji bo xerîdar vegerîne |

## Bawernameyên nûkirinê ji bo endamtiyên dubare {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 rê dide entegrasyonên gateway ku rapor bikin ka endamtiyek dubare berî ku `auto_renew` were tomarkirin xwedî bawernameyeke nûkirinê ya dubare-bikaranîn e an na. `wu_membership_has_renewal_credential` girê bide û vegerîne:

- `true` dema endamtî xwedî abonementeke gateway, peymana faturekirinê, token-a vault, an rêbazeke dayînê ya wekhev û dubare-bikaranîn be.
- `false` dema gateway dizane bawernameya dubare tune ye an nayê bikaranîn.
- `null` ji bo vekişînê û hiştina tevgera heyî ya standard bê guhertin.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Dema gateway `false` vegerîne, Ultimate Multisite endamtiyê bi nûkirina xweber neçalak tomar dike û nîşankereke bawernameya winda hiltîne. `wu_membership_renewal_credential_missing` bi kar bîne ji bo agahdarkirina rêveberan, destpêkirina herikîna destûrdanê ya nû, an zêdekirina têbîniyên piştgiriyê:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Nîşankera bawernameya winda paqij bike wek beşek ji herikîna destûrdanê ya serketî ya gateway-a xwe, piştî ku bawernameyeke nû ya dubare-bikaranîn were tomarkirin.

## Şîret {#tips}

- Her tim li ser têkçûnê `WP_Error` vegerîne da Ultimate Multisite bikaribe nîşandana çewtiyê birêve bibe
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- `wu_log_add()` ji bo tomarkirina taybet a gateway bi kar bîne

## Kapasîteyên dabînkerê girêdera AI {#ai-connector-provider-capabilities}

Entegrasyonên taybet ku bang li karên piştgirîkirî yên girêdera AI dikin divê xwe bi koma dabînkerên OAuth ên piştgirîkirî re lihev bikin ku bi AI Provider for Anthropic Max v1.3.0 hatine nasandin:

| Dabînker | Têbîniyên kapasîteyê |
|---|---|
| **Anthropic Max** | Herikîna heyî ya komika Account-a OAuth piştgirî dike. Dema daxwazên girêderê bi proxy têne şandin, payload-ên bikaranîna amûrê yên Anthropic biparêze, tevî rêzikên amûrê yên vala û îmzeyên ramandinê yên çûn-û-hatinê. |
| **OpenAI ChatGPT/Codex** | Herikîna komika OAuth û tevgera temam a piştgiriya amûran ji bo karên piştgirîkirî yên girêderê piştgirî dike. Pênaseyên amûran û encamên bangkirina amûran bê rakirina metadata ya amûrên taybet ên Codex derbas bike. |
| **Google AI Pro** | Herikîna komika OAuth û entegrasyona dabînkerê ya bi piştgiriya SDK piştgirî dike. Piştî qedandina OAuth-ê, berî rêkirina daxwazan Account-ên dabînkerê nû bike. |

Entegrasyona Cursor Pro û rêyên sazkirinê hatine rakirin. Cursor Pro wek dabînkerê hilbijartbar tomar neke û di UI-yên girêdera taybet de rêwerzên OAuth ên taybet bi Cursor nîşan nede.

Ji bo hawirdorên sandbox an bêser, rêya vegerê ya OAuth a destan nîşan bide da rêveber bikaribin daneyên destûrdanê yên vegerî hatine binivîsin û bêyî piştgiriya veguheztina xweber a gerokê girêdana Account biqedînin.
