---
title: ការគ្រប់គ្រង Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# ការដោះស្រាយ webhook

បង្កើតចំណុចបញ្ចប់ webhook ផ្ទាល់ខ្លួន ដើម្បីទទួលព្រឹត្តិការណ៍ពីសេវាខាងក្រៅ និងធ្វើសមកាលកម្មទិន្នន័យជាមួយ Ultimate Multisite។

## ចំណុចបញ្ចប់ webhook ផ្ទាល់ខ្លួន {#custom-webhook-endpoint}

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

## ចំណុចត្រូវពិចារណាផ្នែកសុវត្ថិភាព {#security-considerations}

- ផ្ទៀងផ្ទាត់ហត្ថលេខា webhook ជានិច្ច ដោយប្រើ HMAC ឬសម្ងាត់រួម
- ប្រើ `permission_callback` លើ REST route របស់អ្នក — កុំកំណត់វាជា `__return_true` ក្នុងផលិតកម្ម
- ផ្ទៀងផ្ទាត់ និងសម្អាតទិន្នន័យ payload ដែលចូលមកទាំងអស់ មុននឹងធ្វើសកម្មភាពលើវា
- ត្រឡប់កូដស្ថានភាព HTTP ដែលសមស្រប (200 សម្រាប់ជោគជ័យ, 400 សម្រាប់សំណើមិនត្រឹមត្រូវ)
