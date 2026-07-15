---
id: secure_logged_in_cookie
title: வடிகட்டி - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

உள்நுழைவு குக்கி (logged in cookie) HTTPS மூலமாக மட்டுமே அனுப்பப்பட வேண்டுமா என்பதை இது தீர்மானிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | உள்நுழைவு குக்கி HTTPS மூலமாக மட்டுமே அனுப்பப்பட வேண்டுமா. |
| $user_id | `int` | பயனர் ஐடி (User ID). |
| $secure | `bool` | அங்கீகார குக்கி (auth cookie) HTTPS மூலமாக மட்டுமே அனுப்பப்பட வேண்டுமா. |

### இருந்ததிலிருந்து (Since) {#since}

- 3.1.0
### மூலம் (Source) {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) என்ற கோப்பில், 91-வது வரியில் வரையறுக்கப்பட்டுள்ளது.
