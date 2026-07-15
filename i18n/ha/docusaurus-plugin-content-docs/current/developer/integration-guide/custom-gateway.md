---
title: Haɓaka Ƙofa ta Musamman
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Gina Custom Gateway

Za ka iya ƙirƙirar custom payment gateways ta hanyar faɗaɗa class ɗin `Base_Gateway`.

## Class ɗin Gateway {#gateway-class}

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

## Yi Rajistar Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Muhimman Methods {#key-methods}

| Method | Manufa |
|--------|---------|
| `process_single_payment()` | Sarrafa biyan kuɗi na sau ɗaya |
| `process_signup()` | Saita subscriptions masu maimaituwa |
| `process_refund()` | Sarrafa buƙatun maido da kuɗi |
| `get_payment_methods()` | Mayar da hanyoyin biyan kuɗi da aka adana don abokin ciniki |

## Shaidun sabuntawa don memberships masu maimaituwa {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 yana ba gateway integrations damar bayar da rahoto ko membership mai maimaituwa yana da shaidar sabuntawa da za a iya sake amfani da ita kafin a adana `auto_renew`. Hook `wu_membership_has_renewal_credential` sannan ka mayar da:

- `true` idan membership ɗin yana da gateway subscription, billing agreement, vault token, ko makamanciyar hanyar biyan kuɗi da za a iya sake amfani da ita.
- `false` idan gateway ɗin ya san cewa shaidar mai maimaituwa ta ɓace ko ba ta da amfani.
- `null` don ƙin shiga kuma a bar tsohon hali ba tare da canji ba.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Idan gateway ya mayar da `false`, Ultimate Multisite yana adana membership tare da kashe auto-renewal kuma yana adana alamar shaidar da ta ɓace. Yi amfani da `wu_membership_renewal_credential_missing` don sanar da administrators, fara tsarin sake-ba-da-izini, ko ƙara bayanan tallafi:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Share alamar shaidar da ta ɓace a matsayin wani ɓangare na nasarar tsarin sake-ba-da-izini na gateway ɗinka bayan an adana sabuwar shaida da za a iya sake amfani da ita.

## Shawarwari {#tips}

- Koyaushe mayar da `WP_Error` idan an samu gazawa domin Ultimate Multisite ya iya sarrafa nuna kuskure
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Yi amfani da `wu_log_add()` don logging na musamman ga gateway

## Iyawar provider na AI connector {#ai-connector-provider-capabilities}

Custom integrations da ke kiran ayyukan da AI connector ke tallafawa ya kamata su dace da jerin provider na OAuth da aka tallafa wanda aka gabatar da AI Provider for Anthropic Max v1.3.0:

| Provider | Bayanan iyawa |
|---|---|
| **Anthropic Max** | Yana tallafa wa workflow na OAuth account pool da ake da shi. Kiyaye payloads na amfani da kayan aikin Anthropic, ciki har da jerin kayan aiki marasa komai da sa hannun tunani na zuwa-da-dawowa, lokacin proxying buƙatun connector. |
| **OpenAI ChatGPT/Codex** | Yana tallafa wa workflow na OAuth pool da cikakken halin tallafin kayan aiki don ayyukan da connector ke tallafawa. Wuce tool definitions da sakamakon tool-call ba tare da cire metadata na kayan aiki na musamman ga Codex ba. |
| **Google AI Pro** | Yana tallafa wa workflow na OAuth pool da haɗin provider da SDK ke tallafawa. Sabunta provider accounts bayan kammala OAuth kafin tura buƙatu. |

An cire haɗin Cursor Pro da hanyoyin saiti. Kada a yi rajistar Cursor Pro a matsayin provider da za a iya zaɓa ko a gabatar da umarnin OAuth na musamman ga Cursor a cikin custom connector UIs.

Don muhallai na sandboxed ko marasa browser, fito da hanyar madadin OAuth ta hannu domin administrators su iya liƙa bayanan izini da aka dawo da su kuma su kammala haɗa account ba tare da dogaro da automatic browser redirect ba.
