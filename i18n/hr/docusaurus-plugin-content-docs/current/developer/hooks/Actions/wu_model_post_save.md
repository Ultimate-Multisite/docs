---
id: wu_model_post_save
title: Radnja - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Pokreće se nakon što se objekt pohrani u bazu podataka.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Slug modela. |
| $data | `array` | Podaci objekta koji će biti pohranjeni, serijalizirani. |
| $data_unserialized | `array` | Podaci objekta koji će biti pohranjeni. |
| $this | `\Base_Model` | Instanca objekta. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

- Definirano u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) u retku 613
- Definirano u [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) u retku 1743
