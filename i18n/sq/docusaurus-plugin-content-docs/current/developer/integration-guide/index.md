---
title: Udhëzuesi i integrimit
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Udhëzues Integrimi

Ky udhëzues mbulon modelet e zakonshme të integrimit me Ultimate Multisite, duke përfshirë lidhjen me shërbime të jashtme, ndërtimin e portave të personalizuara të pagesave dhe trajtimin e webhooks.

Për infrastrukturë të izoluar të qiramarrësve, shihni [Integrimi Multi-Tenancy](./multi-tenancy) për udhëzime mbi nisjen fillestare të qiramarrësit sovran, verifikimin e migrimit, SSO dhe çmontimin.

## Integrimi me CRM {#crm-integration}

Sinkronizoni të dhënat e klientëve me CRM-në tuaj kur klientë të rinj regjistrohen:

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

## Integrimi i Analytics {#analytics-integration}

Gjurmoni ngjarjet kryesore të biznesit përgjatë ciklit jetësor të klientit:

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

## Hapat e Mëtejshëm {#next-steps}

- [Zhvillimi i Gateway të Personalizuar](./custom-gateway) — Ndërtoni portën tuaj të pagesave
- [Trajtimi i Webhook](./webhooks) — Krijoni endpoint-e të personalizuara webhook
- [Integrimi Multi-Tenancy](./multi-tenancy) — Integrohuni me rrjedhat e ciklit jetësor të qiramarrësve sovranë
