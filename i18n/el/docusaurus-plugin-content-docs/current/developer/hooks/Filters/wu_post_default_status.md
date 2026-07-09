---
id: wu_post_default_status
title: Φίλτρο - wu_post_default_status
sidebar_label: wu_post_default_status
_i18n_hash: 8bd5e132fa5150851595e0d475a52fea
---
# Φίλτρο: wu_post_default_status {#filter-wupostdefaultstatus}

Εκτελεί φιλτράρισμα στα δεδομένα του αντικειμένου πριν αποθηκευτούν στη βάση δεδομένων.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $status | `string` | Η προεπιλεγμένη κατάσταση. |
| $post_type | `string` | Ο τύπος ανάρτησης (post type). |
| $this | `\Base_Model` | Το στιγμιότυπο του αντικειμένου. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/models/class-post-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-post-base-model.php#L320) στην γραμμή 320
