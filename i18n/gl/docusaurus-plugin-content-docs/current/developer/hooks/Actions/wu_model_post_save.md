---
id: wu_model_post_save
title: Acción - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Acción: wu_model_post_save {#action-wumodelpostsave}

Execútase despois de que un obxecto se garde na base de datos.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $model | `string` | O slug do modelo. |
| $data | `array` | Os datos do obxecto que se gardarán, serializados. |
| $data_unserialized | `array` | Os datos do obxecto que se gardarán. |
| $this | `\Base_Model` | A instancia do obxecto. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

- Definido en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) na liña 613
- Definido en [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) na liña 1743
