---
id: wu_model_post_save
title: Δράση - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Εκτελείται αφού ένα αντικείμενο αποθηκευτεί στη βάση δεδομένων.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $model | `string` | Το slug του μοντέλου. |
| $data | `array` | Τα δεδομένα του αντικειμένου που θα αποθηκευτούν, σειριοποιημένα. |
| $data_unserialized | `array` | Τα δεδομένα του αντικειμένου που θα αποθηκευτούν. |
| $this | `\Base_Model` | Η οντότητα (instance) του αντικειμένου. |

### Since {#since}

- 2.0.0
### Source {#source}

- Определено στο [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) στην γραμμή 613
- Определено στο [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) στην γραμμή 1743
