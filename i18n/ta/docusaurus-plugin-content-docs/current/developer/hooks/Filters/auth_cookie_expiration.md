---
id: auth_cookie_expiration
title: வடிகட்டி - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

அங்கீகார குக்கீ காலாவதி எவ்வளவு காலம் நீடிக்கும் என்பதை இது கட்டுப்படுத்துகிறது.

## அளவுருக்கள்

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $length | `int` | காலாவதி காலம் வினாடிகளில். |
| $user_id | `int` | பயனர் ஐடி. |
| $remember | `bool` | பயனரின் உள்நுழைவை நினைவில் கொள்ள வேண்டுமா. இயல்புநிலை (Default) தவறு (false). |

### எப்போது இருந்து

- 2.8.0
### மூலம்

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) என்ற கோப்பில் 52 வரியில் வரையறுக்கப்பட்டுள்ளது.
