---
id: wu_domain_renewal_failed
title: Δράση - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Εκτελείται όταν αποτύχει μια προσπάθεια ανανέωσης domain.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Η πληρωμή που προκάλεσε την ανανέωση. |
| $renewal_data | `array&lt;string,mixed&gt;` | Μεταδεδομένα ανανέωσης (όνομα domain, χρόνια, κ.λπ.). |
| $error_message | `string` | Το μήνυμα λάθρου που είναι ευανάγνωστο (για τον χρήστη) από τον registrar. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) στην γραμμή 630
