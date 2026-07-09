---
title: Przewodnik po integracji
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Przewodnik integracji

Ten przewodnik omawia typowe wzorce integracji z Ultimate Multisite, w tym łączenie z usługami zewnętrznymi, tworzenie niestandardowych bramek płatności i obsługę webhooków.

W przypadku izolowanej infrastruktury tenantów zobacz [Integracja Multi-Tenancy](./multi-tenancy), aby uzyskać wskazówki dotyczące uruchamiania suwerennego tenanta, weryfikacji migracji, SSO i likwidacji.

## Integracja z CRM

Synchronizuj dane klientów ze swoim CRM, gdy rejestrują się nowi klienci:

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

## Integracja z Analytics

Śledź kluczowe zdarzenia biznesowe w całym cyklu życia klienta:

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

## Następne kroki

- [Tworzenie niestandardowej bramki](./custom-gateway) — Zbuduj własną bramkę płatności
- [Obsługa webhooków](./webhooks) — Utwórz niestandardowe endpointy webhooków
- [Integracja Multi-Tenancy](./multi-tenancy) — Zintegruj z przepływami cyklu życia suwerennego tenanta
