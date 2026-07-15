---
title: Kupanga Chipata Chosinthidwa Mwamakonda
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Kupanga Gateway Yachikhalidwe

Mutha kupanga ma gateway olipirira achikhalidwe powonjezera kalasi ya `Base_Gateway`.

## Kalasi ya Gateway {#gateway-class}

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

## Lembetsani Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Njira Zofunika {#key-methods}

| Method | Cholinga |
|--------|---------|
| `process_single_payment()` | Kusamalira malipiro a nthawi imodzi |
| `process_signup()` | Kukhazikitsa ma subscription obwerezabwereza |
| `process_refund()` | Kusamalira zopempha zobweza ndalama |
| `get_payment_methods()` | Kubwezera njira zolipirira zosungidwa za kasitomala |

## Zizindikiro zobwezeretsanso za ma membership obwerezabwereza {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 imalola ma integration a gateway kufotokoza ngati membership yobwerezabwereza ili ndi chizindikiro chobwezeretsanso chomwe chingagwiritsidwenso ntchito musanasunge `auto_renew`. Lumikizani `wu_membership_has_renewal_credential` ndipo mubweze:

- `true` ngati membership ili ndi subscription ya gateway, mgwirizano wa billing, vault token, kapena njira yolipirira yofanana yomwe ingagwiritsidwenso ntchito.
- `false` ngati gateway ikudziwa kuti chizindikiro chobwerezabwereza chikusowa kapena sichingagwiritsidwe ntchito.
- `null` kuti mutuluke ndi kusunga khalidwe lokhazikika lisasinthe.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway ikabweza `false`, Ultimate Multisite imasunga membership ndi auto-renewal yozimitsidwa ndipo imasunga chizindikiro cha credential yosowa. Gwiritsani ntchito `wu_membership_renewal_credential_missing` kudziwitsa oyang'anira, kuyambitsa njira yobwezeretsanso chilolezo, kapena kuwonjezera zolemba zothandizira:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Chotsani chizindikiro cha credential yosowa ngati gawo la njira yanu ya gateway yobwezeretsanso chilolezo yopambana pambuyo posunga credential yatsopano yomwe ingagwiritsidwenso ntchito.

## Malangizo {#tips}

- Nthawi zonse bweretsani `WP_Error` pakalephera kuti Ultimate Multisite izitha kusamalira kuwonetsa zolakwika
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gwiritsani ntchito `wu_log_add()` pa kulemba ma log okhudza gateway yokha

## Kuthekera kwa opereka AI connector {#ai-connector-provider-capabilities}

Ma integration achikhalidwe omwe amayitana ntchito zothandizidwa ndi AI connector ayenera kugwirizana ndi gulu la provider la OAuth lomwe linayambitsidwa ndi AI Provider for Anthropic Max v1.3.0:

| Provider | Zolemba za kuthekera |
|---|---|
| **Anthropic Max** | Imathandiza njira yogwirira ntchito ya OAuth account pool yomwe ilipo. Sungani ma payload a Anthropic tool-use, kuphatikiza ma array a tool opanda kanthu ndi ma signature a kuganiza a round-trip, mukamayendetsa zopempha za connector kudzera pa proxy. |
| **OpenAI ChatGPT/Codex** | Imathandiza njira yogwirira ntchito ya OAuth pool ndi khalidwe lathunthu la tool-support pa ntchito zomwe connector imathandiza. Tumizani matanthauzo a tool ndi zotsatira za tool-call popanda kuchotsa metadata ya tool yokhudza Codex. |
| **Google AI Pro** | Imathandiza njira yogwirira ntchito ya OAuth pool ndi integration ya provider yothandizidwa ndi SDK. Tsitsimutsani ma account a provider pambuyo poti OAuth yatha musanayendetse zopempha. |

Integration ya Cursor Pro ndi njira zokhazikitsira zachotsedwa. Musalembetse Cursor Pro ngati provider wosankhidwa kapena kupereka malangizo a OAuth okhudza Cursor mu ma UI a connector achikhalidwe.

Kwa malo a sandbox kapena opanda mutu, onetsani njira yobwerera ya OAuth yamanja kuti oyang'anira athe kumata deta ya authorization yobwezedwa ndi kumaliza kulumikiza account popanda kudalira redirect ya browser yokha.
