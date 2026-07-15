---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ಫ್ರಂಟ್-ಎಂಡ್ সাইಟ್ ನೋಂದಣಿಗಳಿಗೆ ಲಭ್ಯವಿರುವ ಭಾಷೆಗಳ ಪಟ್ಟಿಯನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

ಈ ಹುಕ್ಗೆ (hook) ಖಾಲಿ ಅರೇ (empty array) ನೀಡುವುದರಿಂದ ನೋಂದಣಿ ಫಾರ್ಮ್‌ನಲ್ಲಿ ಸೆಟ್ಟಿಂಗ್‌ನ ಔಟ್‌ಪುಟ್ ನಿಷ್ಕ್ರಿಯಗೊಳ್ಳುತ್ತದೆ, ಮತ್ತು সাইಟ್ ರಚಿಸುವಾಗ ಡೀಫಾಲ್ಟ್ ಭಾಷೆಯನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. ಈಗಾಗಲೇ ಇನ್‌ಸ್ಟಾಲ್ ಆಗದ ಭಾಷೆಗಳನ್ನು ತೆಗೆದುಹಾಕಲಾಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | ಲಭ್ಯವಿರುವ ಭಾಷೆಗಳು. |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
