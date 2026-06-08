---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

ഒരു ഒബ്ജക്റ്റ് ഡാറ്റാബേസിൽ സ്റ്റോർ ചെയ്തതിന് ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | മോഡൽ സ്ലഗ്. |
| $data | `array` | സ്റ്റോർ ചെയ്യാനിരിക്കുന്ന, സീരിയലൈസ് ചെയ്ത ഒബ്ജക്റ്റ് ഡാറ്റ. |
| $data_unserialized | `array` | സ്റ്റോർ ചെയ്യാനിരിക്കുന്ന ഒബ്ജക്റ്റ് ഡാറ്റ. |
| $this | `\Base_Model` | ഒബ്ജക്റ്റ് ഇൻസ്റ്റൻസ്. |

### Since

- 2.0.0
### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
