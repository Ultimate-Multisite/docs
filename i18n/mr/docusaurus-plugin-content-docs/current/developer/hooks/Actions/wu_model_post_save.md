---
id: wu_model_post_save
title: कृती - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

जेव्हा एखादा ऑब्जेक्ट डेटाबेसमध्ये साठवला जातो, तेव्हा ही ॲक्शन (Action) ट्रिगर होते.

## पॅरामीटर्स (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | मॉडेल स्लग (model slug). |
| $data | `array` | साठवला जाणारा ऑब्जेक्ट डेटा, जो सीरियलाइझ (serialized) केला जाईल. |
| $data_unserialized | `array` | साठवला जाणारा ऑब्जेक्ट डेटा. |
| $this | `\Base_Model` | ऑब्जेक्टची इन्स्टन्स (object instance). |

### कधीपासून (Since) {#since}

- 2.0.0
### स्त्रोत (Source) {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) मध्ये लाइन 613 वर परिभाषित केले आहे.
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) मध्ये लाइन 1743 वर परिभाषित केले आहे.
