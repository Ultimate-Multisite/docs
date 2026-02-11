---
id: wu_model_post_save
title: Azione - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Si attiva dopo che un oggetto è stato memorizzato nel database.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Lo slug del modello. |
| $data | `array` | I dati dell'oggetto che verranno memorizzati, serializzati. |
| $data_unserialized | `array` | I dati dell'oggetto che verranno memorizzati. |
| $this | `\Base_Model` | L'istanza dell'oggetto. |

### Since

- 2.0.0

### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
