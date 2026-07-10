---
title: സംയോജന മാർഗ്ഗനിർദ്ദേശം
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# സംയോജന മാർഗ്ഗനിർദ്ദേശം {#integration-guide}

Ultimate Multisite-യുമായി ബന്ധപ്പെട്ട സാധാരണ സംയോജന രീതികൾ ഈ മാർഗ്ഗനിർദ്ദേശം വിവരിക്കുന്നു. ബാഹ്യ സേവനങ്ങളിലേക്ക് ബന്ധിപ്പിക്കൽ, ഇഷ്ടാനുസൃത പേയ്മെന്റ് ഗേറ്റ്‌വേകൾ നിർമ്മിക്കൽ, വെബ്‌ഹുക്കുകൾ കൈകാര്യം ചെയ്യൽ എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.

ഒറ്റപ്പെട്ട tenant അടിസ്ഥാനസൗകര്യത്തിനായി, സ്വതന്ത്ര tenant bootstrap, migration verification, SSO, teardown മാർഗ്ഗനിർദ്ദേശങ്ങൾക്കായി [Multi-Tenancy Integration](./multi-tenancy) കാണുക.

## CRM സംയോജനം {#crm-integration}

പുതിയ കസ്റ്റമർമാർ സൈൻ അപ്പ് ചെയ്യുമ്പോൾ കസ്റ്റമർ ഡാറ്റ നിങ്ങളുടെ CRM-ലേക്ക് സമന്വയിപ്പിക്കുക:

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

## വിശകലന സംയോജനം {#analytics-integration}

കസ്റ്റമർ ജീവിതചക്രത്തിലുടനീളം പ്രധാന ബിസിനസ് ഇവന്റുകൾ ട്രാക്ക് ചെയ്യുക:

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

## അടുത്ത ഘട്ടങ്ങൾ {#next-steps}

- [ഇഷ്ടാനുസൃത ഗേറ്റ്‌വേ വികസനം](./custom-gateway) — നിങ്ങളുടെ സ്വന്തം പേയ്മെന്റ് ഗേറ്റ്‌വേ നിർമ്മിക്കുക
- [വെബ്‌ഹുക്ക് കൈകാര്യം ചെയ്യൽ](./webhooks) — ഇഷ്ടാനുസൃത വെബ്‌ഹുക്ക് അവസാനബിന്ദുക്കൾ സൃഷ്ടിക്കുക
- [Multi-Tenancy Integration](./multi-tenancy) — സ്വതന്ത്ര tenant ജീവിതചക്ര പ്രവാഹങ്ങളുമായി സംയോജിപ്പിക്കുക
