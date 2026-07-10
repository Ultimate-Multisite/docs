---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

ಮುಖ್ಯ সাইಟ್‌ನಿಂದ ಬಲವಂತಗೊಳಿಸಲಾದ AI ಪೂರೈಕೆದಾರರ (provider) ಆಪ್ಷನ್ ಕೀಗಳ ಪಟ್ಟಿಯನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ.

ಕಸ್ಟಮ್ ಅಥವಾ ಥರ್ಡ್-ಪಾರ್ಟಿ AI ಪೂರೈಕೆದಾರರ ಪ್ಲಗ್ಇನ್‌ಗಳಿಗೆ ಆಪ್ಷನ್ ಕೀಗಳನ್ನು ಸೇರಿಸಲು ಇದನ್ನು ಬಳಸಿ, ಇದರಿಂದ ಅವುಗಳ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಸಹ ಸಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ ಮುಖ್ಯ সাইಟ್‌ನಿಂದ ಆವರಿಸಿಕೊಳ್ಳುತ್ತವೆ (inherited).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | ಬಲವಂತಗೊಳಿಸಬೇಕಾದ ಆಪ್ಷನ್ ಕೀಗಳ ಹೆಸರುಗಳು (ಇದು ಈಗಾಗಲೇ ಡೈನಾಮಿಕ್ ಆಗಿ ಕಂಡುಬರುವ ಕನೆಕ್ಟರ್ ಕೀಗಳು ಮತ್ತು EXTRA_PROVIDER_OPTIONS ಅನ್ನು ಒಳಗೊಂಡಿದೆ). |

### Since {#since}

- 1.2.0
### Source {#source}

[inc/managers/class-connector-enforcement.php](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) ನಲ್ಲಿ 206ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
