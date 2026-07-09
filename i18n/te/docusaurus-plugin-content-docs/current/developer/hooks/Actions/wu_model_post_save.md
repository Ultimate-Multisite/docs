---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

ఒక ఆబ్జెక్ట్‌ను డేటాబేస్‌లో స్టోర్ చేసిన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | మోడల్ స్లగ్ (model slug). |
| $data | `array` | స్టోర్ చేయబడే ఆబ్జెక్ట్ డేటా, ఇది సిరియలైజ్ చేయబడుతుంది. |
| $data_unserialized | `array` | స్టోర్ చేయబడే ఆబ్జెక్ట్ డేటా. |
| $this | `\Base_Model` | ఆబ్జెక్ట్ ఇన్స్టాన్స్ (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) లోని 613వ లైన్‌లో నిర్వచించబడింది.
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) లోని 1743వ లైన్‌లో నిర్వచించబడింది.
