---
title: טיפול בוו-בק
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# טיפול ב-Webhook

צור נקודות קצה (endpoints) של Webhook מותאמות אישית כדי לקבל אירועים משירותים חיצוניים ולסנכרן נתונים עם Ultimate Multisite.

## נקודת קצה (Endpoint) Webhook מותאמת אישית {#custom-webhook-endpoint}

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

## שיקולי אבטחה {#security-considerations}

- תמיד ודא את חתימות ה-webhook באמצעות HMAC או סוד משותף.
- השתמש ב-`permission_callback` בנתיב ה-REST שלך — לעולם אל תגדיר אותו ל-`__return_true` בסביבת הפקה (production).
- אמת ונקנן (validate and sanitize) את כל נתוני ה-payload הנכנסים לפני שאתה פועל על בסיסם.
- החזר קודי סטטוס HTTP מתאימים (200 להצלחה, 400 לבקשות שגויות).
