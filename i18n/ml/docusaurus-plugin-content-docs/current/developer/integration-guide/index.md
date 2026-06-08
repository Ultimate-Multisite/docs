---
title: സംയോജന ഗൈഡ്
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# ഇന്റഗ്രേഷൻ ഗൈഡ്

Ultimate Multisite-മായി സാധാരണയായി ഉപയോഗിക്കുന്ന ഇന്റഗ്രേഷൻ രീതികളെക്കുറിച്ചാണ് ഈ ഗൈഡ് പറയുന്നത്. ഇതിൽ പുറത്തുള്ള സർവീസുകളുമായി കണക്ട് ചെയ്യാനുള്ള വഴികൾ, കസ്റ്റം പേയ്‌മെന്റ് ഗേറ്റ്‌വേകൾ ഉണ്ടാക്കാനുള്ള കാര്യങ്ങൾ, വെബ്‌ഹൂക്കുകൾ കൈകാര്യം ചെയ്യാനുള്ള കാര്യങ്ങൾ എന്നിവ ഉൾപ്പെടുന്നു.

## CRM ഇന്റഗ്രേഷൻ

പുതിയ ഉപഭോക്താക്കൾ സൈൻ അപ്പ് ചെയ്യുമ്പോൾ അവരുടെ ഡാറ്റ നിങ്ങളുടെ CRM-ലേക്ക് സിങ്ക് ചെയ്യുക:

```php
add_action('wu_customer_post_create', 'sync_customer_to_crm');

function sync_customer_to_crm($customer) {
    $crm_api = new Your_CRM_API();

    $crm_api->create_contact([
        'email' => $customer->get_email(),
        'name' => $customer->get_display_name(),
        'signup_date' => $customer->get_date_registered(),
        'plan' => $customer->get_membership()->get_plan()->get_name()
    ]);

    // Store CRM ID for future reference
    $customer->add_meta('crm_contact_id', $crm_api->get_last_contact_id());
}
```

## അനലിറ്റിക്സ് ഇന്റഗ്രേഷൻ

ഉപഭോക്തൃ ജീവിതചക്രത്തിലെ പ്രധാന ബിസിനസ് ഇവന്റുകൾ ട്രാക്ക് ചെയ്യുക:

```php
add_action('wu_checkout_completed', 'track_conversion', 10, 3);
add_action('wu_membership_status_to_cancelled', 'track_churn');
add_action('wu_payment_failed', 'track_payment_failure');

function track_conversion($payment, $customer, $membership) {
    // Google Analytics 4
    gtag('event', 'purchase', [
        'transaction_id' => $payment->get_id(),
        'value' => $payment->get_total(),
        'currency' => $payment->get_currency(),
        'items' => [
            [
                'item_id' => $membership->get_plan()->get_id(),
                'item_name' => $membership->get_plan()->get_name(),
                'category' => 'subscription',
                'quantity' => 1,
                'price' => $payment->get_total()
            ]
        ]
    ]);
}
```

## അടുത്ത ഘട്ടങ്ങൾ

- [Custom Gateway Development](./custom-gateway) — സ്വന്തമായി പേയ്‌മെന്റ് ഗേറ്റ്‌വേ ഉണ്ടാക്കുക
- [Webhook Handling](./webhooks) — കസ്റ്റം വെബ്‌ഹൂക്ക് എൻഡ്‌പോയിന്റുകൾ ഉണ്ടാക്കുക
