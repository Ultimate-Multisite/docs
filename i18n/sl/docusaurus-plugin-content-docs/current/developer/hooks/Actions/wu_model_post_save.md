---
id: wu_model_post_save
title: Dejanje - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Sproži se po tem, ko je objekt shranjen v podatkovno zbirko.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Slug modela. |
| $data | `array` | Podatki objekta, ki bodo shranjeni, serializirani. |
| $data_unserialized | `array` | Podatki objekta, ki bodo shranjeni. |
| $this | `\Base_Model` | Primerek objekta. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

- Določeno v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) v vrstici 613
- Določeno v [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) v vrstici 1743
