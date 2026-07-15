---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ಒಂದು ಡೊಮೇನ್ ಅನ್ನು ಪ್ರೈಮರಿ (primary) ಮಾಡಿದ ನಂತರ ಬರುವ ರಿಡೈರೆಕ್ಟ್ URL ಅನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

ಒಂದು ಡೊಮೇನ್ ಅನ್ನು ಪ್ರೈಮರಿ ಆಗಿ ಸೆಟ್ ಮಾಡಿದ ನಂತರ ಬಳಕೆದಾರರು ಎಲ್ಲಿಗೆ ರಿಡೈರೆಕ್ಟ್ ಆಗಬೇಕು ಎಂಬುದನ್ನು developers ಗಳಿಗೆ ಕಸ್ಟಮೈಸ್ ಮಾಡಲು ಇದು ಅವಕಾಶ ನೀಡುತ್ತದೆ. ಸಾಮಾನ್ಯವಾಗಿ, ಇದು ಮುಖ್ಯ ಸೈಟ್‌ನ ಪ್ರಸ್ತುತ URL ಗೆ ಅಥವಾ ಬದಲಾಯಿಸಲಾಗುತ್ತಿರುವ ಸೈಟ್‌ನ ಅಡ್ಮಿನ್ URL ಗೆ ರಿಡೈರೆಕ್ಟ್ ಆಗುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು {#parameters}

| Name | Type | ವಿವರಣೆ |
|------|------|-------------|
| $redirect_url | `string` | ಡೀಫಾಲ್ಟ್ ರಿಡೈರೆಕ್ಟ್ URL. ಇದು ಪ್ರಸ್ತುತ URL (ಮುಖ್ಯ ಸೈಟ್ ಆಗಿದ್ದರೆ) ಅಥವಾ ಪ್ರಸ್ತುತ ಸೈಟ್‌ನ ಅಡ್ಮಿನ್ URL ಆಗಿರಬಹುದು. |
| $current_site | `int` | ಯಾವ ಡೊಮೇನ್ ಅನ್ನು ಪ್ರೈಮರಿ ಆಗಿಸಲಾಗುತ್ತಿದೆಯೋ ಆ ಸೈಟ್‌ನ ID. |
| $domain | `\Domain` | ಪ್ರೈಮರಿ ಆಗಿಸಲಾದ ಡೊಮೇನ್ ಆಬ್ಜೆಕ್ಟ್. |
| $old_primary_domains | `array` | ಹಿಂದೆ ಪ್ರೈಮರಿ ಆಗಿದ್ದ ಡೊಮೇನ್‌ಗಳ ID ಗಳ ಅರೇ. |

### ಯಾವಾಗದಿಂದ {#since}

- 2.0.0
### ಮೂಲ {#source}

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## ಮರಳಿ ನೀಡುವ ಮೌಲ್ಯ {#returns}
ಫಿಲ್ಟರ್ ಮಾಡಿದ ರಿಡೈರೆಕ್ಟ್ URL.
