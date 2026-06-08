---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Dette utløses etter at et objekt er lagret i databasen.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $model | `string` | Modell-sluggen. |
| $data | `array` | Objektdataen som skal lagres, serialisert. |
| $data_unserialized | `array` | Objektdataen som skal lagres. |
| $this | `\Base_Model` | Objektinstansen. |

### Siden

- 2.0.0
### Kilde

- Definert i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) på linje 613
- Definert i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) på linje 1743
