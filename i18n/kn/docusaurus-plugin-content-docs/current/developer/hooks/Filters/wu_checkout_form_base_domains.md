---
id: wu_checkout_form_base_domains
title: ಫಿಲ್ಟರ್ - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# ಫಿಲ್ಟರ್: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

ಹಂಚಿಕೊಂಡ checkout-form ಮೂಲ ಡೊಮೇನ್‌ಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ; ಅವು mapped-domain ದಾಖಲೆಗಳಾಗಬಾರದು.

ಒಂದು ಏಕೀಕರಣವು checkout form **ತಾಣ URL** ಕ್ಷೇತ್ರಗಳಿಗಾಗಿ ಹೆಚ್ಚುವರಿ ಮೂಲ ಡೊಮೇನ್‌ಗಳನ್ನು ಒದಗಿಸಿದಾಗ ಈ ಫಿಲ್ಟರ್ ಬಳಸಿ. ಈ ಫಿಲ್ಟರ್ ಹಿಂತಿರುಗಿಸುವ ಡೊಮೇನ್‌ಗಳನ್ನು ಪ್ರತಿ ತಾಣದ ಕಸ್ಟಮ್ ಡೊಮೇನ್‌ಗಳ ಬದಲು ಹಂಚಿಕೊಂಡ ನೋಂದಣಿ ಹೋಸ್ಟ್‌ಗಳೆಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.

## ಪರಿಮಾಣಗಳು {#parameters}

| ಹೆಸರು | ಪ್ರಕಾರ | ವಿವರಣೆ |
|------|------|-------------|
| $domains | `array` | checkout form ಸಂರಚನೆಯಿಂದ ಸಂಗ್ರಹಿಸಿದ ಹಂಚಿಕೊಂಡ ಮೂಲ ಡೊಮೇನ್‌ಗಳು. |

### ಆವೃತ್ತಿಯಿಂದ {#since}

- 2.13.0

### ಮೂಲ {#source}

`inc/functions/domain.php` ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.


## ಹಿಂತಿರುಗಿಸುತ್ತದೆ {#returns}

ಸಾಮಾನ್ಯೀಕರಿಸಿದ checkout-form ಮೂಲ ಡೊಮೇನ್‌ಗಳ array.
