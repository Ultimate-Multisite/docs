---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

தரவுத்தளத்தில் சேமிக்கப்படுவதற்கு முன், தரவு மெட்டாவை (data meta) வடிகட்டுகிறது (filters).

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $meta | `array` | சேமிக்கப்பட வேண்டிய மெட்டா தரவு, இது சீரியலைஸ் செய்யப்படாத (unserialized) வடிவில் இருக்கும். |
| $data_unserialized | `array` | சேமிக்கப்பட வேண்டிய பொருள் தரவு (object data). |
| $this | `\Base_Model` | பொருள் நிகழ்வு (object instance). |

### எப்போது இருந்து (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) என்ற கோப்பில் 534 வரியில் வரையறுக்கப்பட்டுள்ளது.
