---
id: secure_logged_in_cookie
title: ಫಿಲ್ಟರ್ - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

ಲಾಗ್ ಇನ್ ಕುಕಿ ಕೇವಲ HTTPS ಮೂಲಕವೇ ಕಳುಹಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಇದು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ಲಾಗ್ ಇನ್ ಕುಕಿ ಕೇವಲ HTTPS ಮೂಲಕವೇ ಕಳುಹಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಇದು ನಿರ್ಧರಿಸುತ್ತದೆ. |
| $user_id | `int` | ಬಳಕೆದಾರರ ID. |
| $secure | `bool` | ಆಥೆಂಟिकेशन ಕುಕಿ ಕೇವಲ HTTPS ಮೂಲಕವೇ ಕಳುಹಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಇದು ನಿರ್ಧರಿಸುತ್ತದೆ. |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) at line 91
