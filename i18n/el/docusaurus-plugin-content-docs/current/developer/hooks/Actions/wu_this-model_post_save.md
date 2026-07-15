---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Εκτελείται αφού ένα αντικείμενο αποθηκευτεί στη βάση δεδομένων.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $data | `array` | Τα δεδομένα του αντικειμένου που θα αποθηκευτούν. |
| $this | `\Base_Model` | Η οντότητα του αντικειμένου. |
| $new | `bool` | True αν το αντικείμενο είναι νέο. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

- Ορίζεται στο [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) στην γραμμή 624
- Ορίζεται στο [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) στην γραμμή 1754
