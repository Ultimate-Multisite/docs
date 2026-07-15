---
title: ଏକୀକରଣ ମାର୍ଗଦର୍ଶିକା
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ଏକୀକରଣ ମାର୍ଗଦର୍ଶିକା

ଏହି ମାର୍ଗଦର୍ଶିକା Ultimate Multisite ସହ ସାଧାରଣ ଏକୀକରଣ ପ୍ରଣାଳୀଗୁଡ଼ିକୁ ଆବରଣ କରେ, ଯାହାରେ ବାହ୍ୟ ସେବାସହ ଯୋଡ଼ିବା, ନିଜସ୍ୱ ଭୁଗତାନ ଗେଟୱେ ତିଆରି କରିବା, ଏବଂ ୱେବହୁକ୍‌ଗୁଡ଼ିକୁ ପରିଚାଳନା କରିବା ଅନ୍ତର୍ଭୁକ୍ତ।

ପୃଥକ ଟେନାଣ୍ଟ ଢାଞ୍ଚା ପାଇଁ, ସ୍ୱାଧୀନ ଟେନାଣ୍ଟ ଆରମ୍ଭ, ସ୍ଥାନାନ୍ତରଣ ଯାଞ୍ଚ, SSO, ଏବଂ ବିଲୋପ ମାର୍ଗଦର୍ଶନ ପାଇଁ [ମଲ୍ଟି-ଟେନାନ୍ସି ଏକୀକରଣ](./multi-tenancy) ଦେଖନ୍ତୁ।

## CRM ଏକୀକରଣ {#crm-integration}

ନୂଆ ଗ୍ରାହକମାନେ ପଞ୍ଜିକରଣ କଲେ, ଗ୍ରାହକ ତଥ୍ୟକୁ ଆପଣଙ୍କ CRM ସହ ସମକାଳୀନ କରନ୍ତୁ:

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

## ବିଶ୍ଳେଷଣ ଏକୀକରଣ {#analytics-integration}

ଗ୍ରାହକ ଜୀବନଚକ୍ର ଜୁଡ଼ା ମୁଖ୍ୟ ବ୍ୟବସାୟ ଘଟଣାଗୁଡ଼ିକୁ ଟ୍ରାକ୍ କରନ୍ତୁ:

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

## ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ {#next-steps}

- [ନିଜସ୍ୱ ଗେଟୱେ ବିକାଶ](./custom-gateway) — ନିଜର ଭୁଗତାନ ଗେଟୱେ ତିଆରି କରନ୍ତୁ
- [ୱେବହୁକ୍ ପରିଚାଳନା](./webhooks) — ନିଜସ୍ୱ ୱେବହୁକ୍ endpoint ସୃଷ୍ଟି କରନ୍ତୁ
- [ମଲ୍ଟି-ଟେନାନ୍ସି ଏକୀକରଣ](./multi-tenancy) — ସ୍ୱାଧୀନ ଟେନାଣ୍ଟ ଜୀବନଚକ୍ର ପ୍ରବାହସହ ଏକୀକୃତ କରନ୍ତୁ
