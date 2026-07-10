---
id: wu_model_post_save
title: Acțiune - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Acțiune: wu_model_post_save {#action-wumodelpostsave}

Se declanșează după ce un obiect este salvat în bază de date.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $model | `string` | Slug-ul modelului. |
| $data | `array` | Datele obiectului care vor fi stocate, serializate. |
| $data_unserialized | `array` | Datele obiectului care vor fi stocate. |
| $this | `\Base_Model` | Instanța obiectului. |

### De la {#since}

- 2.0.0
### Sursă {#source}

- Definit în [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) la linia 613
- Definit în [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) la linia 1743
