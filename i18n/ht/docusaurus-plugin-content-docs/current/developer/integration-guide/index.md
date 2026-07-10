---
title: Gid Entegrasyon
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Gid Entegrasyon {#integration-guide}

Gid sa a kouvri modèl entegrasyon komen ak Ultimate Multisite, tankou konekte ak sèvis ekstèn, konstwi passerelles peman pèsonalize, epi jere webhooks.

Pou enfrastrikti lokatè izole, gade [Entegrasyon Multi-Tenancy](./multi-tenancy) pou gid sou demaraj lokatè souveren, verifikasyon migrasyon, SSO, ak demantèlman.

## Entegrasyon CRM {#crm-integration}

Senkronize done kliyan ak CRM ou lè nouvo kliyan enskri:

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

## Entegrasyon Analytics {#analytics-integration}

Swiv evènman biznis kle atravè sik lavi kliyan an:

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

## Pwochen Etap {#next-steps}

- [Devlopman Gateway Pèsonalize](./custom-gateway) — Konstwi pwòp passerelle peman ou
- [Jesyon Webhook](./webhooks) — Kreye endpoints webhook pèsonalize
- [Entegrasyon Multi-Tenancy](./multi-tenancy) — Entegre ak koule sik lavi lokatè souveren yo
