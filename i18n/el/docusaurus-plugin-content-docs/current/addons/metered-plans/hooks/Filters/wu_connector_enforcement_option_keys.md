---
id: wu_connector_enforcement_option_keys
title: Φίλτρο - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Φιλτράρει τη λίστα των κλειδιών επιλογών των παρόχων AI που επιβάλλονται από την κύρια σελίδα.

Προσθέτει κλειδιά επιλογών για προσαρμοσμένα ή τρίτων κατασκευαστών plugins παρόχων AI, ώστε οι ρυθμίσεις τους να κληρονομούνται επίσης από την κύρια σελίδα στα υποσites.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Ονόματα κλειδιών επιλογών που πρέπει να επιβάλλονται (περιλαμβάνει ήδη τα δυναμικά ανακαλυπτόμενα κλειδιά συνδέσμων και τα EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
