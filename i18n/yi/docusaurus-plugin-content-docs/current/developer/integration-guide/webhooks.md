---
title: Webhook־באַהאַנדלונג
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# וועבהוק־באַהאַנדלונג

שאַפֿט אייגענע וועבהוק־ענדפּונקטן צו באַקומען געשעענישן פֿון אויסנווייניקע באַדינונגען און סינכראָניזירן דאַטן מיט Ultimate Multisite.

## אייגענער וועבהוק־ענדפּונקט

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

## זיכערהייט־באַטראַכטונגען

- באַשטעטיקט שטענדיק וועבהוק־אונטערשריפטן ניצנדיק HMAC אָדער אַ געטיילטן סוד
- ניצט אַ `permission_callback` אויף אייער REST־רוט — שטעלט עס קיינמאָל נישט אויף `__return_true` אין פּראָדוקציע
- וואַלידירט און רייניקט אַלע אַרײַנקומענדיקע פּיילאָוד־דאַטן איידער איר האַנדלט לויט זיי
- גיט צוריק פּאַסיקע HTTP־סטאַטוס־קאָדן (200 פֿאַר הצלחה, 400 פֿאַר שלעכטע בקשות)
