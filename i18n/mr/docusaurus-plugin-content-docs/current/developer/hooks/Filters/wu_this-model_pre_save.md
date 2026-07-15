---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

हा फिल्टर ऑब्जेक्ट डेटा डेटाबेसमध्ये सेव्ह (store) करण्यापूर्वी तो तपासतो (filter करतो).

## पॅरामीटर्स (Parameters) {#parameters}

| नाव (Name) | प्रकार (Type) | वर्णन (Description) |
|------|------|-------------|
| $data | `array` | जो ऑब्जेक्ट डेटा सेव्ह केला जाईल, तो डेटा (serialized). |
| $data_unserialized | `array` | जो ऑब्जेक्ट डेटा सेव्ह केला जाईल. |
| $this | `\Base_Model` | ऑब्जेक्टची इन्स्टन्स (instance). |

### कधीपासून (Since) {#since}

- 2.0.0
### स्रोत (Source) {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) मध्ये लाइन 570 वर परिभाषित केले आहे.
