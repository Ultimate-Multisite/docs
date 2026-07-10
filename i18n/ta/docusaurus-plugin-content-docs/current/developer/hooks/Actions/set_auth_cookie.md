---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

அங்கீகார குக்கி (authentication cookie) அமைக்கப்படுவதற்கு சற்று முன்பு இது செயல்படும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் |
|------|------|-------------|
| $auth_cookie | `string` | அங்கீகார குக்கி மதிப்பு. |
| $expire | `int` | உள்நுழைவு கால அவகாசம் (login grace period) எப்போது முடிவடையும் என்பதற்கான UNIX timestamp நேரம். இயல்புநிலை, குக்கி காலாவதியிலிருந்து 12 மணி நேரம் கழித்து இருக்கும். |
| $expiration | `int` | அங்கீகார குக்கி காலாவதியாகும் நேரம், இது ஒரு UNIX timestamp ஆக இருக்கும். இயல்புநிலை, இன்று முதல் 14 நாட்களுக்குப் பிறகு. |
| $user_id | `int` | பயனர் ID. |
| $scheme | `string` | அங்கீகார திட்டம் (Authentication scheme). மதிப்புகளில் 'auth' அல்லது 'secure_auth' ஆகியவை அடங்கும். |
| $token | `string` | இந்த குக்கிக்கு பயன்படுத்த வேண்டிய பயனரின் அமர்வு டோக்கன் (session token). |

### எப்போது இருந்து (Since) {#since}

- 2.5.0
- 4.9.0: <code>$token</code> என்ற அளவுரு சேர்க்கப்பட்டது.
### மூலம் (Source) {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) at line 124
