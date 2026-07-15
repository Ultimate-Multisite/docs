---
id: auth_cookie_expiration
title: ଫିଲ୍ଟର - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

ପ୍ରମାଣୀକରଣ କୁକି ମିଆଦ ସମୟସୀମାର ଅବଧିକୁ ଫିଲ୍ଟର କରେ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $length | `int` | ମିଆଦ ସମୟସୀମାର ଅବଧି ସେକେଣ୍ଡରେ। |
| $user_id | `int` | ବ୍ୟବହାରକାରୀ ID। |
| $remember | `bool` | ବ୍ୟବହାରକାରୀ ଲଗଇନ୍ ମନେ ରଖିବା କି ନୁହେଁ। ଡିଫଲ୍ଟ false। |

### ଯେହେତୁ {#since}

- 2.8.0
### ଉତ୍ସ {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ରେ ୫୨ ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
