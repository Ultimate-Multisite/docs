---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

ಇದು ಆಬ್ಜೆಕ್ಟ್ ಡೇಟಾವನ್ನು ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುವ ಮೊದಲು ಫಿಲ್ಟರ್ (Filter) ಮಾಡುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | ಸಂಗ್ರಹವಾಗಲಿರುವ ಆಬ್ಜೆಕ್ಟ್ ಡೇಟಾ, ಇದನ್ನು ಸೀರಿಯಲೈಸ್ (serialized) ಮಾಡಲಾಗುತ್ತದೆ. |
| $data_unserialized | `array` | ಸಂಗ್ರಹವಾಗಲಿರುವ ಆಬ್ಜೆಕ್ಟ್ ಡೇಟಾ. |
| $this | `\Base_Model` | ಆಬ್ಜೆಕ್ಟ್ ಇನ್‌ಸ್ಟೆನ್ಸ್. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) ನಲ್ಲಿ 570ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
