---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

ಒಂದು ಆಬ್ಜೆಕ್ಟ್ ಅನ್ನು ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ನಂತರ ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | ಮಾಡೆಲ್ ಸ್ಲಗ್ (model slug). |
| $data | `array` | ಸಂಗ್ರಹಿಸಲಾಗುವ ಆಬ್ಜೆಕ್ಟ್ ಡೇಟಾ, ಇದನ್ನು ಸೀರಿಯಲೈಸ್ (serialized) ಮಾಡಲಾಗಿದೆ. |
| $data_unserialized | `array` | ಸಂಗ್ರಹಿಸಲಾಗುವ ಆಬ್ಜೆಕ್ಟ್ ಡೇಟಾ. |
| $this | `\Base_Model` | ಆಬ್ಜೆಕ್ಟ್ ಇನ್‌ಸ್ಟೆನ್ಸ್ (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
