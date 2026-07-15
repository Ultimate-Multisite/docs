---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Φίλτρο: wu_\{$this->model\}_meta_pre_save

Φιλτράρει τα δεδομένα meta πριν αυτά κωδικοποιηθούν (serialize) για αποθήκευση στη βάση δεδομένων.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $meta | `array` | Τα δεδομένα meta που θα αποθηκευτούν, μη-κωδικοποιημένα (unserialized). |
| $data_unserialized | `array` | Τα δεδομένα αντικειμένου που θα αποθηκευτούν. |
| $this | `\Base_Model` | Η εντολή (instance) του αντικειμένου. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) στην γραμμή 534
