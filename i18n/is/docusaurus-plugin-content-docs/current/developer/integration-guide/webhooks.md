---
title: Meðhöndlun vefkróka
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Meðhöndlun vefkróka

Búðu til sérsniðna endapunkta fyrir vefkróka til að taka á móti atburðum frá ytri þjónustum og samstilla gögn við Ultimate Multisite.

## Sérsniðinn endapunktur fyrir vefkrók

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

## Öryggisatriði

- Staðfestu alltaf undirritanir vefkróka með HMAC eða sameiginlegu leyndarmáli
- Notaðu `permission_callback` á REST-leiðinni þinni — stilltu það aldrei á `__return_true` í framleiðslu
- Staðfestu og hreinsaðu öll innkomandi farmsgögn áður en brugðist er við þeim
- Skilaðu viðeigandi HTTP-stöðukóðum (200 fyrir árangur, 400 fyrir rangar beiðnir)
