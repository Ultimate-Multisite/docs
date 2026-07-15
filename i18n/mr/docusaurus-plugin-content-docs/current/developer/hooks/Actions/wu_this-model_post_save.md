---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

जेव्हा एखादा ऑब्जेक्ट डेटाबेसमध्ये सेव्ह (store) केला जातो, तेव्हा हे action ट्रिगर होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | जो ऑब्जेक्ट डेटा डेटाबेसमध्ये स्टोअर केला जाईल. |
| $this | `\Base_Model` | ऑब्जेक्टची इन्स्टन्स (instance). |
| $new | `bool` | जर ऑब्जेक्ट नवीन असेल, तर true. |

### Since {#since}

- 2.0.0
### Source {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
