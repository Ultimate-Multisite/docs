---
title: خاس دەرۋازا ئېچىش
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ئىختىيارىي Gateway ئىجاد قىلىش

`Base_Gateway` class نى كېڭەيتىش ئارقىلىق ئىختىيارىي ھەق تۆلەش gatewayلىرىنى قۇرالايسىز.

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

## Gateway نى تىزىملاش {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## مۇھىم ئۇسۇللار {#key-methods}

| Method | مەقسەت |
|--------|---------|
| `process_single_payment()` | بىر قېتىملىق ھەق تۆلەشلەرنى بىر تەرەپ قىلىدۇ |
| `process_signup()` | تەكرارلىنىدىغان مۇشتەرىلىكلەرنى تەڭشەيدۇ |
| `process_refund()` | پۇل قايتۇرۇش تەلەپلىرىنى بىر تەرەپ قىلىدۇ |
| `get_payment_methods()` | خېرىدار ئۈچۈن ساقلانغان ھەق تۆلەش ئۇسۇللىرىنى قايتۇرىدۇ |

## تەكرارلىنىدىغان ئەزالىقلار ئۈچۈن يېڭىلاش ئىسپات ئۇچۇرى {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway بىرلەشتۈرۈشلىرىگە، `auto_renew` ساقلىنىشتىن بۇرۇن، تەكرارلىنىدىغان ئەزالىقتا قايتا ئىشلىتىلىدىغان يېڭىلاش ئىسپات ئۇچۇرىنىڭ بار-يوقلۇقىنى مەلۇم قىلىش ئىمكانىنى بېرىدۇ. `wu_membership_has_renewal_credential` نى hook قىلىپ، تۆۋەندىكىلەرنى قايتۇرۇڭ:

- ئەزالىقتا gateway مۇشتەرىلىكى، billing agreement، vault token ياكى شۇنىڭغا تەڭداش قايتا ئىشلىتىلىدىغان ھەق تۆلەش ئۇسۇلى بولغاندا `true`.
- gateway تەكرارلىنىدىغان ئىسپات ئۇچۇرىنىڭ يوق ياكى ئىشلىتىشكە بولمايدىغانلىقىنى بىلگەندە `false`.
- چېكىنىپ، سۈكۈتتىكى ھەرىكەتنى ئۆزگەرمەس ھالدا ساقلاش ئۈچۈن `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

gateway `false` قايتۇرغاندا، Ultimate Multisite ئەزالىقنى ئاپتوماتىك يېڭىلاش چەكلەنگەن ھالدا ساقلايدۇ ۋە يوق ئىسپات ئۇچۇرى بەلگىسىنى ساقلايدۇ. باشقۇرغۇچىلارغا ئۇقتۇرۇش، قايتا ھوقۇقلاندۇرۇش ئېقىمىنى باشلاش ياكى قوللاش ئىزاھاتلىرىنى قوشۇش ئۈچۈن `wu_membership_renewal_credential_missing` نى ئىشلىتىڭ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

يېڭى قايتا ئىشلىتىلىدىغان ئىسپات ئۇچۇرى ساقلانغاندىن كېيىن، gatewayىڭىزنىڭ مۇۋەپپەقىيەتلىك قايتا ھوقۇقلاندۇرۇش ئېقىمىنىڭ بىر قىسمى سۈپىتىدە يوق ئىسپات ئۇچۇرى بەلگىسىنى تازىلاڭ.

## تەكلىپلەر {#tips}

- مەغلۇب بولغاندا ھەمىشە `WP_Error` قايتۇرۇڭ، شۇنداق بولغاندا Ultimate Multisite خاتالىق كۆرسىتىشنى بىر تەرەپ قىلالايدۇ
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway غا خاس خاتىرىلەش ئۈچۈن `wu_log_add()` نى ئىشلىتىڭ

## AI ئۇلىغۇچ تەمىنلىگۈچى ئىقتىدارلىرى {#ai-connector-provider-capabilities}

AI ئۇلىغۇچ قوللايدىغان مەشغۇلاتلارنى چاقىرىدىغان ئىختىيارىي بىرلەشتۈرۈشلەر AI Provider for Anthropic Max v1.3.0 بىلەن تونۇشتۇرۇلغان قوللايدىغان OAuth تەمىنلىگۈچى توپلىمىغا ماس كېلىشى كېرەك:

| تەمىنلىگۈچى | ئىقتىدار ئىزاھاتلىرى |
|---|---|
| **Anthropic Max** | مەۋجۇت OAuth account pool خىزمەت ئېقىمىنى قوللايدۇ. ئۇلىغۇچ تەلەپلىرىنى proxy قىلغاندا، قۇرۇق tool arrayلىرى ۋە قايتما-سەپەر thinking signatureلىرىنى ئۆز ئىچىگە ئالغان Anthropic tool-use payloadلىرىنى ساقلاڭ. |
| **OpenAI ChatGPT/Codex** | OAuth pool خىزمەت ئېقىمىنى ۋە ئۇلىغۇچ قوللايدىغان مەشغۇلاتلار ئۈچۈن تولۇق tool-support ھەرىكىتىنى قوللايدۇ. tool ئېنىقلىمىلىرى ۋە tool-call نەتىجىلىرىنى Codex غا خاس tool metadataسىنى ئېلىۋەتمەستىن ئۆتكۈزۈڭ. |
| **Google AI Pro** | OAuth pool خىزمەت ئېقىمىنى ۋە SDK قوللايدىغان تەمىنلىگۈچى بىرلەشتۈرۈشىنى قوللايدۇ. تەلەپ يوللاشتىن بۇرۇن OAuth تاماملانغاندىن كېيىن تەمىنلىگۈچى accountلىرىنى يېڭىلاڭ. |

Cursor Pro بىرلەشتۈرۈشى ۋە تەڭشەش يوللىرى ئۆچۈرۈلدى. Cursor Pro نى تاللىغىلى بولىدىغان تەمىنلىگۈچى سۈپىتىدە تىزىملىماڭ ياكى ئىختىيارىي ئۇلىغۇچ UIلىرىدا Cursor غا خاس OAuth كۆرسەتمىلىرىنى كۆرسەتمەڭ.

sandbox قىلىنغان ياكى headless مۇھىتلار ئۈچۈن، قولدا OAuth زاپاس يولىنى ئاشكارىلاڭ، شۇنداق بولغاندا باشقۇرغۇچىلار قايتۇرۇلغان authorization سانلىق مەلۇماتلىرىنى چاپلاپ، ئاپتوماتىك browser قايتا يۆتكەشكە تايانماي account ئۇلىنىشىنى تاماملىيالايدۇ.
