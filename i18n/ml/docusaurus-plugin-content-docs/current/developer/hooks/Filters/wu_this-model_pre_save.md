---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

ഡാറ്റാബേസിൽ സ്റ്റോർ ചെയ്യുന്നതിന് മുൻപ് ഒബ്ജക്റ്റ് ഡാറ്റ ഫിൽട്ടർ ചെയ്യാൻ ഇത് ഉപയോഗിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| പേര് | ടൈപ്പ് | വിവരണം |
|------|------|-------------|
| $data | `array` | സ്റ്റോർ ചെയ്യുകയും സീരിയലൈസ് ചെയ്യുകയും ചെയ്യുന്ന ഒബ്ജക്റ്റ് ഡാറ്റ. |
| $data_unserialized | `array` | സ്റ്റോർ ചെയ്യാൻ പോകുന്ന ഒബ്ജക്റ്റ് ഡാറ്റ. |
| $this | `\Base_Model` | ഒബ്ജക്റ്റ് ഇൻസ്റ്റൻസ്. |

### മുതൽ {#since}

- 2.0.0
### സ്രോതസ്സ് {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) എന്ന ഫയലിലെ 570-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
