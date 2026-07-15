---
id: wu_model_post_save
title: کړنه - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

وروسته له دې اجرا کېږي چې یو شی په ډیټابېس کې زېرمه شي.

## پارامېټرونه {#parameters}

| نوم | ډول | سپړنه |
|------|------|-------------|
| $model | `string` | د ماډل slug. |
| $data | `array` | د هغه شي ډاټا چې زېرمه به شي، serialized. |
| $data_unserialized | `array` | د هغه شي ډاټا چې زېرمه به شي. |
| $this | `\Base_Model` | د شي instance. |

### له {#since}

- 2.0.0
### سرچینه {#source}

- په [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) کې په 613 کرښه تعریف شوی
- په [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) کې په 1743 کرښه تعریف شوی
