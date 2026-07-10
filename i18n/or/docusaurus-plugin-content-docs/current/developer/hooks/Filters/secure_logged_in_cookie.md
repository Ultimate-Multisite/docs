---
id: secure_logged_in_cookie
title: ଫିଲ୍ଟର - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

ଲଗ୍‌ ଇନ୍‌ କୁକି କେବଳ HTTPS ଉପରେ ପଠାଯିବ କି ନାହିଁ, ତାହା ଫିଲ୍ଟର୍ କରେ।

## ପାରାମିଟର୍ {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ଲଗ୍‌ ଇନ୍‌ କୁକି କେବଳ HTTPS ଉପରେ ପଠାଯିବ କି ନାହିଁ। |
| $user_id | `int` | ବ୍ୟବହାରକାରୀ ID। |
| $secure | `bool` | auth କୁକି କେବଳ HTTPS ଉପରେ ପଠାଯିବ କି ନାହିଁ। |

### ଏହି ସଂସ୍କରଣରୁ {#since}

- 3.1.0
### ଉତ୍ସ {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) ରେ ୯୧ ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ।
