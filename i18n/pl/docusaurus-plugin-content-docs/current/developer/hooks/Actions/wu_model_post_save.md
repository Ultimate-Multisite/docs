---
id: wu_model_post_save
title: Akcja - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Wyzwala się po zapisaniu obiektu do bazy danych.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $model | `string` | Slug modelu. |
| $data | `array` | Dane obiektu, które zostaną zapisane i zserializowane. |
| $data_unserialized | `array` | Dane obiektu, które zostaną zapisane. |
| $this | `\Base_Model` | Instancja obiektu. |

### Od wersji {#since}

- 2.0.0
### Źródło {#source}

- Zdefiniowane w [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) w linii 613
- Zdefiniowane w [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) w linii 1743
