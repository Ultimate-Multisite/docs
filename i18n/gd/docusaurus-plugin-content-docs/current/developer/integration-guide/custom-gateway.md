---
title: Leasachadh Geata Gnàthaichte
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Leasachadh Gateway Gnàthaichte

Faodaidh tu gateways pàighidh gnàthaichte a chruthachadh le bhith a’ leudachadh a’ chlas `Base_Gateway`.

## Clas Gateway {#gateway-class}

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

## Clàraich an Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Prìomh dhòighean {#key-methods}

| Dòigh | Adhbhar |
|--------|---------|
| `process_single_payment()` | Làimhsich pàighidhean aon-ùine |
| `process_signup()` | Stèidhich fo-sgrìobhaidhean ath-chuairteachaidh |
| `process_refund()` | Làimhsich iarrtasan ais-phàighidh |
| `get_payment_methods()` | Till dòighean pàighidh sàbhailte airson neach-ceannach |

## Teisteanasan ath-nuadhachaidh airson ballrachdan ath-chuairteachaidh {#renewal-credentials-for-recurring-memberships}

Leigidh Ultimate Multisite v2.13.0 le amalachaidhean gateway aithris a bheil teisteanas ath-nuadhachaidh ath-chleachdte aig ballrachd ath-chuairteachaidh mus tèid `auto_renew` a chumail. Ceangail `wu_membership_has_renewal_credential` agus till:

- `true` nuair a tha fo-sgrìobhadh gateway, aonta bileachaidh, vault token, no dòigh pàighidh ath-chleachdte co-ionann aig a’ bhallrachd.
- `false` nuair a tha fios aig an gateway gu bheil an teisteanas ath-chuairteachaidh a dhìth no do-chleachdte.
- `null` gus tarraing a-mach agus an giùlan bunaiteach a chumail gun atharrachadh.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Nuair a thilleas gateway `false`, sàbhalaidh Ultimate Multisite a’ bhallrachd le fèin-ath-nuadhachadh à comas agus cumaidh e comharra teisteanais a tha a dhìth. Cleachd `wu_membership_renewal_credential_missing` gus fios a chur gu rianairean, sruth ath-ùghdarachaidh a thòiseachadh, no notaichean taice a chur ris:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Glan an comharra teisteanais a tha a dhìth mar phàirt de shruth ath-ùghdarachaidh soirbheachail an gateway agad às dèidh teisteanas ath-chleachdte ùr a bhith air a stòradh.

## Molaidhean {#tips}

- Till `WP_Error` an-còmhnaidh ma dh’fhàillig e gus an urrainn do Ultimate Multisite taisbeanadh mhearachdan a làimhseachadh
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Cleachd `wu_log_add()` airson logadh sònraichte don gateway

## Comasan solaraiche ceanglaiche AI {#ai-connector-provider-capabilities}

Bu chòir do dh’amalachaidhean gnàthaichte a bhios a’ gairm obrachaidhean le taic bho cheanglaiche AI a bhith co-thaobhach ris an t-seata sholaraichean OAuth le taic a chaidh a thoirt a-steach le AI Provider for Anthropic Max v1.3.0:

| Solaraiche | Notaichean comais |
|---|---|
| **Anthropic Max** | A’ toirt taic don t-sruth-obrach pool Account OAuth a tha ann mu thràth. Glèidh payloads cleachdadh-innealan Anthropic, a’ gabhail a-steach arrays innealan falamh agus ainmean-sgrìobhte smaoineachaidh turais-chruinn, nuair a thathar a’ proxyadh iarrtasan ceanglaiche. |
| **OpenAI ChatGPT/Codex** | A’ toirt taic don t-sruth-obrach pool OAuth agus giùlan làn-thaic innealan airson obrachaidhean le taic ceanglaiche. Cuir mìneachaidhean innealan agus toraidhean gairm-inneil troimhe gun metadata innealan sònraichte do Codex a thoirt air falbh. |
| **Google AI Pro** | A’ toirt taic don t-sruth-obrach pool OAuth agus amalachadh solaraiche le taic SDK. Ùraich Accountan solaraiche às dèidh crìochnachadh OAuth mus tèid iarrtasan a stiùireadh. |

Chaidh amalachadh Cursor Pro agus slighean rèiteachaidh a thoirt air falbh. Na clàraich Cursor Pro mar sholaraiche a ghabhas taghadh no na seall stiùiridhean OAuth sònraichte do Cursor ann an UIan ceanglaiche gnàthaichte.

Airson àrainneachdan sandboxed no gun cheann, nochd an t-slighe cùl-taic OAuth làimhe gus an urrainn do rianairean an dàta ùghdarachaidh a thilleadh a phasgadh a-steach agus ceangal Account a chrìochnachadh gun a bhith an urra ri ath-stiùireadh brabhsair fèin-obrachail.
