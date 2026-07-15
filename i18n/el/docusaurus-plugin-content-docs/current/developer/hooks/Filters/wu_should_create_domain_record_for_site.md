---
id: wu_should_create_domain_record_for_site
title: Φίλτρο - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Φίλτρο: wu_should_create_domain_record_for_site

Φιλτράρει αν το Ultimate Multisite θα πρέπει να δημιουργήσει μια εγγραφή domain για έναν νεοδημιουργημένο ιστότοπο.

Χρησιμοποιήστε αυτό το φίλτρο για να καταστείλετε ή να αναβάλετε την αυτόματη δημιουργία εγγραφής domain για ιστότοπους που χρησιμοποιούν ένα κοινό βασικό domain φόρμας checkout, έναν εσωτερικό host ή ένα domain που μια άλλη ενσωμάτωση θα διαχειριστεί ξεχωριστά.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $create | `bool` | Αν η εγγραφή domain θα πρέπει να δημιουργηθεί. |
| $site | `WP_Site` | Το νεοδημιουργημένο αντικείμενο ιστότοπου. |

### Από {#since}

- 2.13.0

### Πηγή {#source}

Ορίζεται στο `inc/functions/domain.php`.


## Επιστροφές {#returns}

Boolean που υποδεικνύει αν θα δημιουργηθεί η εγγραφή domain.
