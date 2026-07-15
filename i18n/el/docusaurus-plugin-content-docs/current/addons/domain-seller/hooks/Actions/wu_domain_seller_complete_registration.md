---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Εκτρέπεται όταν μια πληρωμή μεταβαίνει σε μια κατάσταση που πρέπει να ενεργοποιήσει την εγγραφή του domain.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Το αντικείμενο της πληρωμής. |
| $old_status | `string` | Η προηγούμενη κατάσταση πληρωμής πριν τη μετάβαση. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) στην γραμμή 266
