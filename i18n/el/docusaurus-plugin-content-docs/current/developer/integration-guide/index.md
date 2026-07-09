---
title: Οδηγός ενσωμάτωσης
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Οδηγός Ενσωμάτωσης

Αυτός ο οδηγός καλύπτει κοινά μοτίβα ενσωμάτωσης με το Ultimate Multisite, συμπεριλαμβανομένης της σύνδεσης με εξωτερικές υπηρεσίες, της δημιουργίας προσαρμοσμένων πυλών πληρωμών και του χειρισμού webhooks.

Για απομονωμένη υποδομή μισθωτή, δείτε το [Ενσωμάτωση Multi-Tenancy](./multi-tenancy) για καθοδήγηση σχετικά με την αρχική ρύθμιση κυρίαρχου μισθωτή, την επαλήθευση μετεγκατάστασης, το SSO και την κατάργηση.

## Ενσωμάτωση CRM

Συγχρονίστε δεδομένα πελατών με το CRM σας όταν εγγράφονται νέοι πελάτες:

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

## Ενσωμάτωση Analytics

Παρακολουθήστε βασικά επιχειρηματικά συμβάντα σε όλο τον κύκλο ζωής του πελάτη:

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

## Επόμενα Βήματα

- [Ανάπτυξη Προσαρμοσμένης Gateway](./custom-gateway) — Δημιουργήστε τη δική σας πύλη πληρωμών
- [Χειρισμός Webhook](./webhooks) — Δημιουργήστε προσαρμοσμένα endpoints webhook
- [Ενσωμάτωση Multi-Tenancy](./multi-tenancy) — Ενσωματώστε με ροές κύκλου ζωής κυρίαρχου μισθωτή
