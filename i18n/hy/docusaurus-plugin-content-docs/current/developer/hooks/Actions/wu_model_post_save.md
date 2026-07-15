---
id: wu_model_post_save
title: Գործողություն - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Գործողություն՝ wu_model_post_save

Գործարկվում է այն բանից հետո, երբ օբյեկտը պահվում է տվյալների բազայում։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $model | `string` | Մոդելի slug-ը։ |
| $data | `array` | Օբյեկտի տվյալները, որոնք կպահվեն՝ serialized։ |
| $data_unserialized | `array` | Օբյեկտի տվյալները, որոնք կպահվեն։ |
| $this | `\Base_Model` | Օբյեկտի instance-ը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

- Սահմանված է [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613)-ում՝ 613-րդ տողում
- Սահմանված է [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743)-ում՝ 1743-րդ տողում
