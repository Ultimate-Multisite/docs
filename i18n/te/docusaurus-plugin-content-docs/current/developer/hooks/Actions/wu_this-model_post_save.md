---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

ఒక ఆబ్జెక్ట్‌ను డేటాబేస్‌లో నిల్వ చేసిన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | నిల్వ చేయబడే ఆబ్జెక్ట్ డేటా. |
| $this | `\Base_Model` | ఆబ్జెక్ట్ ఉదాహరణ (object instance). |
| $new | `bool` | ఆబ్జెక్ట్ కొత్తదైతే True. |

### Since {#since}

- 2.0.0
### Source {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) లోని 624వ లైన్‌లో నిర్వచించబడింది.
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) లోని 1754వ లైన్‌లో నిర్వచించబడింది.
