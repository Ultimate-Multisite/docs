---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Körs efter att ett objekt har sparats i databasen.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $model | `string` | Modellens slug. |
| $data | `array` | Objektdata som ska sparas, serialiserad. |
| $data_unserialized | `array` | Objektdata som ska sparas. |
| $this | `\Base_Model` | Objektinstansen. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

- Definieras i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) på rad 613
- Definieras i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) på rad 1743
