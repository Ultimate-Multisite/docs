---
title: Devlopman Pasrèl Pèsonalize
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Devlopman Gateway Pèsonalize

Ou ka kreye gateway peman pèsonalize lè ou pwolonje klas `Base_Gateway` la.

## Klas Gateway

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

## Anrejistre Gateway la

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metòd Kle

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Jere peman yon sèl fwa |
| `process_signup()` | Mete abònman renouvlab yo an plas |
| `process_refund()` | Jere demann ranbousman yo |
| `get_payment_methods()` | Retounen metòd peman ki sove pou yon kliyan |

## Kalifikasyon renouvèlman pou manm renouvlab

Ultimate Multisite v2.13.0 pèmèt entegrasyon gateway yo rapòte si yon manm renouvlab gen yon kalifikasyon renouvèlman ki ka reyitilize anvan `auto_renew` pèsiste. Hook `wu_membership_has_renewal_credential` epi retounen:

- `true` lè manm nan gen yon abònman gateway, akò fakti, token vault, oswa metòd peman ekivalan ki ka reyitilize.
- `false` lè gateway la konnen kalifikasyon renouvlab la manke oswa li pa ka itilize.
- `null` pou pa patisipe epi kite konpòtman defo a san chanjman.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Lè yon gateway retounen `false`, Ultimate Multisite sove manm nan ak renouvèlman otomatik dezaktive epi li estoke yon makè kalifikasyon ki manke. Sèvi ak `wu_membership_renewal_credential_missing` pou notifye administratè yo, kòmanse yon koule re-otorizasyon, oswa ajoute nòt sipò:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Efase makè kalifikasyon ki manke a kòm pati nan koule re-otorizasyon gateway ou a ki reyisi apre yo fin estoke yon nouvo kalifikasyon ki ka reyitilize.

## Konsèy

- Toujou retounen `WP_Error` lè gen echèk pou Ultimate Multisite ka jere afichaj erè a
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Sèvi ak `wu_log_add()` pou anrejistreman espesifik pou gateway la

## Kapasite founisè konektè AI

Entegrasyon pèsonalize ki rele operasyon ki sipòte pa konektè AI yo ta dwe alinye ak seri founisè OAuth ki sipòte a, ki te entwodui ak AI Provider for Anthropic Max v1.3.0:

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | Sipòte workflow pisin Account OAuth ki egziste deja a. Konsève payload itilizasyon zouti Anthropic yo, ki gen ladan array zouti vid ak siyati refleksyon ale-retou, lè w ap pwoksye demann konektè yo. |
| **OpenAI ChatGPT/Codex** | Sipòte workflow pisin OAuth la ak konpòtman sipò zouti konplè pou operasyon konektè yo sipòte. Pase definisyon zouti yo ak rezilta apèl zouti yo san retire metadata zouti espesifik pou Codex. |
| **Google AI Pro** | Sipòte workflow pisin OAuth la ak entegrasyon founisè ki apiye sou SDK. Rafrechi Account founisè yo apre fini OAuth anvan ou dirije demann yo. |

Yo retire entegrasyon ak chemen konfigirasyon Cursor Pro yo. Pa anrejistre Cursor Pro kòm yon founisè ki ka chwazi, ni pa prezante enstriksyon OAuth espesifik pou Cursor nan UI konektè pèsonalize yo.

Pou anviwònman sandbox oswa headless, ekspoze chemen sekou OAuth manyèl la pou administratè yo ka kole done otorizasyon yo retounen yo epi konplete koneksyon Account la san depann sou yon redireksyon navigatè otomatik.
