---
title: Pagbuo ng Pasadyang Gateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway Development

Maaari kang gumawa ng mga custom na payment gateway sa pamamagitan ng pag-extend sa `Base_Gateway` class.

## Gateway Class {#gateway-class}

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

## Irehistro ang Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mahahalagang Method {#key-methods}

| Method | Layunin |
|--------|---------|
| `process_single_payment()` | Pangasiwaan ang minsanang mga pagbabayad |
| `process_signup()` | I-set up ang mga umuulit na subscription |
| `process_refund()` | Pangasiwaan ang mga kahilingan sa refund |
| `get_payment_methods()` | Ibalik ang naka-save na mga paraan ng pagbabayad para sa isang customer |

## Mga kredensyal sa pag-renew para sa umuulit na membership {#renewal-credentials-for-recurring-memberships}

Hinahayaan ng Ultimate Multisite v2.13.0 ang mga integration ng gateway na iulat kung ang isang umuulit na membership ay may magagamit-muling kredensyal sa pag-renew bago i-persist ang `auto_renew`. I-hook ang `wu_membership_has_renewal_credential` at ibalik ang:

- `true` kapag ang membership ay may gateway subscription, kasunduan sa billing, vault token, o katumbas na magagamit-muling paraan ng pagbabayad.
- `false` kapag alam ng gateway na nawawala o hindi magagamit ang umuulit na kredensyal.
- `null` upang mag-opt out at panatilihing hindi nagbabago ang default na kilos.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Kapag nagbalik ang gateway ng `false`, sine-save ng Ultimate Multisite ang membership na naka-disable ang awtomatikong pag-renew at nag-iimbak ng marker para sa nawawalang kredensyal. Gamitin ang `wu_membership_renewal_credential_missing` upang abisuhan ang mga administrator, magsimula ng daloy ng muling awtorisasyon, o magdagdag ng mga tala ng suporta:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

I-clear ang marker para sa nawawalang kredensyal bilang bahagi ng matagumpay na daloy ng muling awtorisasyon ng iyong gateway matapos maimbak ang bagong magagamit-muling kredensyal.

## Mga Tip {#tips}

- Palaging ibalik ang `WP_Error` kapag nabigo upang mapangasiwaan ng Ultimate Multisite ang pagpapakita ng error
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gamitin ang `wu_log_add()` para sa logging na partikular sa gateway

## Mga kakayahan ng AI connector provider {#ai-connector-provider-capabilities}

Ang mga custom na integration na tumatawag ng mga operasyong sinusuportahan ng AI connector ay dapat umayon sa sinusuportahang hanay ng OAuth provider na ipinakilala kasama ang AI Provider for Anthropic Max v1.3.0:

| Provider | Mga tala sa kakayahan |
|---|---|
| **Anthropic Max** | Sinusuportahan ang kasalukuyang workflow ng OAuth account pool. Panatilihin ang mga payload ng paggamit ng tool ng Anthropic, kabilang ang mga walang-lamang tool array at round-trip thinking signature, kapag nagpo-proxy ng mga kahilingan ng connector. |
| **OpenAI ChatGPT/Codex** | Sinusuportahan ang workflow ng OAuth pool at kumpletong kilos ng suporta sa tool para sa mga operasyong sinusuportahan ng connector. Ipasa ang mga depinisyon ng tool at mga resulta ng tool-call nang hindi inaalis ang metadata ng tool na partikular sa Codex. |
| **Google AI Pro** | Sinusuportahan ang workflow ng OAuth pool at integration ng provider na sinusuportahan ng SDK. I-refresh ang mga account ng provider matapos makumpleto ang OAuth bago mag-route ng mga kahilingan. |

Inalis na ang integration at mga pathway ng setup para sa Cursor Pro. Huwag irehistro ang Cursor Pro bilang mapipiling provider o magpakita ng mga tagubilin sa OAuth na partikular sa Cursor sa mga custom na UI ng connector.

Para sa mga sandboxed o headless na kapaligiran, ilantad ang manual na fallback path ng OAuth upang mai-paste ng mga administrator ang ibinalik na data ng awtorisasyon at makumpleto ang koneksyon ng account nang hindi umaasa sa awtomatikong browser redirect.
