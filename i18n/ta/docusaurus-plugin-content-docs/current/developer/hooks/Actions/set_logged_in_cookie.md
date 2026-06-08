---
id: set_logged_in_cookie
title: செயல் - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

உள்நுழைவு அங்கீகார குக்கி அமைக்கப்படுவதற்கு இது உடனடியாக இயங்கும்.

## அளவுருக்கள்

| Name | Type | விளக்கம் |
|------|------|-------------|
| $logged_in_cookie | `string` | உள்நுழைவு குக்கி மதிப்பு. |
| $expire | `int` | உள்நுழைவு கால வரம்பு எப்போது முடிவடைகிறது என்பதை UNIX நேர முத்திரையாகக் குறிக்கும் நேரம். இயல்பாக குக்கி காலாவதியாகும் நேரத்திற்கு 12 மணி நேரம் கூடுதல். |
| $expiration | `int` | உள்நுழைவு அங்கீகார குக்கி காலாவதியாகும் நேரத்தை UNIX நேர முத்திரையாகக் குறிக்கும் நேரம். இயல்பாக இன்று முதல் 14 நாட்கள். |
| $user_id | `int` | பயனர் ஐடி. |
| $scheme | `string` | அங்கீகார முறை. இயல்பாக 'logged_in'. |
| $token | `string` | இந்த குக்கிக்கு பயன்படுத்த வேண்டிய பயனரின் அமர்வு டோக்கன். |

### எப்போது இருந்து

- 2.6.0
- 4.9.0: <code>$token</code> அளவுரு சேர்க்கப்பட்டது.
### மூலம்

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) என்ற கோப்பில் 141 வரியில் வரையறுக்கப்பட்டுள்ளது.
