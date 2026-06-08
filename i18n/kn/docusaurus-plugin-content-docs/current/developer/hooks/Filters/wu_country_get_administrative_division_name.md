---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

ದೇಶದ ಆಡಳಿತ ಉಪ-ವಿಭಾಗಗಳ ಸುಂದರವಾದ ಹೆಸರನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | ವಿಭಾಗದ ಹೆಸರು. ಸಾಮಾನ್ಯವಾಗಿ ರಾಜ್ಯ, ಪ್ರಾಂವಿಸ್, ಪ್ರದೇಶ ಇತ್ಯಾದಿ. |
| $country_code | `string` | ದೇಶದ ಎರಡು-ಅಕ್ಷರದ ISO ಕೋಡ್. |
| $state_code | `string` | ರಾಜ್ಯದ ಎರಡು-ಅಕ್ಷರದ ISO ಕೋಡ್. |
| $ucwords | `bool` | ಪದಗಳನ್ನು ದೊಡ್ಡ ಅಕ್ಷರಗಳಲ್ಲಿ (uppercase) ಬದಲಾಯಿಸಬೇಕೇ. |
| $current_country | `\WP_Ultimo\Country\Country` | ಪ್ರಸ್ತುತ ವರ್ಗದ ಉದಾಹರಣೆ (Instance). |

### ಯಾವಾಗ ಲಭ್ಯ:

- 2.0.11
### ಮೂಲ:

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## ಮರಳಿ ನೀಡುವ ಮೌಲ್ಯ (Returns)
ಮಾರ್ಪಡಿಸಿದ ವಿಭಾಗದ ಹೆಸರು.
