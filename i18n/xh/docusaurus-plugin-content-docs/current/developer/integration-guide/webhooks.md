---
title: Ukuphathwa kwe-Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Ukuphathwa kwee-webhook

Yenza iziphelo ze-webhook ezenzelwe wena ukuze ufumane iziganeko ezivela kwiinkonzo zangaphandle uze ungqamanise idatha ne-Ultimate Multisite.

## Isiphelo se-Webhook Esenzelwe Wena

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

## Iingqwalasela Zokhuseleko

- Soloko uqinisekisa iisiginitsha ze-webhook usebenzisa i-HMAC okanye imfihlo ekwabelwana ngayo
- Sebenzisa i-`permission_callback` kwindlela yakho ye-REST — ungaze uyimise ku-`__return_true` kwimveliso
- Qinisekisa uze ucoce yonke idatha ye-payload engenayo ngaphambi kokuba wenze into ngayo
- Buyisela iikhowudi ezifanelekileyo zesimo se-HTTP (200 xa kuphumelele, 400 kwizicelo ezingachanekanga)
