---
title: Pagpalambo sa Pasadyang Gateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway Development

Makahimo ka og custom nga mga payment gateway pinaagi sa pag-extend sa `Base_Gateway` class.

## Gateway Class

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

## I-register ang Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Pangunang mga Method

| Method | Katuyoan |
|--------|---------|
| `process_single_payment()` | Modumala sa usa ka higayon nga mga bayad |
| `process_signup()` | Mag-set up og nagbalikbalik nga mga subscription |
| `process_refund()` | Modumala sa mga hangyo sa refund |
| `get_payment_methods()` | Ibalik ang na-save nga mga payment method para sa usa ka customer |

## Mga credential sa renewal para sa nagbalikbalik nga mga membership

Ang Ultimate Multisite v2.13.0 nagtugot sa mga gateway integration nga magreport kon ang usa ka nagbalikbalik nga membership adunay magamit pag-usab nga renewal credential sa dili pa ma-persist ang `auto_renew`. I-hook ang `wu_membership_has_renewal_credential` ug ibalik:

- `true` kung ang membership adunay gateway subscription, billing agreement, vault token, o katumbas nga magamit pag-usab nga payment method.
- `false` kung nahibalo ang gateway nga ang nagbalikbalik nga credential kulang o dili magamit.
- `null` aron dili moapil ug ipabilin nga walay kausaban ang default nga pamatasan.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kung ang usa ka gateway mobalik og `false`, i-save sa Ultimate Multisite ang membership nga naka-disable ang auto-renewal ug magtipig og missing-credential marker. Gamita ang `wu_membership_renewal_credential_missing` aron pahibaloon ang mga administrator, magsugod og re-authorization flow, o magdugang og support notes:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Kuhaa ang missing-credential marker isip bahin sa malampusong re-authorization flow sa imong gateway human matipig ang bag-ong magamit pag-usab nga credential.

## Mga Tip

- Kanunay ibalik ang `WP_Error` kung mapakyas aron makadumala ang Ultimate Multisite sa pagpakita sa sayop
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gamita ang `wu_log_add()` para sa logging nga espesipiko sa gateway

## Mga abilidad sa AI connector provider

Ang custom nga mga integration nga motawag sa mga operasyon nga gisuportahan sa AI connector kinahanglang motakdo sa gisuportahang OAuth provider set nga gipaila uban sa AI Provider for Anthropic Max v1.3.0:

| Provider | Mga nota sa abilidad |
|---|---|
| **Anthropic Max** | Nagsuporta sa kasamtangang OAuth account pool workflow. Preserbahon ang Anthropic tool-use payloads, lakip ang walay sulod nga tool arrays ug round-trip thinking signatures, kung mag-proxy sa mga connector request. |
| **OpenAI ChatGPT/Codex** | Nagsuporta sa OAuth pool workflow ug kompleto nga tool-support behavior para sa mga operasyon nga gisuportahan sa connector. Ipaagi ang mga tool definition ug mga resulta sa tool-call nga dili tangtangon ang tool metadata nga espesipiko sa Codex. |
| **Google AI Pro** | Nagsuporta sa OAuth pool workflow ug SDK-backed provider integration. I-refresh ang mga provider account human makompleto ang OAuth sa dili pa i-route ang mga request. |

Ang Cursor Pro integration ug mga setup pathway gitangtang na. Ayaw i-register ang Cursor Pro isip mapiling provider o ipakita ang mga instruction sa OAuth nga espesipiko sa Cursor diha sa custom connector UIs.

Para sa sandboxed o headless nga mga environment, ipakita ang manual OAuth fallback path aron ang mga administrator makapaste sa gibalik nga authorization data ug makompleto ang pagkonektar sa account nga dili mosalig sa automatic browser redirect.
