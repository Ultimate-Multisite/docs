---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Επιτρέπει στους developers plugins να κάνουν επιπλέον πράγματα όταν δημιουργείται ο πελάτης.

Εδώ προσθέτουμε, για παράδειγμα, τους hooks για τη σύνδεση του πελάτη (customer) ως χρήστη (user) στην κύρια ιστοσελίδα.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Ο πελάτης που δημιουργήθηκε. |
| $checkout | `\Checkout` | Η τρέχουσα κλάση checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) στην γραμμή 1156
