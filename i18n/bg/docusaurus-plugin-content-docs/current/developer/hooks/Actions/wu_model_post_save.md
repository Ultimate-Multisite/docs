---
id: wu_model_post_save
title: Действие - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Изпълнява се след като обектът бъде запазен в базата данни.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $model | `string` | Слогот на модела. |
| $data | `array` | Данните на обекта, които ще бъдат запазени, сериализирани. |
| $data_unserialized | `array` | Данните на обекта, които ще бъдат запазени. |
| $this | `\Base_Model` | Инстанцията на обекта. |

### От {#since}

- 2.0.0
### Източник {#source}

- Дефиниран в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) на линия 613
- Дефиниран в [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) на линия 1743
