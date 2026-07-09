---
title: ብጁ ጌትዌይ ልማት
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ብጁ Gateway ልማት

`Base_Gateway` classን በማስፋት ብጁ የክፍያ gateways መፍጠር ይችላሉ።

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

## Gatewayን ይመዝግቡ

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ቁልፍ ዘዴዎች

| ዘዴ | ዓላማ |
|--------|---------|
| `process_single_payment()` | አንድ-ጊዜ ክፍያዎችን ያስተናግዱ |
| `process_signup()` | ተደጋጋሚ subscriptions ያዋቅሩ |
| `process_refund()` | የተመላሽ ክፍያ ጥያቄዎችን ያስተናግዱ |
| `get_payment_methods()` | ለደንበኛ የተቀመጡ የክፍያ ዘዴዎችን ይመልሱ |

## ለተደጋጋሚ አባልነቶች የእድሳት credentials

Ultimate Multisite v2.13.0 gateway ውህደቶች `auto_renew` ከመቀመጡ በፊት ተደጋጋሚ አባልነት ዳግም ጥቅም ላይ የሚውል የእድሳት credential እንዳለው መግለጽ እንዲችሉ ያደርጋል። `wu_membership_has_renewal_credential`ን Hook ያድርጉ እና ይመልሱ፦

- `true` አባልነቱ የgateway subscription፣ የbilling agreement፣ vault token፣ ወይም ተመሳሳይ ዳግም ጥቅም ላይ የሚውል የክፍያ ዘዴ ሲኖረው።
- `false` gatewayው ተደጋጋሚ credential እንደጎደለ ወይም ጥቅም ላይ መዋል እንደማይችል ሲያውቅ።
- `null` ለመውጣት እና ነባሪ ባህሪውን ሳይቀይሩ ለማቆየት።

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

gateway `false` ሲመልስ፣ Ultimate Multisite አባልነቱን auto-renewal ተሰናክሎ ያስቀምጣል እና የጎደለ-credential ምልክት ያከማቻል። አስተዳዳሪዎችን ለማሳወቅ፣ የዳግም-ፈቃድ ፍሰት ለመጀመር፣ ወይም የድጋፍ ማስታወሻዎችን ለመጨመር `wu_membership_renewal_credential_missing`ን ይጠቀሙ፦

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

አዲስ ዳግም ጥቅም ላይ የሚውል credential ከተቀመጠ በኋላ እንደ gatewayዎ የተሳካ የዳግም-ፈቃድ ፍሰት አካል የጎደለ-credential ምልክቱን ያጽዱ።

## ጠቃሚ ምክሮች

- በውድቀት ጊዜ ሁልጊዜ `WP_Error` ይመልሱ፣ ስለዚህ Ultimate Multisite የስህተት ማሳያን ማስተናገድ ይችላል
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ለgateway-ተኮር መመዝገብ `wu_log_add()`ን ይጠቀሙ

## የAI connector አቅራቢ ችሎታዎች

በAI connector የተደገፉ ክንውኖችን የሚጠሩ ብጁ ውህደቶች ከAI Provider for Anthropic Max v1.3.0 ጋር ከተዋወቀው የተደገፈ የOAuth አቅራቢ ስብስብ ጋር መጣጣም አለባቸው፦

| አቅራቢ | የችሎታ ማስታወሻዎች |
|---|---|
| **Anthropic Max** | ነባሩን የOAuth account pool workflow ይደግፋል። የconnector ጥያቄዎችን በproxy ሲያስተላልፉ፣ ባዶ tool arrays እና round-trip thinking signaturesን ጨምሮ የAnthropic tool-use payloadsን ያቆዩ። |
| **OpenAI ChatGPT/Codex** | የOAuth pool workflow እና ለconnector-የተደገፉ ክንውኖች ሙሉ tool-support ባህሪን ይደግፋል። የCodex-ተኮር tool metadataን ሳያስወግዱ፣ tool definitions እና tool-call resultsን እንዳሉ ያስተላልፉ። |
| **Google AI Pro** | የOAuth pool workflow እና SDK-የተደገፈ የአቅራቢ ውህደትን ይደግፋል። ጥያቄዎችን ከማዞርዎ በፊት OAuth ከተጠናቀቀ በኋላ የአቅራቢ accountsን ያድሱ። |

Cursor Pro ውህደት እና የማዋቀር መንገዶች ተወግደዋል። Cursor Proን እንደሚመረጥ አቅራቢ አይመዝግቡ ወይም በብጁ connector UIs ውስጥ የCursor-ተኮር OAuth መመሪያዎችን አታቅርቡ።

ለsandboxed ወይም headless አካባቢዎች፣ አስተዳዳሪዎች የተመለሰውን የፈቃድ ውሂብ መለጠፍ እና በራስ-ሰር የbrowser redirect ሳይመሰረቱ የaccount ግንኙነትን ማጠናቀቅ እንዲችሉ የmanual OAuth fallback መንገድን ያቅርቡ።
