---
id: wu_model_post_save
title: Дзея - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Выклікаецца пасля таго, як аб'ект захоўваецца ў базе дадзеных.

## Паметрыкі {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Слог мадэлі. |
| $data | `array` | Дадзеныя аб'екта, якія будуць захоўвацца, сэрыялізаваныя. |
| $data_unserialized | `array` | Дадзеныя аб'екта, якія будуць захоўвацца. |
| $this | `\Base_Model` | Экземплярык аб'екта. |

### З {#since}

- 2.0.0
### Выкненне {#source}

- Вызначана ў [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) на 613-й паўніне
- Вызначана ў [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) на 1743-й паўніне
