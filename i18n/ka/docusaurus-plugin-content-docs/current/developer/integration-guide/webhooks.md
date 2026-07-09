---
title: Webhook-ის დამუშავება
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook დამუშავება

შექმენით მორგებული webhook endpoint-ები გარე სერვისებიდან მოვლენების მისაღებად და მონაცემების Ultimate Multisite-თან სინქრონიზაციისთვის.

## მორგებული Webhook Endpoint

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

## უსაფრთხოების მოსაზრებები

- ყოველთვის გადაამოწმეთ webhook ხელმოწერები HMAC-ის ან გაზიარებული საიდუმლოს გამოყენებით
- გამოიყენეთ `permission_callback` თქვენს REST მარშრუტზე — წარმოებაში არასოდეს დააყენოთ ის `__return_true`-ზე
- მოქმედებამდე გადაამოწმეთ და გაასუფთავეთ შემომავალი payload-ის ყველა მონაცემი
- დააბრუნეთ შესაბამისი HTTP სტატუსის კოდები (200 წარმატებისთვის, 400 არასწორი მოთხოვნებისთვის)
