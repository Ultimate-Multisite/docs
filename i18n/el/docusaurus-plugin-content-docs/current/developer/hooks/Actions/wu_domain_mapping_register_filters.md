---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Ορισμένα plugins αποθηκεύουν το URL πριν ενεργοποιηθεί το mapping ή δημιουργούν τα URLs με τρόπο που δεν περιλαμβάνεται στους παραπάνω filters.

Σε τέτοιες περιπτώσεις, θέλουμε να προσθέσουμε επιπλέον filters. Το δεύτερο παράμετρο που περνάται είναι το callback `mangle_url`. Συνιστούμε να μην χρησιμοποιείτε αυτό το filter απευθείας. Αντ' αυτού, χρησιμοποιήστε τη μέθοδο `Domain_Mapping::apply_mapping_to_url`.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Το callable `mangle`. |
| $domain_mapper | `self` | Αυτό το object. |

### Since

- 2.0.0
### Source

Ορίζεται στο [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) στην γραμμή 530
