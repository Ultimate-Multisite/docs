---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

ഡാറ്റാബേസിൽ സ്റ്റോർ ചെയ്യുന്നതിന് മുമ്പ്, ഡാറ്റാ മെറ്റ (data meta) ഫിൽട്ടർ ചെയ്യുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| പേര് | തരം | വിവരണം |
|------|------|-------------|
| $meta | `array` | സ്റ്റോർ ചെയ്യാൻ പോകുന്ന മെറ്റാ ഡാറ്റ, ഇത് സീരിയലൈസ് ചെയ്യപ്പെടാത്ത രൂപത്തിലാണ്. |
| $data_unserialized | `array` | സ്റ്റോർ ചെയ്യാൻ പോകുന്ന ഒബ്ജക്റ്റ് ഡാറ്റ. |
| $this | `\Base_Model` | ഒബ്ജക്റ്റ് ഇൻസ്റ്റൻസ്. |

### മുതൽ {#since}

- 2.0.0
### സ്രോതസ്സ് {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
