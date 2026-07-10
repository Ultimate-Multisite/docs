---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

हे फिल्टर डेटा मेटा (data meta) डेटाबेसमध्ये सेरिअलाइज (serialize) करण्यापूर्वी तो फिल्टर करते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | जे मेटा डेटा स्टोअर केला जाईल, तो (unserialized) डेटा. |
| $data_unserialized | `array` | स्टोअर केले जाणारे ऑब्जेक्ट डेटा. |
| $this | `\Base_Model` | ऑब्जेक्टची इन्स्टन्स (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) मध्ये लाइन 534 वर परिभाषित केले आहे.
