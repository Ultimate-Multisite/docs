---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

ಕೆಲವು ಪ್ಲಗ್ಇನ್‌ಗಳು ಮ್ಯಾಪಿಂಗ್ ಸಕ್ರಿಯವಾಗುವ ಮುನ್ನ URL ಗಳನ್ನು ಉಳಿಸುತ್ತವೆ ಅಥವಾ ಮೇಲಿನ ಫಿಲ್ಟರ್‌ಗಳಲ್ಲಿ ಸೇರಿಲ್ಲದ ಬೇರೆ ರೀತಿಯಲ್ಲಿ URL ಗಳನ್ನು ರಚಿಸುತ್ತವೆ.

ಅಂತಹ ಸಂದರ್ಭಗಳಲ್ಲಿ, ನಾವು ಹೆಚ್ಚುವರಿ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಸೇರಿಸಬೇಕಾಗುತ್ತದೆ. ಕಳಿಸುವ ಎರಡನೇ ಪ್ಯಾರಾಮೀಟರ್ `mangle_url` ಕಾಲ್‌ಬ್ಯಾಕ್ ಆಗಿದೆ. ಈ ಫಿಲ್ಟರ್ ಅನ್ನು ನೇರವಾಗಿ ಬಳಸಬಾರದು ಎಂದು ನಾವು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ. ಬದಲಾಗಿ, `Domain_Mapping::apply_mapping_to_url` ವಿಧಾನವನ್ನು ಬಳಸಿ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | ಮ್ಯಾಂಗಲ್ ಕಾಲ್‌ಬ್ಯಾಕ್. |
| $domain_mapper | `self` | ಈ ಆಬ್ಜೆಕ್ಟ್. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
