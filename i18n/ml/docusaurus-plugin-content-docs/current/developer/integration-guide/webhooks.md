---
title: വെബ്ഹൂക്ക് കൈകാര്യം ചെയ്യൽ
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# വെബ്ഹൂക്ക് കൈകാര്യം ചെയ്യൽ (Webhook Handling)

പുറത്തുള്ള സേവനങ്ങളിൽ നിന്ന് ഇവന്റുകൾ സ്വീകരിക്കാനും ഡാറ്റ Ultimate Multisite-മായി സമന്വയിപ്പിക്കാനും വേണ്ടി കസ്റ്റം വെബ്ഹൂക്ക് എൻഡ്‌പോയിന്റുകൾ സൃഷ്ടിക്കുക.

## കസ്റ്റം വെബ്ഹൂക്ക് എൻഡ്‌പോയിന്റ് (Custom Webhook Endpoint) {#custom-webhook-endpoint}

```php
// വെബ്ഹൂക്ക് എൻഡ്‌പോയിന്റ് രജിസ്റ്റർ ചെയ്യുന്നു
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

## സുരക്ഷാ പരിഗണനകൾ (Security Considerations) {#security-considerations}

- എപ്പോഴും HMAC അല്ലെങ്കിൽ ഒരു ഷെയേർഡ് സീക്രറ്റ് ഉപയോഗിച്ച് വെബ്ഹൂക്ക് സിഗ്നേച്ചറുകൾ പരിശോധിക്കുക.
- നിങ്ങളുടെ REST റൂട്ടിൽ ഒരു `permission_callback` ഉപയോഗിക്കുക — പ്രൊഡക്ഷനിൽ ഇത് ഒരിക്കലും `__return_true` എന്ന് സജ്ജമാക്കരുത്.
- പ്രവർത്തിക്കുന്നതിന് മുമ്പ് വരുന്ന എല്ലാ പേലോഡ് ഡാറ്റയും (payload data) സാധൂകരിക്കുകയും സാനിറ്റൈസ് ചെയ്യുകയും ചെയ്യുക.
- അനുയോജ്യമായ HTTP സ്റ്റാറ്റസ് കോഡുകൾ തിരികെ നൽകുക (വിജയത്തിന് 200, തെറ്റായ അഭ്യർത്ഥനകൾക്ക് 400).
