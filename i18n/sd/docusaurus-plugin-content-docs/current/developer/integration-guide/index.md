---
title: انضمام جي رهنمائي
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# انٽيگريشن رهنمائي

هي رهنمائي Ultimate Multisite سان عام انٽيگريشن نمونن کي ڍڪي ٿي، جنهن ۾ ٻاهرين خدمتن سان ڳنڍڻ، ڪسٽم ادائيگي gateways ٺاهڻ، ۽ webhooks سنڀالڻ شامل آهن.

الڳ tenant انفراسٽرڪچر لاءِ، sovereign tenant bootstrap، migration verification، SSO، ۽ teardown رهنمائي لاءِ [Multi-Tenancy Integration](./multi-tenancy) ڏسو.

## CRM انٽيگريشن

جڏهن نوان گراهڪ سائن اپ ڪن ته گراهڪن جي ڊيٽا پنهنجي CRM سان sync ڪريو:

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

## Analytics انٽيگريشن

گراهڪ جي lifecycle ۾ اهم ڪاروباري واقعن کي track ڪريو:

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

## ايندڙ قدم

- [ڪسٽم Gateway ڊولپمينٽ](./custom-gateway) — پنهنجو ادائيگي gateway ٺاهيو
- [Webhook سنڀالڻ](./webhooks) — ڪسٽم webhook endpoints ٺاهيو
- [Multi-Tenancy Integration](./multi-tenancy) — sovereign tenant lifecycle flows سان انٽيگريٽ ڪريو
