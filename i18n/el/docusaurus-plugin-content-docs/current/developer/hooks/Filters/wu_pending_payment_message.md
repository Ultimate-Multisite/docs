---
id: wu_pending_payment_message
title: Φίλτρο - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Φίλτρο: wu_pending_payment_message

Επιτρέπει στον χρήστη να αλλάξει το μήνυμα που εμφανίζεται για τις ανακρεστές πληρωμές.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $message | `string` | Το μήνυμα που θα εμφανιστεί. |
| $customer | `\WP_Ultimo\Models\Customer` | Ο τρέχων πελάτης. |
| $pending_payments | `array` | Μια λίστα με τις ανακρεστές πληρωμές. |

### Από {#since}

- 2.0.19
### Πηγή {#source}

Ορίζεται στο [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) στην γραμμή 244
