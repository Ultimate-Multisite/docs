---
title: Torolàlana fampifandraisana
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Torolàlana fampidirana {#integration-guide}

Ity torolàlana ity dia mandrakotra ireo lamina fampidirana mahazatra amin’ny Ultimate Multisite, ao anatin’izany ny fampifandraisana amin’ny serivisy ivelany, ny fananganana vavahadin-karama manokana, ary ny fitantanana webhooks.

Ho an’ny fotodrafitrasa tenant mitokana, jereo [Fampidirana Multi-Tenancy](./multi-tenancy) ho an’ny tari-dalana momba ny bootstrap tenant mahaleotena, fanamarinana fifindrana, SSO, ary teardown.

## Fampidirana CRM {#crm-integration}

Ampifanaraho amin’ny CRM-nao ny angon-drakitra mpanjifa rehefa misoratra anarana ny mpanjifa vaovao:

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

## Fampidirana Analytics {#analytics-integration}

Araho ireo hetsika ara-barotra fototra manerana ny tsingerim-piainan’ny mpanjifa:

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

## Dingana manaraka {#next-steps}

- [Fampivoarana vavahadin-karama manokana](./custom-gateway) — Amboary ny vavahadin-karamanao manokana
- [Fitantanana webhook](./webhooks) — Mamoròna endpoint webhook manokana
- [Fampidirana Multi-Tenancy](./multi-tenancy) — Ampidiro amin’ny fikorianan’ny tsingerim-piainan’ny tenant mahaleotena
