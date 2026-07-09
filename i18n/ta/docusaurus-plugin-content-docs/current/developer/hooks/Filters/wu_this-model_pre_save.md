---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

இது ஆப்ஜெக்ட் டேட்டா, டேட்டாபேஸில் சேமிப்பதற்கு முன் ஃபில்டர் (Filter) செய்யும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | சேமிக்கப்பட வேண்டிய ஆப்ஜெக்ட் டேட்டா. இது சீரியலைஸ் (serialized) செய்யப்பட்டிருக்கும். |
| $data_unserialized | `array` | சேமிக்கப்பட வேண்டிய ஆப்ஜெக்ட் டேட்டா. |
| $this | `\Base_Model` | ஆப்ஜெக்ட் இன்ஸ்டன்ஸ் (object instance). |

### எப்போது இருந்து (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) என்ற கோப்பில் 570 வரியில் வரையறுக்கப்பட்டுள்ளது.
