---
id: set_logged_in_cookie
title: କାର୍ଯ୍ୟ - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

ଲଗ୍‌ଇନ୍ ପ୍ରମାଣୀକରଣ cookie ସେଟ୍ ହେବାର ଠିକ୍ ପୂର୍ବରୁ ଚାଲୁ ହୁଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $logged_in_cookie | `string` | ଲଗ୍‌ଇନ୍ cookie ମୂଲ୍ୟ। |
| $expire | `int` | ଲଗ୍‌ଇନ୍ ଗ୍ରେସ୍ ସମୟସୀମା ସମାପ୍ତ ହେବାର ସମୟ, UNIX timestamp ଭାବରେ। ଡିଫଲ୍ଟ cookie ର ସମାପ୍ତି ସମୟର ୧୨ ଘଣ୍ଟା ପରେ। |
| $expiration | `int` | ଲଗ୍‌ଇନ୍ ପ୍ରମାଣୀକରଣ cookie ସମାପ୍ତ ହେବାର ସମୟ, UNIX timestamp ଭାବରେ। ଡିଫଲ୍ଟ ଏବେଠାରୁ ୧୪ ଦିନ। |
| $user_id | `int` | ବ୍ୟବହାରକାରୀ ID। |
| $scheme | `string` | ପ୍ରମାଣୀକରଣ scheme। ଡିଫଲ୍ଟ 'logged_in'। |
| $token | `string` | ଏହି cookie ପାଇଁ ବ୍ୟବହାର କରିବାକୁ ବ୍ୟବହାରକାରୀଙ୍କ session token। |

### ଆରମ୍ଭରୁ {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### ଉତ୍ସ {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ରେ ୧୪୧ ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ।
