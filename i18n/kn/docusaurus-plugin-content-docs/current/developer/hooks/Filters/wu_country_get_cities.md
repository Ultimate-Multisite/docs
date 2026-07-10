---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

ಒಂದು ದೇಶದ ರಾಜ್ಯಕ್ಕೆ ಇರುವ ನಗರಗಳ ಪಟ್ಟಿಯನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | ರಾಜ್ಯದ ನಗರಗಳ ಹೆಸರುಗಳ ಪಟ್ಟಿ. ಇಲ್ಲಿ ಯಾವುದೇ ಕೀ (keys) ಇರುವುದಿಲ್ಲ. |
| $country_code | `string` | ದೇಶದ ಎರಡು-ಅಕ್ಷರದ ISO ಕೋಡ್. |
| $state_code | `string` | ರಾಜ್ಯದ ಎರಡು-ಅಕ್ಷರದ ISO ಕೋಡ್. |
| $current_country | `\WP_Ultimo\Country\Country` | ಪ್ರಸ್ತುತ ಕ್ಲಾಸ್‌ನ (class) ಉದಾಹರಣೆ (instance). |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## Returns {#returns}
ಫಿಲ್ಟರ್ ಮಾಡಿದ ರಾಜ್ಯಗಳ ಪಟ್ಟಿ.
