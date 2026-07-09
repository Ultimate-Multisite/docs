---
title: Aratohu Tuitui
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Aratohu Whakaurunga {#integration-guide}

Ka kapi i tēnei aratohu ngā tauira whakaurunga noa ki Ultimate Multisite, tae atu ki te tūhono ki ngā ratonga o waho, te hanga i ngā kuwaha utu ritenga, me te whakahaere i ngā webhooks.

Mō te hanganga kairēti taratahi, tirohia [Whakaurunga Kairēti-maha](./multi-tenancy) mō te aratohu whakaoho kairēti mana motuhake, manatoko hekenga, SSO, me te wetewete.

## Whakaurunga CRM {#crm-integration}

Tukutahitia ngā raraunga kiritaki ki tō CRM ina rēhita mai ngā kiritaki hou:

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

## Whakaurunga Tātaritanga {#analytics-integration}

Aroturukihia ngā takahanga pakihi matua puta noa i te huringa-ora kiritaki:

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

## Ngā Mahi ka Whai {#next-steps}

- [Whanaketanga Kuwaha Ritenga](./custom-gateway) — Hangaia tō ake kuwaha utu
- [Whakahaere Webhook](./webhooks) — Waihangatia ngā pito-mutunga webhook ritenga
- [Whakaurunga Kairēti-maha](./multi-tenancy) — Whakaurua ki ngā rerenga huringa-ora kairēti mana motuhake
