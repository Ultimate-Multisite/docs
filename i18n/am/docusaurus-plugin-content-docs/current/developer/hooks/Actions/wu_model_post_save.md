---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

አንድ object በዳታቤዝ ውስጥ ከተቀመጠ በኋላ ይሰራል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | የሞዴሉ ስሉግ (The model slug)። |
| $data | `array` | የሚቀመጠው የነገሩ መረጃ፣ ተሰርይቷል (serialized)። |
| $data_unserialized | `array` | የሚቀመጠው የነገሩ መረጃ። |
| $this | `\Base_Model` | የነገሩ ምሳሌ (object instance)። |

### Since {#since}

- 2.0.0
### Source {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
