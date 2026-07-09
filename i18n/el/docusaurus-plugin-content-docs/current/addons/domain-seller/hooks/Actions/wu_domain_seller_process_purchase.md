---
id: wu_domain_seller_process_purchase
title: Ενέργεια - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Εκτελείται όταν γίνεται επεξεργασία αγοράς ενός domain μετά την ολοκλήρωση του checkout.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Το αντικείμενο πληρωμής. |
| $checkout_data | `array&lt;string,mixed&gt;` | Τα πλήρη δεδομένα checkout από το φόρμα εγγραφής. |

### Από την έκδοση {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) στην γραμμή 246
