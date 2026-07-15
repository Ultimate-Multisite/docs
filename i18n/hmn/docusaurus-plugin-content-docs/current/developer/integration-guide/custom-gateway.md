---
title: Kev Tsim Kho Qhov Rooj Txuas Raws Li Xav Tau
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Kev Tsim Custom Gateway

Koj tuaj yeem tsim custom payment gateways los ntawm kev txuas ntxiv chav kawm `Base_Gateway`.

## Chav Kawm Gateway {#gateway-class}

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

## Sau Npe Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Cov Method Tseem Ceeb {#key-methods}

| Method | Lub Hom Phiaj |
|--------|---------|
| `process_single_payment()` | Tswj kev them nyiaj ib zaug |
| `process_signup()` | Teeb tsa cov subscription rov them dua |
| `process_refund()` | Tswj cov kev thov refund |
| `get_payment_methods()` | Xa rov qab cov payment method uas tau khaws cia rau ib tug customer |

## Cov ntaub ntawv pov thawj renewal rau recurring memberships {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 cia gateway integrations qhia tau tias ib qho recurring membership puas muaj ib qho renewal credential uas siv tau rov qab ua ntej `auto_renew` raug khaws cia. Hook `wu_membership_has_renewal_credential` thiab xa rov qab:

- `true` thaum membership muaj gateway subscription, billing agreement, vault token, lossis payment method sib npaug uas siv tau rov qab.
- `false` thaum gateway paub tias recurring credential ploj lawm lossis siv tsis tau.
- `null` kom xaiv tawm thiab cia tus cwj pwm default nyob li qub.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Thaum ib lub gateway xa rov qab `false`, Ultimate Multisite khaws membership nrog auto-renewal raug kaw thiab khaws ib lub missing-credential marker. Siv `wu_membership_renewal_credential_missing` los ceeb toom cov administrators, pib ib txoj kev re-authorization flow, lossis ntxiv support notes:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Tshem lub missing-credential marker ua ib feem ntawm koj lub gateway txoj kev re-authorization flow uas ua tiav tom qab ib qho credential tshiab uas siv tau rov qab raug khaws cia.

## Cov Lus Qhia {#tips}

- Nco ntsoov xa rov qab `WP_Error` thaum ua tsis tiav kom Ultimate Multisite thiaj tswj tau kev tso saib error
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Siv `wu_log_add()` rau gateway-specific logging

## Cov peev xwm ntawm AI connector provider {#ai-connector-provider-capabilities}

Cov custom integrations uas hu rau AI connector-backed operations yuav tsum phim nrog pawg OAuth provider uas txhawb nqa uas tau qhia nrog AI Provider for Anthropic Max v1.3.0:

| Provider | Cov lus ceeb toom txog peev xwm |
|---|---|
| **Anthropic Max** | Txhawb nqa OAuth account pool workflow uas twb muaj lawm. Khaws Anthropic tool-use payloads, nrog rau empty tool arrays thiab round-trip thinking signatures, thaum proxying connector requests. |
| **OpenAI ChatGPT/Codex** | Txhawb nqa OAuth pool workflow thiab tag nrho tool-support behavior rau connector-supported operations. Xa tool definitions thiab tool-call results mus dhau yam tsis strip Codex-specific tool metadata. |
| **Google AI Pro** | Txhawb nqa OAuth pool workflow thiab SDK-backed provider integration. Refresh provider accounts tom qab OAuth tiav ua ntej routing requests. |

Cursor Pro integration thiab setup pathways tau raug tshem lawm. Tsis txhob register Cursor Pro ua ib tug selectable provider lossis nthuav Cursor-specific OAuth instructions hauv custom connector UIs.

Rau sandboxed lossis headless environments, tso tawm manual OAuth fallback path kom administrators thiaj paste tau returned authorization data thiab ua kom account connection tiav yam tsis tas cia siab rau automatic browser redirect.
