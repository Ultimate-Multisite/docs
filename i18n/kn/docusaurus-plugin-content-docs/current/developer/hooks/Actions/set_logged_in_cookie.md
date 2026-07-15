---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

ಲಾಗ್ ಇನ್ ಆಥೆಂಟಿಕೇಶನ್ ಕುકીವನ್ನು ಸೆಟ್ ಮಾಡುವ ತಕ್ಷಣವೇ ಇದು ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | ಲಾಗ್ ಇನ್ ಕುકીದ ಮೌಲ್ಯ (The logged-in cookie value). |
| $expire | `int` | ಲಾಗಿನ್ ಗ್ರೇಸ್ ಪೀರಿಯಡ್ ಯಾವಾಗ ಮುಗಿಯುತ್ತದೆ ಎಂಬುದನ್ನು UNIX ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್‌ನಲ್ಲಿ ತಿಳಿಸುತ್ತದೆ. ಡೀಫಾಲ್ಟ್ ಆಗಿ ಕುકી ಮುಗಿಯುವ ಸಮಯದ ನಂತರ 12 ಗಂಟೆಗಳು. |
| $expiration | `int` | ಲಾಗ್ ಇನ್ ಆಥೆಂಟಿಕೇಶನ್ ಕುકી ಯಾವಾಗ ಮುಗಿಯುತ್ತದೆ ಎಂಬುದನ್ನು UNIX ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್‌ನಲ್ಲಿ ತಿಳಿಸುತ್ತದೆ. ಡೀಫಾಲ್ಟ್ ಆಗಿ ಈಗಿನಿಂದ 14 ದಿನಗಳು. |
| $user_id | `int` | ಬಳಕೆದಾರರ ID (User ID). |
| $scheme | `string` | ಆಥೆಂಟಿಕೇಶನ್ ಸ್ಕೀಮ್. ಡೀಫಾಲ್ಟ್ 'logged_in'. |
| $token | `string` | ಈ ಕುಕಿಗೆ ಬಳಸಬೇಕಾದ ಬಳಕೆದಾರರ ಸೆಷನ್ ಟೋಕನ್ (User's session token). |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> ಪ್ಯಾರಾಮೀಟರ್ ಅನ್ನು ಸೇರಿಸಲಾಗಿದೆ.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ನಲ್ಲಿ 141ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
