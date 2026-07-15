---
id: wu_site_created
title: Δράση - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

Εκτελείται όταν δημιουργείται ένα site για πρώτη φορά.

Δεν εκτελείται αν αντιγραφεί από ένα πρότυπο (template).

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $data | `array` | Τα δεδομένα αντικειμένου που θα αποθηκευτούν. |
| $site | `\Site` | Η οντότητα (instance) του αντικειμένου. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) στην γραμμή 1652.
