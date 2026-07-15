---
title: வெப்ஹூக் கையாளுதல்
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# வெப்ஹூக் கையாளுதல்

வெளிப்புற சேவைகளிலிருந்து (external services) வரும் நிகழ்வுகளை (events) பெறவும், Ultimate Multisite உடன் தரவை ஒத்திசைக்கவும் (sync) தனிப்பயன் வெப்ஹூக் எண்ட்பாயிண்ட்களை உருவாக்கவும்.

## தனிப்பயன் வெப்ஹூக் எண்ட்பாயிண்ட் {#custom-webhook-endpoint}

```php
// Register webhook endpoint
add_action('rest_api_init', function() {
    register_rest_route('my-addon/v1', '/webhook', [
        'methods' => 'POST',
        'callback' => 'handle_my_webhook',
        'permission_callback' => 'verify_webhook_signature'
    ]);
});

function handle_my_webhook($request) {
    $payload = $request->get_json_params();

    switch ($payload['event_type']) {
        case 'customer.updated':
            $customer = wu_get_customer($payload['customer_id']);
            if ($customer) {
                $customer->set_vip($payload['data']['is_vip']);
                $customer->save();
            }
            break;

        case 'subscription.cancelled':
            $membership = wu_get_membership_by_hash($payload['subscription_id']);
            if ($membership) {
                $membership->cancel();
            }
            break;
    }

    return ['status' => 'processed'];
}

function verify_webhook_signature($request) {
    $signature = $request->get_header('X-Webhook-Signature');
    $payload = $request->get_body();
    $secret = get_option('my_webhook_secret');

    return hash_hmac('sha256', $payload, $secret) === $signature;
}
```

## பாதுகாப்பு அம்சங்கள் {#security-considerations}

- HMAC அல்லது பகிரப்பட்ட ரகசியத்தைப் (shared secret) பயன்படுத்தி எப்போதும் வெப்ஹூக் கையொப்பங்களை (signatures) சரிபார்க்கவும்.
- உங்கள் REST ரூட்டில் ஒரு `permission_callback`-ஐப் பயன்படுத்தவும் — இதை ஒருபோதும் தயாரிப்புச் சூழலில் (production) `__return_true` என்று அமைக்க வேண்டாம்.
- செயல்படுவதற்கு முன் வரும் அனைத்து payload தரவுகளையும் சரிபார்த்து (validate) சுத்திகரிக்கவும் (sanitize).
- பொருத்தமான HTTP நிலை குறியீடுகளை (status codes) திருப்பி அனுப்பவும் (வெற்றிக்காக 200, தவறான கோரிக்கைகளுக்கு 400).
