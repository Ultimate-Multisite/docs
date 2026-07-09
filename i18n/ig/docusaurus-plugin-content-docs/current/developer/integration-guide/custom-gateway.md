---
title: Mmepe Ọnụ ụzọ Ahaziri Ahazi
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Mmepe Custom Gateway

Ị nwere ike ịmepụta custom payment gateways site n’ịgbatị class `Base_Gateway`.

## Class Gateway

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

## Debanye Gateway ahụ

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ụzọ Ndị Dị Mkpa

| Method | Ebumnuche |
|--------|---------|
| `process_single_payment()` | Jikwaa ịkwụ ụgwọ otu ugboro |
| `process_signup()` | Hazie subscriptions na-emegharị ugboro ugboro |
| `process_refund()` | Jikwaa arịrịọ refund |
| `get_payment_methods()` | Weghachite ụzọ ịkwụ ụgwọ echekwara maka onye ahịa |

## Credentials mmeghari maka memberships na-emegharị ugboro ugboro

Ultimate Multisite v2.13.0 na-eme ka gateway integrations kọọ ma membership na-emegharị ugboro ugboro nwere credential mmeghari a pụrụ iji ọzọ tupu echekwaa `auto_renew`. Hook `wu_membership_has_renewal_credential` ma weghachite:

- `true` mgbe membership nwere gateway subscription, billing agreement, vault token, ma ọ bụ ụzọ ịkwụ ụgwọ yiri ya a pụrụ iji ọzọ.
- `false` mgbe gateway maara na credential na-emegharị ugboro ugboro adịghị ma ọ bụ na-agaghị eji ya.
- `null` iji pụọ ma hapụ omume ndabara ka ọ ghara ịgbanwe.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Mgbe gateway weghachitere `false`, Ultimate Multisite na-echekwa membership ahụ na mmeghari akpaka agbanyụrụ ma na-echekwa akara credential na-efu. Jiri `wu_membership_renewal_credential_missing` gwa ndị nchịkwa, malite usoro re-authorization, ma ọ bụ tinye ndetu nkwado:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Hichapụ akara credential na-efu dịka akụkụ nke usoro re-authorization gara nke ọma nke gateway gị mgbe echekwara credential ọhụrụ a pụrụ iji ọzọ.

## Ndụmọdụ

- Weghachite `WP_Error` mgbe niile ma ọ bụrụ na ọ dara ka Ultimate Multisite nwee ike ijikwa ngosipụta njehie
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Jiri `wu_log_add()` maka ndekọ kpọmkwem nke gateway

## Ike ndị na-eweta AI connector

Custom integrations na-akpọ ọrụ ndị AI connector na-akwado kwesịrị ikwekọ na setị provider OAuth akwadoro nke ewebatara na AI Provider for Anthropic Max v1.3.0:

| Onye na-eweta | Ndetu ike |
|---|---|
| **Anthropic Max** | Na-akwado usoro ọrụ account pool OAuth dị ugbu a. Chekwaa payloads tool-use nke Anthropic, gụnyere arrays tool efu na signatures echiche round-trip, mgbe ị na-eme proxy arịrịọ connector. |
| **OpenAI ChatGPT/Codex** | Na-akwado usoro ọrụ OAuth pool na omume nkwado tool zuru ezu maka ọrụ connector na-akwado. Nyefee nkọwa tool na nsonaazụ tool-call n’enweghị iwepụ metadata tool kpọmkwem nke Codex. |
| **Google AI Pro** | Na-akwado usoro ọrụ OAuth pool na provider integration SDK na-akwado. Mee ka provider accounts dị ọhụrụ mgbe OAuth gasịrị tupu iziga arịrịọ. |

Ewepụla integration na ụzọ nhazi Cursor Pro. Edebanyela Cursor Pro dịka provider a pụrụ ịhọrọ ma ọ bụ gosipụta ntuziaka OAuth kpọmkwem maka Cursor na custom connector UIs.

Maka gburugburu sandboxed ma ọ bụ headless, gosi ụzọ ndabere OAuth aka ka ndị nchịkwa nwee ike mado data authorization laghachiri ma mechaa njikọ Account n’enweghị ịdabere na redirect browser akpaka.
