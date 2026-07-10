---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

ಡೇಟಾ ಮೆಟಾ (data meta) ಅನ್ನು ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ (database) ಸ್ಟೋರ್ ಮಾಡಲು ಅದು ಸೀರಿಯಲೈಸ್ (serialize) ಆಗುವ ಮೊದಲು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | ಇದು ಸ್ಟೋರ್ ಆಗಲಿ, ಅಥವಾ ಯೂನ್ಸೀರಿಯಲೈಸ್ (unserialized) ಆಗಲಿ ಮಾಡುವ ಮೆಟಾ ಡೇಟಾ. |
| $data_unserialized | `array` | ಸ್ಟೋರ್ ಆಗಲಿರುವ ಆಬ್ಜೆಕ್ಟ್ ಡೇಟಾ. |
| $this | `\Base_Model` | ಆಬ್ಜೆಕ್ಟ್ ಇನ್‌ಸ್ಟೆನ್ಸ್ (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
