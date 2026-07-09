---
title: కస్టమ్ గేట్‌వే అభివృద్ధి
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# కస్టమ్ గేట్‌వే అభివృద్ధి

`Base_Gateway` క్లాస్‌ను విస్తరించి మీరు కస్టమ్ చెల్లింపు గేట్‌వేలను సృష్టించవచ్చు.

## గేట్‌వే క్లాస్

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

## గేట్‌వేను నమోదు చేయండి

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ముఖ్య విధానాలు

| విధానం | ఉద్దేశ్యం |
|--------|---------|
| `process_single_payment()` | ఒకసారి చేసే చెల్లింపులను నిర్వహిస్తుంది |
| `process_signup()` | పునరావృత subscriptionలను సెటప్ చేస్తుంది |
| `process_refund()` | refund అభ్యర్థనలను నిర్వహిస్తుంది |
| `get_payment_methods()` | customer కోసం సేవ్ చేసిన చెల్లింపు విధానాలను తిరిగి ఇస్తుంది |

## పునరావృత membershipల కోసం పునరుద్ధరణ credentials

Ultimate Multisite v2.13.0 లో, `auto_renew` నిల్వ చేయబడే ముందు పునరావృత membershipకు మళ్లీ ఉపయోగించగల పునరుద్ధరణ credential ఉందో లేదో gateway integrations తెలియజేయగలవు. `wu_membership_has_renewal_credential` ను hook చేసి ఇలా తిరిగి ఇవ్వండి:

- membershipకు gateway subscription, billing agreement, vault token, లేదా దానికి సమానమైన మళ్లీ ఉపయోగించగల చెల్లింపు విధానం ఉన్నప్పుడు `true`.
- పునరావృత credential లేదని లేదా ఉపయోగించలేనిదని gatewayకు తెలిసినప్పుడు `false`.
- పాల్గొనకూడదనుకుంటే, default ప్రవర్తనను మార్చకుండా ఉంచడానికి `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

gateway `false` తిరిగి ఇస్తే, Ultimate Multisite ఆ membershipను auto-renewal నిలిపివేసి సేవ్ చేస్తుంది, అలాగే missing-credential markerను నిల్వ చేస్తుంది. నిర్వాహకులకు తెలియజేయడానికి, re-authorization flow ప్రారంభించడానికి, లేదా support notes జోడించడానికి `wu_membership_renewal_credential_missing` ను ఉపయోగించండి:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

కొత్తగా మళ్లీ ఉపయోగించగల credential నిల్వ చేసిన తర్వాత, మీ gateway యొక్క విజయవంతమైన re-authorization flow లో భాగంగా missing-credential markerను క్లియర్ చేయండి.

## సూచనలు

- విఫలమైనప్పుడు ఎల్లప్పుడూ `WP_Error` ను తిరిగి ఇవ్వండి, తద్వారా Ultimate Multisite లోపం ప్రదర్శనను నిర్వహించగలదు
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gatewayకు సంబంధించిన logging కోసం `wu_log_add()` ను ఉపయోగించండి

## AI connector provider సామర్థ్యాలు

AI connector ఆధారిత చర్యలను పిలిచే కస్టమ్ integrations, AI Provider for Anthropic Max v1.3.0 తో పరిచయం చేసిన మద్దతు ఉన్న OAuth provider సమితికి అనుగుణంగా ఉండాలి:

| ప్రొవైడర్ | సామర్థ్య గమనికలు |
|---|---|
| **Anthropic Max** | ప్రస్తుత OAuth account pool workflowకు మద్దతు ఇస్తుంది. connector అభ్యర్థనలను proxy చేస్తున్నప్పుడు, ఖాళీ tool arrays మరియు round-trip thinking signatures సహా Anthropic tool-use payloadలను అలాగే ఉంచండి. |
| **OpenAI ChatGPT/Codex** | OAuth pool workflowకు మరియు connector మద్దతు ఉన్న చర్యల కోసం పూర్తి tool-support ప్రవర్తనకు మద్దతు ఇస్తుంది. Codexకు ప్రత్యేకమైన tool metadataను తొలగించకుండా tool definitions మరియు tool-call resultsను పంపండి. |
| **Google AI Pro** | OAuth pool workflowకు మరియు SDK ఆధారిత provider integrationకు మద్దతు ఇస్తుంది. అభ్యర్థనలను route చేయడానికి ముందు OAuth completion తర్వాత provider accountsను refresh చేయండి. |

Cursor Pro integration మరియు setup మార్గాలు తీసివేయబడ్డాయి. custom connector UIsలో Cursor Proను ఎంచుకోగల providerగా నమోదు చేయవద్దు లేదా Cursorకు సంబంధించిన OAuth సూచనలు చూపవద్దు.

sandboxed లేదా headless environments కోసం, manual OAuth fallback pathను అందుబాటులో ఉంచండి. దాంతో నిర్వాహకులు తిరిగి వచ్చిన authorization dataను paste చేసి, automatic browser redirectపై ఆధారపడకుండా account connectionను పూర్తి చేయగలరు.
