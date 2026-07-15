---
id: wu_should_create_domain_record_for_site
title: ಫಿಲ್ಟರ್ - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# ಫಿಲ್ಟರ್: wu_should_create_domain_record_for_site

ಹೊಸಾಗಿ ರಚಿಸಿದ siteಗಾಗಿ Ultimate Multisite domain record ರಚಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

ಹಂಚಿಕೊಂಡ checkout-form ಮೂಲ domain, ಆಂತರಿಕ host, ಅಥವಾ ಮತ್ತೊಂದು integration ಪ್ರತ್ಯೇಕವಾಗಿ ನಿರ್ವಹಿಸುವ domain ಬಳಸುವ siteಗಳಿಗಾಗಿ ಸ್ವಯಂಚಾಲಿತ domain-record ರಚನೆಯನ್ನು ತಡೆಯಲು ಅಥವಾ ಮುಂದೂಡಲು ಈ filter ಬಳಸಿ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು {#parameters}

| ಹೆಸರು | ಪ್ರಕಾರ | ವಿವರಣೆ |
|------|------|-------------|
| $create | `bool` | domain record ರಚಿಸಬೇಕೇ ಎಂಬುದು. |
| $site | `WP_Site` | ಹೊಸಾಗಿ ರಚಿಸಿದ site object. |

### ಇಂದಿನಿಂದ {#since}

- 2.13.0

### ಮೂಲ {#source}

`inc/functions/domain.php` ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.


## ಹಿಂತಿರುಗಿಸುವುದು {#returns}

domain record ರಚಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಸೂಚಿಸುವ Boolean.
