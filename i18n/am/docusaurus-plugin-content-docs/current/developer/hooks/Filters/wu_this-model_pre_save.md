---
id: wu_this-model_pre_save
title: 'ማጣሪያ - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

ይህ ፊልተር (filter) ነገር (object) ወደ ዳታቤዝ ከመቀመጡ በፊት ያለውን የነገር መረጃ (object data) ይቆጣጠራል።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | በሲሪአላይዝ (serialized) የሚቀመጠው የነገር መረጃ። |
| $data_unserialized | `array` | በዳታቤዝ ውስጥ ሊቀመጠው የሚገባው የነገር መረጃ። |
| $this | `\Base_Model` | የነገር ተጽዕኖው (object instance)። |

### Since

- 2.0.0
### Source

በ[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) ፋይል ላይ በ570ኛው መስመር ተገልጿል።
