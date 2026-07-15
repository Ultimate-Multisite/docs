---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Authentication cookie ಅನ್ನು ಸೆಟ್ ಮಾಡುವ ತಕ್ಷಣದ ಮೊದಲು ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Authentication cookie ಮೌಲ್ಯ. |
| $expire | `int` | ಲಾಗಿನ್ ಗ್ರೇಸ್ ಪೀರಿಯಡ್ (login grace period) ಯಾವಾಗ ಮುಗಿಯುತ್ತದೆ ಎಂಬುದನ್ನು UNIX timestamp ಆಗಿ ಸೂಚಿಸುತ್ತದೆ. ಇದರ ಡೀಫಾಲ್ಟ್ ಮೌಲ್ಯವು cookie ನ ಅವಧಿ ಮುಗಿಯುವುದರಿಂದ 12 ಗಂಟೆಗಳ ನಂತರದ ಸಮಯವಾಗಿರುತ್ತದೆ. |
| $expiration | `int` | Authentication cookie ಯಾವಾಗ ಮುಗಿಯುತ್ತದೆ ಎಂಬುದನ್ನು UNIX timestamp ಆಗಿ ಸೂಚಿಸುತ್ತದೆ. ಇದರ ಡೀಫಾಲ್ಟ್ ಮೌಲ್ಯವು ಈಗಿನಿಂದ 14 ದಿನಗಳ ನಂತರದ ಸಮಯವಾಗಿರುತ್ತದೆ. |
| $user_id | `int` | ಬಳಕೆದಾರರ ID. |
| $scheme | `string` | Authentication ಸ್ಕೀಮ್. ಮೌಲ್ಯಗಳಲ್ಲಿ 'auth' ಅಥವಾ 'secure_auth' ಇರಬಹುದು. |
| $token | `string` | ಈ cookie ಗಾಗಿ ಬಳಸಬೇಕಾದ ಬಳಕೆದಾರರ session token. |

### Since {#since}

- 2.5.0
- 4.9.0: <code>$token</code> ಎಂಬ ಪ್ಯಾರಾಮೀಟರ್ ಅನ್ನು ಸೇರಿಸಲಾಗಿದೆ.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ನಲ್ಲಿ 124ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
