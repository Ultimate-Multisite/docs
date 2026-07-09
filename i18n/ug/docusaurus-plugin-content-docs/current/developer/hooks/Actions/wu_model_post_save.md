---
id: wu_model_post_save
title: ھەرىكەت - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

بىر ئوبيېكت سانلىق مەلۇمات ئامبىرىغا ساقلانغاندىن كېيىن ئىجرا بولىدۇ.

## پارامېتىرلار {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | مودېل slugى. |
| $data | `array` | ساقلىنىدىغان، serialized قىلىنغان ئوبيېكت سانلىق مەلۇماتى. |
| $data_unserialized | `array` | ساقلىنىدىغان ئوبيېكت سانلىق مەلۇماتى. |
| $this | `\Base_Model` | ئوبيېكت مىسالى. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) دا 613-قۇردا ئېنىقلانغان
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) دا 1743-قۇردا ئېنىقلانغان
