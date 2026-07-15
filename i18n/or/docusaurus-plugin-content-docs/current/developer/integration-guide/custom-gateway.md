---
title: କଷ୍ଟମ୍ ଗେଟୱେ ବିକାଶ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# କଷ୍ଟମ Gateway ବିକାଶ

ଆପଣ `Base_Gateway` class କୁ ବିସ୍ତାର କରି କଷ୍ଟମ ପେମେଣ୍ଟ gateways ସୃଷ୍ଟି କରିପାରିବେ।

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

## Gateway ପଞ୍ଜୀକରଣ କରନ୍ତୁ {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ମୁଖ୍ୟ Methods {#key-methods}

| Method | ଉଦ୍ଦେଶ୍ୟ |
|--------|---------|
| `process_single_payment()` | ଏକକାଳୀନ ପେମେଣ୍ଟଗୁଡ଼ିକୁ ସମ୍ଭାଳନ୍ତୁ |
| `process_signup()` | ପୁନରାବୃତ୍ତ subscription ସେଟ୍ ଅପ୍ କରନ୍ତୁ |
| `process_refund()` | refund ଅନୁରୋଧଗୁଡ଼ିକୁ ସମ୍ଭାଳନ୍ତୁ |
| `get_payment_methods()` | ଜଣେ ଗ୍ରାହକ ପାଇଁ ସଞ୍ଚିତ ପେମେଣ୍ଟ methods ଫେରାନ୍ତୁ |

## ପୁନରାବୃତ୍ତ memberships ପାଇଁ ନବୀକରଣ credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway ସମନ୍ୱୟଗୁଡ଼ିକୁ `auto_renew` ରଖାଯିବା ପୂର୍ବରୁ ଏକ ପୁନରାବୃତ୍ତ membership ପାଖରେ ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ ନବୀକରଣ credential ଅଛି କି ନାହିଁ ଜଣାଇବାକୁ ଦିଏ। `wu_membership_has_renewal_credential` କୁ hook କରନ୍ତୁ ଏବଂ ଫେରାନ୍ତୁ:

- membership ପାଖରେ gateway subscription, billing agreement, vault token, କିମ୍ବା ସମାନ ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ ପେମେଣ୍ଟ method ଥିଲେ `true`।
- gateway ଯଦି ପୁନରାବୃତ୍ତ credential ନାହିଁ କିମ୍ବା ବ୍ୟବହାରଯୋଗ୍ୟ ନୁହେଁ ବୋଲି ଜାଣେ, `false`।
- ବାହାରିବା ପାଇଁ ଏବଂ ପୂର୍ବନିର୍ଦ୍ଧାରିତ ଆଚରଣକୁ ଅପରିବର୍ତ୍ତିତ ରଖିବା ପାଇଁ `null`।

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway `false` ଫେରାଇଲେ, Ultimate Multisite auto-renewal ବନ୍ଦ ରଖି membership ସେଭ୍ କରେ ଏବଂ ନଥିବା credential ଚିହ୍ନ ସଞ୍ଚୟ କରେ। ପ୍ରଶାସକମାନଙ୍କୁ ସୂଚିତ କରିବା, ପୁନଃ-ଅନୁମୋଦନ ପ୍ରବାହ ଆରମ୍ଭ କରିବା, କିମ୍ବା ସହାୟତା ଟିପ୍ପଣୀ ଯୋଡ଼ିବା ପାଇଁ `wu_membership_renewal_credential_missing` ବ୍ୟବହାର କରନ୍ତୁ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

ନୂତନ ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ credential ସଞ୍ଚୟ ହେବା ପରେ, ଆପଣଙ୍କ gateway ର ସଫଳ ପୁନଃ-ଅନୁମୋଦନ ପ୍ରବାହର ଅଂଶ ଭାବେ ନଥିବା credential ଚିହ୍ନକୁ ସଫା କରନ୍ତୁ।

