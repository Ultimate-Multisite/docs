---
title: ویب ہک ہینڈلنگ
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# ویب ہک ہینڈلنگ {#webhook-handling}

بیرونی سروسز سے ایونٹس وصول کرنے اور ڈیٹا کو Ultimate Multisite کے ساتھ سنک کرنے کے لیے کسٹم ویب ہک اینڈ پوائنٹس بنائیں۔

## کسٹم ویب ہک اینڈ پوائنٹ {#custom-webhook-endpoint}

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

## سیکیورٹی کے نکات {#security-considerations}

- ہمیشہ HMAC یا مشترکہ خفیہ کوڈ (shared secret) کا استعمال کرتے ہوئے ویب ہک سگنیچرز کی تصدیق کریں۔
- اپنے REST روٹ پر `permission_callback` استعمال کریں — اسے کبھی بھی پروجیکشن میں `__return_true` پر سیٹ نہ کریں۔
- کوئی بھی کارروائی کرنے سے پہلے تمام آنے والے پی لوڈ ڈیٹا کو درست (validate) اور صاف (sanitize) کریں۔
- مناسب HTTP اسٹیٹس کوڈز واپس کریں (کامیابی کے لیے 200، خراب درخواستوں کے لیے 400)۔
