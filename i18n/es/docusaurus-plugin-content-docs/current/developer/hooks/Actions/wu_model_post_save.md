---
id: wu_model_post_save
title: Acción - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Se dispara después de que un objeto se almacena en la base de datos.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | El slug del modelo. |
| $data | `array` | Los datos del objeto que se almacenarán, serializados. |
| $data_unserialized | `array` | Los datos del objeto que se almacenarán. |
| $this | `\Base_Model` | La instancia del objeto. |

### Desde

- 2.0.0
### Fuente

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