## ପରାମର୍ଶ {#tips}

- ବିଫଳତାରେ ସଦା `WP_Error` ଫେରାନ୍ତୁ, ଯାହାଦ୍ୱାରା Ultimate Multisite ତ୍ରୁଟି ପ୍ରଦର୍ଶନ ସମ୍ଭାଳିପାରିବ
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-ନିର୍ଦ୍ଦିଷ୍ଟ ଲଗିଂ ପାଇଁ `wu_log_add()` ବ୍ୟବହାର କରନ୍ତୁ

## AI connector provider କ୍ଷମତା {#ai-connector-provider-capabilities}

AI connector-ସମର୍ଥିତ କାର୍ଯ୍ୟଗୁଡ଼ିକୁ କଲ୍ କରୁଥିବା କଷ୍ଟମ ସମନ୍ୱୟଗୁଡ଼ିକ AI Provider for Anthropic Max v1.3.0 ସହିତ ପରିଚୟ କରାଯାଇଥିବା ସମର୍ଥିତ OAuth provider ସେଟ୍ ସହିତ ମେଳ ରଖିବା ଉଚିତ:

| Provider | କ୍ଷମତା ଟିପ୍ପଣୀ |
|---|---|
| **Anthropic Max** | ବର୍ତ୍ତମାନର OAuth account pool workflow କୁ ସମର୍ଥନ କରେ। connector ଅନୁରୋଧଗୁଡ଼ିକୁ proxy କରିବାବେଳେ, ଖାଲି tool arrays ଏବଂ round-trip thinking signatures ସହିତ Anthropic tool-use payloads ସଂରକ୍ଷଣ କରନ୍ତୁ। |
| **OpenAI ChatGPT/Codex** | OAuth pool workflow ଏବଂ connector-ସମର୍ଥିତ କାର୍ଯ୍ୟଗୁଡ଼ିକ ପାଇଁ ପୂର୍ଣ୍ଣ tool-support ଆଚରଣକୁ ସମର୍ଥନ କରେ। Codex-ନିର୍ଦ୍ଦିଷ୍ଟ tool metadata କାଟି ନଦେଇ tool definitions ଏବଂ tool-call results କୁ ପାସ୍ କରନ୍ତୁ। |
| **Google AI Pro** | OAuth pool workflow ଏବଂ SDK-ସମର୍ଥିତ provider integration କୁ ସମର୍ଥନ କରେ। ଅନୁରୋଧଗୁଡ଼ିକୁ route କରିବା ପୂର୍ବରୁ OAuth completion ପରେ provider accounts refresh କରନ୍ତୁ। |

Cursor Pro ସମନ୍ୱୟ ଏବଂ ସେଟଅପ୍ ପଥଗୁଡ଼ିକୁ ହଟାଯାଇଛି। Cursor Pro କୁ ଚୟନଯୋଗ୍ୟ provider ଭାବେ ପଞ୍ଜୀକରଣ କରନ୍ତୁ ନାହିଁ କିମ୍ବା କଷ୍ଟମ connector UI ଗୁଡ଼ିକରେ Cursor-ନିର୍ଦ୍ଦିଷ୍ଟ OAuth ନିର୍ଦ୍ଦେଶନାମା ଦେଖାନ୍ତୁ ନାହିଁ।

Sandboxed କିମ୍ବା headless ପରିବେଶଗୁଡ଼ିକ ପାଇଁ, manual OAuth fallback path ଦେଖାନ୍ତୁ, ଯାହାଦ୍ୱାରା ପ୍ରଶାସକମାନେ ଫେରାଇଥିବା authorization data ପେଷ୍ଟ କରିପାରିବେ ଏବଂ ସ୍ୱୟଂଚାଳିତ browser redirect ଉପରେ ନିର୍ଭର ନକରି account connection ସମ୍ପୂର୍ଣ୍ଣ କରିପାରିବେ।
