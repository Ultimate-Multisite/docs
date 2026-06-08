---
id: wu_use_domain_mapping
title: ಫಿಲ್ಟರ್ - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

ಮ್ಯಾಪಿಂಗ್ ಬಳಸಬೇಕೇ ಎಂದು ನಿರ್ಧರಿಸಿ

ಸಾಮಾನ್ಯವಾಗಿ, ನೀವು ಸಕ್ರಿಯ (active) ಮ್ಯಾಪಿಂಗ್‌ಗಳನ್ನು ಮಾತ್ರ ಬಳಸಲು ಬಯಸುತ್ತೀರಿ. ಆದರೆ, ನೀವು ಹೆಚ್ಚು ಸುಧಾರಿತ (advanced) ತರ್ಕವನ್ನು (logic) ಬಳಸಲು ಬಯಸಿದರೆ, ಅಥವಾ ಸಕ್ರಿಯವಲ್ಲದ ಡೊಮೇನ್‌ಗಳನ್ನು (non-active domains) ಮ್ಯಾಪ್ ಮಾಡಲು ಬಯಸಿದರೆ, ಇಲ್ಲಿ ಫಿಲ್ಟರ್ ಮಾಡಿ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ಸಕ್ರಿಯವೆಂದು ಪರಿಗಣಿಸಬೇಕೇ? |
| $mapping | `\Domain` | ನಾವು ಪರಿಶೀಲಿಸುತ್ತಿರುವ ಮ್ಯಾಪಿಂಗ್ |
| $domain | `string` | |

### Source

[inc/class-domain-mapping.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ನಲ್ಲಿ ಲೈನ್ 391 ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ
