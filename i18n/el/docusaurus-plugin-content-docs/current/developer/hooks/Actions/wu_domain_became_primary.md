---
id: wu_domain_became_primary
title: Δράση - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Εκτελείται όταν ένα domínio γίνεται το πρωτεύον domínio για ένα site.

Αυτή η action ενεργοποιείται όταν η σημαία (flag) `primary_domain` ενός domínιο τίθεται σε `true`, είτε κατά τη δημιουργία ενός νέου πρωτεύον domínιο είτε κατά την ενημέρωση ενός υπάρχοντος domínιο για να γίνει πρωτεύον.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Το domínio που έγινε πρωτεύον. |
| $blog_id | `int` | Ο blog ID του επηρεαζόμενου site. |
| $was_new | `bool` | Αν πρόκειται για ένα νέο δημιουργημένο domínio. |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) στην γραμμή 560
