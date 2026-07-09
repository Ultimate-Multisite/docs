---
id: wu_model_post_save
title: Акција - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Дејство: wu_model_post_save {#action-wumodelpostsave}

Се активира откако објект ќе се зачува во базата на податоци.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $model | `string` | Slug на моделот. |
| $data | `array` | Податоците на објектот што ќе бидат зачувани, сериализирани. |
| $data_unserialized | `array` | Податоците на објектот што ќе бидат зачувани. |
| $this | `\Base_Model` | Инстанцата на објектот. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

- Дефинирано во [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) на линија 613
- Дефинирано во [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) на линија 1743
