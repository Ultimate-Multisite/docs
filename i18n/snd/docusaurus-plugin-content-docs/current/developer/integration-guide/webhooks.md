---
title: Webhook سنڀال
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook سنڀال

ٻاهرين خدمتن کان واقعا حاصل ڪرڻ ۽ Ultimate Multisite سان ڊيٽا هم وقت ڪرڻ لاءِ ڪسٽم webhook آخري نقطا ٺاهيو.

## ڪسٽم Webhook آخري نقطو {#custom-webhook-endpoint}

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

## سلامتيءَ جا ويچار {#security-considerations}

- هميشه HMAC يا گڏيل راز استعمال ڪندي webhook دستخطن جي تصديق ڪريو
- پنهنجي REST رستي تي `permission_callback` استعمال ڪريو — عملي ماحول ۾ ان کي ڪڏهن به `__return_true` تي مقرر نه ڪريو
- ان تي عمل ڪرڻ کان اڳ سڀ ايندڙ payload ڊيٽا جي توثيق ۽ صفائي ڪريو
- مناسب HTTP حالت ڪوڊ واپس ڏيو (ڪاميابي لاءِ 200، خراب درخواستن لاءِ 400)
