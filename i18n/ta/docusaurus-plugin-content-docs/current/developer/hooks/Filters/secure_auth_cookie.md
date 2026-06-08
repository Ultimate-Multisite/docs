---
id: secure_auth_cookie
title: வடிகட்டி - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# ஃபில்டர்: secure_auth_cookie

auth cookie ஆனது HTTPS வழியாக மட்டுமே அனுப்பப்பட வேண்டுமா என்பதை இது ஃபில்டர் செய்கிறது.

## அளவுருக்கள்

| Name | Type | விளக்கம் |
|------|------|-------------|
| $secure | `bool` | cookie ஆனது HTTPS வழியாக மட்டுமே அனுப்பப்பட வேண்டுமா என்பதைக் குறிக்கிறது. |
| $user_id | `int` | பயனர் ஐடி (User ID). |

### எப்போது இருந்து

- 3.1.0
### மூலம்

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) இல் 80 வரியில் வரையறுக்கப்பட்டுள்ளது
