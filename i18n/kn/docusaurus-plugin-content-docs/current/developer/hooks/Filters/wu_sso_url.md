---
id: wu_sso_url
title: ಫಿಲ್ಟರ್ - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# ಫಿಲ್ಟರ್: wu_sso_url {#filter-wussourl}

ಕ್ರಾಸ್-ಡೊಮೇನ್ ಗ್ರಾಹಕ ಕ್ರಿಯೆಗಳಿಗಾಗಿ ಹಿಂತಿರುಗಿಸುವ ಮೊದಲು ರಚಿಸಲಾದ SSO URLಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

Ultimate Multisite‌ನ token validation ಅನ್ನು ಉಳಿಸಿಕೊಂಡೇ, integration ಒಂದು sovereign-tenant SSO linkಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಸಂದರ್ಭವನ್ನು ಸೇರಿಸಬೇಕಾದಾಗ ಅಥವಾ broker URL ಅನ್ನು ಬದಲಾಯಿಸಬೇಕಾದಾಗ ಈ ಫಿಲ್ಟರ್ ಬಳಸಿ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು {#parameters}

| ಹೆಸರು | ಪ್ರಕಾರ | ವಿವರಣೆ |
|------|------|-------------|
| $sso_url | `string` | ರಚಿಸಲಾದ SSO URL. |
| $user | `WP_User` | SSO ಭೇಟಿ ಮೂಲಕ ದೃಢೀಕರಿಸಲ್ಪಡುವ ಬಳಕೆದಾರ. |
| $site_id | `int` | ಭೇಟಿಗೆ ಗುರಿಯಾದ site ID. |
| $redirect_to | `string` | ಯಶಸ್ವಿ SSO validation ನಂತರದ ಗಮ್ಯಸ್ಥಾನ URL. |

### ರಿಂದ {#since}

- 2.13.0

### ಮೂಲ {#source}

`inc/sso/class-sso.php` ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.


## ಹಿಂತಿರುಗಿಸುವುದು {#returns}

ಫಿಲ್ಟರ್ ಮಾಡಿದ SSO URL.
