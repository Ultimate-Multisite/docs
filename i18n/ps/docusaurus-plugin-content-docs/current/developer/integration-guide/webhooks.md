---
title: د Webhook سمبالول
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# د وېبهوک سمبالول {#webhook-handling}

د بهرنیو خدمتونو څخه د پېښو ترلاسه کولو او له Ultimate Multisite سره د معلوماتو هممهاله کولو لپاره دودیز وېبهوک پای ټکي جوړ کړئ.

## دودیز وېبهوک پای ټکی {#custom-webhook-endpoint}

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

## امنیتي ملاحظات {#security-considerations}

- تل د HMAC یا ګډ راز په کارولو سره د وېبهوک لاسلیکونه تایید کړئ
- په خپل REST لار کې `permission_callback` وکاروئ — په تولیدي چاپېریال کې یې هېڅکله `__return_true` ته مه ټاکئ
- د پرې عمل کولو مخکې ټول راتلونکي payload معلومات تایید او پاک کړئ
- مناسب HTTP حالت کوډونه بېرته ورکړئ (د بریا لپاره 200، د خرابو غوښتنو لپاره 400)
