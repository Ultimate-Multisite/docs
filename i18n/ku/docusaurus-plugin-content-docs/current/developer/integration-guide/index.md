---
title: Rêbernameya Entegrasyonê
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Rêbernameya Integration {#integration-guide}

Ev rêbername şêweyên hevpar ên integration bi Ultimate Multisite vedigire, di nav de girêdana bi xizmetên derveyî re, avakirina dergehên dravdanê yên taybet, û rêvebirina webhookan.

Ji bo jêrxaneya tenant a veqetandî, ji bo destpêkirina tenant a serwer, piştrastkirina veguhastinê, SSO, û rêberiya rakirinê, binêre [Integration ya Multi-Tenancy](./multi-tenancy).

## Integration ya CRM {#crm-integration}

Dema xerîdarên nû xwe tomar dikin, daneyên xerîdar bi CRM-a xwe re sync bike:

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

## Integration ya Analytics {#analytics-integration}

Bûyerên karsaziya sereke li seranserî çerxa jiyana xerîdar bişopîne:

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

## Gavên Piştre {#next-steps}

- [Pêşxistina Gateway-a Taybet](./custom-gateway) — Gateway-a dravdanê ya xwe ava bike
- [Rêvebirina Webhookan](./webhooks) — Endpointên webhook ên taybet biafirîne
- [Integration ya Multi-Tenancy](./multi-tenancy) — Bi herikînên çerxa jiyana tenant a serwer re integration bike
