---
title: Χειρισμός Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Διαχείριση Webhook

Δημιουργήστε προσαρμοσμένα endpoints webhook για να λαμβάνετε γεγονότα (events) από εξωτερικές υπηρεσίες και να συγχρονίζετε δεδομένα με το Ultimate Multisite.

## Προσαρμοσμένο Endpoint Webhook

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

## Σκέψεις Ασφαλείας

- Ελέγξτε πάντα τις υπογραφές των webhook χρησιμοποιώντας HMAC ή ένα κοινό μυστικό (shared secret).
- Χρησιμοποιήστε ένα `permission_callback` στο REST route σας — μην το ρυθμίζετε ποτέ σε `__return_true` σε περιβάλλον παραγωγής (production).
- Επαληθεύστε (validate) και καθαρίστε (sanitize) όλα τα εισερχόμενα δεδομένα payload πριν δράσετε πάνω τους.
- Επιστρέψτε τα κατάλληλα HTTP status codes (200 για επιτυχία, 400 για λανθαστικές αιτήσεις).
