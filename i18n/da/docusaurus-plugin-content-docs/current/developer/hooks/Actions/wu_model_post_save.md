---
id: wu_model_post_save
title: Handling - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Udløses efter et objekt er gemt i databasen.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Model-slugget. |
| $data | `array` | Objektdataene, der vil blive gemt, serialiseret. |
| $data_unserialized | `array` | Objektdataene, der vil blive gemt. |
| $this | `\Base_Model` | Objektinstansen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

- Defineret i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) på linje 613
- Defineret i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) på linje 1743
