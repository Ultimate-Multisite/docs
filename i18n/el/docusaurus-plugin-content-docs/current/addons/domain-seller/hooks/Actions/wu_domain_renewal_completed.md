---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Εκτελείται μετά από επιτυχή ανανέωση ενός domain.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Η πληρωμή που προκάλεσε την ανανέωση. |
| $renewal_data | `array&lt;string,mixed&gt;` | Μεταδεδομένα ανανέωσης (domain_name, years, customer_id, κ.λπ.). |
| $result | `array&lt;string,mixed&gt;` | Το ακατέργαστο array αποτελεσμάτων που επιστρέφεται από τον registrar, συμπεριλαμβανομένης της νέας `expiry_date`. |

### Από

- 2.0.0
### Πηγή

Ορίζεται στο [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) στην γραμμή 594
