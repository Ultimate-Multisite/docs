---
title: Whakawhanaketanga Kuwaha Ritenga
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Whakawhanake Kuaha Ritenga

Ka taea e koe te waihanga kuaha utu ritenga mā te whakawhānui i te akomanga `Base_Gateway`.

## Akomanga Kuaha

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

## Rēhita i te Kuaha

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Ngā Tikanga Matua

| Method | Kaupapa |
|--------|---------|
| `process_single_payment()` | Whakahaere i ngā utu kotahi noa |
| `process_signup()` | Whakarite i ngā ohaurunga auau |
| `process_refund()` | Whakahaere i ngā tono whakahoki moni |
| `get_payment_methods()` | Whakahoki i ngā tikanga utu kua tiakina mō tētahi kiritaki |

## Ngā taunakitanga whakahou mō ngā mematanga auau

Ka āhei a Ultimate Multisite v2.13.0 i ngā whakakotahitanga kuaha ki te pūrongo mēnā he taunakitanga whakahou ka taea te whakamahi anō tō tētahi mematanga auau i mua i te ūnga o `auto_renew`. Honoa `wu_membership_has_renewal_credential` ka whakahoki:

- `true` ina he ohaurunga kuaha, he whakaaetanga nama, he vault token, he tikanga utu ōrite rānei ka taea te whakamahi anō tō te mematanga.
- `false` ina mōhio te kuaha kei te ngaro, kāore rānei e taea te whakamahi te taunakitanga auau.
- `null` hei puta atu, kia noho tonu te whanonga taunoa kāore e panonitia.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Ina whakahoki tētahi kuaha i te `false`, ka tiaki a Ultimate Multisite i te mematanga me te whakahou-aunoa kua monokia, ā, ka rokiroki i tētahi tohu taunakitanga-ngaro. Whakamahia `wu_membership_renewal_credential_missing` hei whakamōhio i ngā kaiwhakahaere, hei tīmata i tētahi rere whakamana-anō, hei tāpiri rānei i ngā tuhipoka tautoko:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Ūkuia te tohu taunakitanga-ngaro hei wāhanga o te rere whakamana-anō angitu a tō kuaha i muri i te rokiroki o tētahi taunakitanga hou ka taea te whakamahi anō.

## Ngā Tohu Āwhina

- Whakahokia i ngā wā katoa te `WP_Error` ina rahua, kia taea ai e Ultimate Multisite te whakahaere i te whakaaturanga hapa
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Whakamahia `wu_log_add()` mō te takiuru tauwhāiti-ki-te-kuaha

## Ngā āheinga kaiwhakarato tūhono AI

Me whakahāngai ngā whakakotahitanga ritenga e karanga ana i ngā mahinga e tautokona ana e te tūhono AI ki te huinga kaiwhakarato OAuth tautokona i whakaurua me AI Provider for Anthropic Max v1.3.0:

| Kaiwhakarato | Ngā tuhipoka āheinga |
|---|---|
| **Anthropic Max** | Ka tautoko i te rerenga mahi puna pūkete OAuth e tū ana. Tiakina ngā payload whakamahi-taputapu Anthropic, tae atu ki ngā rārangi taputapu pātea me ngā waitohu whakaaro haere-atu-hoki-mai, ina takawaenga ana i ngā tono tūhono. |
| **OpenAI ChatGPT/Codex** | Ka tautoko i te rerenga mahi puna OAuth me te whanonga tautoko-taputapu katoa mō ngā mahinga e tautokona ana e te tūhono. Tukuna kia haere ngā tautuhinga taputapu me ngā hua karanga-taputapu me te kore e tango i ngā raraungameta taputapu tauwhāiti-ki-Codex. |
| **Google AI Pro** | Ka tautoko i te rerenga mahi puna OAuth me te whakakotahitanga kaiwhakarato e tautokona ana e te SDK. Whakahoutia ngā pūkete kaiwhakarato i muri i te otinga OAuth i mua i te ararere tono. |

Kua tangohia te whakakotahitanga Cursor Pro me ngā ara whakarite. Kaua e rēhita i a Cursor Pro hei kaiwhakarato ka taea te tīpako, kaua hoki e whakaatu i ngā tohutohu OAuth tauwhāiti-ki-Cursor i roto i ngā UI tūhono ritenga.

Mō ngā taiao sandboxed, headless rānei, whakaaturia te ara hokinga ā-ringa OAuth kia taea ai e ngā kaiwhakahaere te whakapiri i ngā raraunga whakamanatanga kua whakahokia, ā, te whakaoti i te hononga pūkete me te kore e whakawhirinaki ki tētahi aronga-anō pūtirotiro aunoa.
