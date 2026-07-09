---
title: Guide d’intégration
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Guide d’intégration

Ce guide couvre les modèles d’intégration courants avec Ultimate Multisite, notamment la connexion à des services externes, la création de passerelles de paiement personnalisées et la gestion des webhooks.

Pour une infrastructure de locataires isolés, consultez [Intégration multi-locataire](./multi-tenancy) pour des conseils sur l’amorçage de locataires souverains, la vérification des migrations, le SSO et la suppression.

## Intégration CRM

Synchronisez les données client avec votre CRM lorsque de nouveaux clients s’inscrivent :

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

## Intégration des analyses

Suivez les événements métier clés tout au long du cycle de vie client :

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

## Étapes suivantes

- [Développement de passerelle personnalisée](./custom-gateway) — Créez votre propre passerelle de paiement
- [Gestion des webhooks](./webhooks) — Créez des endpoints webhook personnalisés
- [Intégration multi-locataire](./multi-tenancy) — Intégrez-vous aux flux du cycle de vie des locataires souverains
