---
id: get_site_url_for_previewer
title: ಫಿಲ್ಟರ್ - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

ಪ್ಲಗ್ಇನ್ developers ಗಳು ಪ್ರಿವ್ಯೂವರ್‌ನಲ್ಲಿ ಬಳಸುವ URL ಅನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಲು ಇದು ಅವಕಾಶ ನೀಡುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | ಪ್ರಸ್ತುತ ಬಳಸಲಾಗುತ್ತಿರುವ ಡೀಫಾಲ್ಟ್ ಡೊಮೇನ್. ಇದು ಬದಲಾವಣೆಗಳಿಗೆ (manipulations) ಉಪಯುಕ್ತವಾಗಿದೆ. |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options ನಲ್ಲಿ ನಮೂದಿಸಲಾದ ಎಲ್ಲಾ ಡೊಮೇನ್ ಆಯ್ಕೆಗಳ ಪಟ್ಟಿ. |

### ಯಾವಾಗ ಲಭ್ಯವಾಯಿತು {#since}

- 1.7.2
### ಮೂಲ {#source}

Defined in [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) at line 812


## ಮರಳಿ ನೀಡುವ ಮೌಲ್ಯ (Returns) {#returns}
ಬಳಸಬೇಕಾದ ಹೊಸ ಡೊಮೇನ್.
