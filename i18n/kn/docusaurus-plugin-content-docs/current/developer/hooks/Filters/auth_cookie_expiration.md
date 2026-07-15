---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

ಆಥೆಂಟಿಕೇಶನ್ ಕುકી (authentication cookie) ಅವಧಿ ಮುಗಿಯುವ ಸಮಯದ ಅವಧಿಯನ್ನು ಇದು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | ಅವಧಿ ಮುಗಿಯುವ ಸಮಯವನ್ನು ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ ನೀಡುತ್ತದೆ. |
| $user_id | `int` | ಬಳಕೆದಾರರ ID. |
| $remember | `bool` | ಬಳಕೆದಾರರ ಲಾಗಿನ್ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಬೇಕೇ. ಡೀಫಾಲ್ಟ್ ಫಾಲ್ಸ್. |

### Since {#since}

- 2.8.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) at line 52
