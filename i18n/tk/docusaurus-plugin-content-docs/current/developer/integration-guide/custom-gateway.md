---
title: Ýörite geçelge işläp düzmek
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway işläp taýýarlamak

`Base_Gateway` class-y giňeltmek arkaly custom töleg gateway-lerini döredip bilersiňiz.

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

## Gateway-i hasaba almak

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Esasy usullar

| Method | Maksat |
|--------|---------|
| `process_single_payment()` | Bir gezeklik tölegleri işlemek |
| `process_signup()` | Gaýtalanýan abuna ýazylmalary sazlamak |
| `process_refund()` | Pul gaýtarmak haýyşlaryny işlemek |
| `get_payment_methods()` | Müşderi üçin saklanan töleg usullaryny gaýtarmak |

## Gaýtalanýan agzalyklar üçin täzelenme credential-lary

Ultimate Multisite v2.13.0 gateway integrasiýalaryna `auto_renew` saklanmazdan öň gaýtalanýan agzalygyň gaýtadan ulanyp bolýan täzelenme credential-y bardygyny habar bermäge mümkinçilik berýär. `wu_membership_has_renewal_credential` hook-yny ulanyň we şuny gaýtaryň:

- Agzalykda gateway subscription, billing agreement, vault token ýa-da şoňa deň gaýtadan ulanyp bolýan töleg usuly bar bolsa `true`.
- Gateway gaýtalanýan credential-yň ýokdugyny ýa-da ulanyp bolmaýandygyny bilýän bolsa `false`.
- Gatnaşmazlyk we adaty hereketi üýtgetmän saklamak üçin `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway `false` gaýtarsa, Ultimate Multisite agzalygy awtomatik täzelenme öçürilen ýagdaýda saklaýar we ýetmeýän-credential belgisini ýazýar. Administratorlara habar bermek, täzeden awtorizasiýa akymyny başlatmak ýa-da goldaw belliklerini goşmak üçin `wu_membership_renewal_credential_missing` ulanyň:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Täze gaýtadan ulanyp bolýan credential saklanandan soň, gateway-iňiziň üstünlikli täzeden awtorizasiýa akymynyň bir bölegi hökmünde ýetmeýän-credential belgisini arassalaň.

## Maslahatlar

- Şowsuzlyk ýüze çykanda elmydama `WP_Error` gaýtaryň, şeýdip Ultimate Multisite säwlik görkezilişini işläp biler
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gateway-e mahsus logging üçin `wu_log_add()` ulanyň

## AI connector provider mümkinçilikleri

AI connector arkaly goldanýan amallary çagyrýan custom integrasiýalar AI Provider for Anthropic Max v1.3.0 bilen girizilen goldanýan OAuth provider toplumyna laýyk gelmelidir:

| Provider | Mümkinçilik bellikleri |
|---|---|
| **Anthropic Max** | Bar bolan OAuth account pool iş akymyny goldaýar. Connector haýyşlaryny proxy edende, boş tool massiwlerini we iki tarapa geçýän pikirlenme signatures-y hem goşmak bilen, Anthropic tool-use payload-laryny saklaň. |
| **OpenAI ChatGPT/Codex** | OAuth pool iş akymyny we connector tarapyndan goldanýan amallar üçin doly tool-support hereketini goldaýar. Tool kesgitlemelerini we tool-call netijelerini Codex-e mahsus tool metadata-ny aýyrmazdan geçiriň. |
| **Google AI Pro** | OAuth pool iş akymyny we SDK bilen goldanýan provider integrasiýasyny goldaýar. Haýyşlary ugrukdyrmazdan öň OAuth tamamlanandan soň provider account-laryny täzeläň. |

Cursor Pro integrasiýasy we sazlama ýollary aýryldy. Cursor Pro-ny saýlanyp bolýan provider hökmünde hasaba almaň ýa-da custom connector UI-lerinde Cursor-e mahsus OAuth görkezmelerini görkezmäň.

Sandbox edilen ýa-da headless gurşawlar üçin manual OAuth fallback ýoluny açyň, şeýdip administratorlar gaýtarylan authorization maglumatlaryny goýup, awtomatik browser redirect-e bil baglamazdan account baglanyşygyny tamamlap bilerler.
