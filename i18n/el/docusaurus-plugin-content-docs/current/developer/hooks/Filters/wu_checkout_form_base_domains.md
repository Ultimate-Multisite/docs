---
id: wu_checkout_form_base_domains
title: Φίλτρο - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Φίλτρο: wu_checkout_form_base_domains

Φιλτράρει τα κοινόχρηστα βασικά domains της φόρμας checkout που δεν πρέπει να γίνουν εγγραφές mapped-domain.

Χρησιμοποιήστε αυτό το φίλτρο όταν ένα integration παρέχει πρόσθετα βασικά domains για πεδία φόρμας checkout **Site URL**. Τα domains που επιστρέφονται από αυτό το φίλτρο αντιμετωπίζονται ως κοινόχρηστοι hosts εγγραφής αντί για προσαρμοσμένα domains ανά ιστότοπο.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $domains | `array` | Κοινόχρηστα βασικά domains που συλλέγονται από τη διαμόρφωση της φόρμας checkout. |

### Από την έκδοση {#since}

- 2.13.0

### Πηγή {#source}

Ορίζεται στο `inc/functions/domain.php`.


## Επιστρέφει {#returns}

Πίνακας κανονικοποιημένων βασικών domains φόρμας checkout.
