---
id: wu_model_post_save
title: Acció - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Aquesta acció: wu_model_post_save {#action-wumodelpostsave}

Es activa després que un object es guarda a la base de dades.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $model | `string` | El slug del model. |
| $data | `array` | Els dades de l'objecte que es guardarà, serialitzades. |
| $data_unserialized | `array` | Les dades de l'objecte que es guardarà. |
| $this | `\Base_Model` | L'instància de l'objecte. |

### Des de {#since}

- 2.0.0
### Font {#source}

- Definida en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) a la línia 613
- Definida en [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) a la línia 1743
