---
id: wu_model_post_save
title: کردار - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# کردار: wu_model_post_save {#action-wumodelpostsave}

دوای ئەوەی شتێک لەناو بنکەدراوەدا پاشەکەوت دەکرێت کار دەکات.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $model | `string` | slug ـی مۆدێل. |
| $data | `array` | داتای ئەو شتەی کە پاشەکەوت دەکرێت، serialized. |
| $data_unserialized | `array` | داتای ئەو شتەی کە پاشەکەوت دەکرێت. |
| $this | `\Base_Model` | نموونەی شت. |

### لەوە بەدوا {#since}

- 2.0.0
### سەرچاوە {#source}

- پێناسە کراوە لە [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) لە هێڵی 613
- پێناسە کراوە لە [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) لە هێڵی 1743
