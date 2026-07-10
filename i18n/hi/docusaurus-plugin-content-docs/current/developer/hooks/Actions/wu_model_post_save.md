---
id: wu_model_post_save
title: कार्य - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

यह तब चलता है जब कोई ऑब्जेक्ट डेटाबेस में स्टोर हो जाता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | मॉडल स्लग। |
| $data | `array` | वह ऑब्जेक्ट डेटा जिसे स्टोर किया जाएगा, जिसे सीरियलाइज़ किया गया है। |
| $data_unserialized | `array` | वह ऑब्जेक्ट डेटा जिसे स्टोर किया जाएगा। |
| $this | `\Base_Model` | ऑब्जेक्ट इंस्टेंस। |

### Since {#since}

- 2.0.0
### Source {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
