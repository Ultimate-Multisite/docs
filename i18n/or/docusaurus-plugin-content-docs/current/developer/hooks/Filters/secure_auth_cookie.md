---
id: secure_auth_cookie
title: ଫିଲ୍ଟର - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

auth cookie କେବଳ HTTPS ଉପରେ ପଠାଯିବ କି ନାହିଁ, ତାହା filter କରେ।

## ପାରାମିଟରଗୁଡ଼ିକ

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $secure | `bool` | cookie କେବଳ HTTPS ଉପରେ ପଠାଯିବ କି ନାହିଁ। |
| $user_id | `int` | User ID. |

### ଯେହେତୁ

- 3.1.0
### ଉତ୍ସ

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ରେ 80 ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
