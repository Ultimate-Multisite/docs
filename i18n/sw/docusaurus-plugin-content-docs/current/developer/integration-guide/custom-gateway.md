---
title: Uendelezaji wa Lango Maalum
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Utengenezaji wa Gateway Maalum

Unaweza kuunda malango maalum ya malipo kwa kupanua darasa la `Base_Gateway`.

## Darasa la Gateway {#gateway-class}

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

## Sajili Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mbinu Muhimu {#key-methods}

| Method | Kusudi |
|--------|---------|
| `process_single_payment()` | Shughulikia malipo ya mara moja |
| `process_signup()` | Sanidi usajili unaojirudia |
| `process_refund()` | Shughulikia maombi ya kurejesha pesa |
| `get_payment_methods()` | Rudisha mbinu za malipo zilizohifadhiwa kwa mteja |

## Vitambulisho vya kusasisha kwa memberships zinazojirudia {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 huruhusu miunganisho ya gateway kuripoti kama membership inayojirudia ina kitambulisho cha kusasisha kinachoweza kutumika tena kabla ya `auto_renew` kuhifadhiwa. Hook `wu_membership_has_renewal_credential` na urejeshe:

- `true` wakati membership ina usajili wa gateway, makubaliano ya bili, vault token, au mbinu sawa ya malipo inayoweza kutumika tena.
- `false` wakati gateway inajua kitambulisho kinachojirudia hakipo au hakiwezi kutumika.
- `null` ili kujiondoa na kuacha tabia chaguomsingi bila kubadilika.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway inaporejesha `false`, Ultimate Multisite huhifadhi membership ikiwa na usasishaji otomatiki umezimwa na huhifadhi alama ya kitambulisho kinachokosekana. Tumia `wu_membership_renewal_credential_missing` kuwaarifu wasimamizi, kuanzisha mtiririko wa kuidhinisha upya, au kuongeza maelezo ya usaidizi:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Ondoa alama ya kitambulisho kinachokosekana kama sehemu ya mtiririko uliofanikiwa wa gateway yako wa kuidhinisha upya baada ya kitambulisho kipya kinachoweza kutumika tena kuhifadhiwa.

## Vidokezo {#tips}

- Daima rudisha `WP_Error` inapotokea hitilafu ili Ultimate Multisite iweze kushughulikia uonyeshaji wa makosa
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Tumia `wu_log_add()` kwa uwekaji kumbukumbu maalum wa gateway

## Uwezo wa watoa huduma wa kiunganishi cha AI {#ai-connector-provider-capabilities}

Miunganisho maalum inayopiga shughuli zinazoungwa mkono na kiunganishi cha AI inapaswa kuendana na seti ya watoa huduma wa OAuth inayotumika iliyoanzishwa na AI Provider for Anthropic Max v1.3.0:

| Mtoa huduma | Maelezo ya uwezo |
|---|---|
| **Anthropic Max** | Inasaidia mtiririko uliopo wa dimbwi la Account za OAuth. Hifadhi payloads za matumizi ya zana za Anthropic, ikijumuisha safu tupu za zana na sahihi za kufikiri za kwenda na kurudi, wakati wa kupitisha maombi ya kiunganishi kupitia proxy. |
| **OpenAI ChatGPT/Codex** | Inasaidia mtiririko wa dimbwi la OAuth na tabia kamili ya usaidizi wa zana kwa shughuli zinazoungwa mkono na kiunganishi. Pitisha ufafanuzi wa zana na matokeo ya miito ya zana bila kuondoa metadata ya zana maalum ya Codex. |
| **Google AI Pro** | Inasaidia mtiririko wa dimbwi la OAuth na muunganisho wa mtoa huduma unaoungwa mkono na SDK. Sasisha Account za mtoa huduma baada ya kukamilika kwa OAuth kabla ya kuelekeza maombi. |

Muunganisho wa Cursor Pro na njia za usanidi zimeondolewa. Usisajili Cursor Pro kama mtoa huduma anayeweza kuchaguliwa au kuwasilisha maelekezo ya OAuth maalum kwa Cursor katika UI maalum za kiunganishi.

Kwa mazingira ya sandbox au yasiyo na kiolesura cha moja kwa moja, weka wazi njia mbadala ya mwongozo ya OAuth ili wasimamizi waweze kubandika data ya idhini iliyorejeshwa na kukamilisha muunganisho wa Account bila kutegemea uelekezaji otomatiki wa kivinjari.
