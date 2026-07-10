---
id: set_auth_cookie
title: କାର୍ଯ୍ୟ - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

ପ୍ରମାଣୀକରଣ cookie ସେଟ୍ ହେବାର ଠିକ୍ ପୂର୍ବରୁ ଚାଲୁ ହୁଏ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $auth_cookie | `string` | ପ୍ରମାଣୀକରଣ cookie ମୂଲ୍ୟ। |
| $expire | `int` | UNIX timestamp ଭାବରେ login grace period ସମାପ୍ତ ହେବାର ସମୟ। ଡିଫଲ୍ଟ ହେଉଛି cookie ର ସମାପ୍ତି ସମୟର ୧୨ ଘଣ୍ଟା ପରେ। |
| $expiration | `int` | UNIX timestamp ଭାବରେ ପ୍ରମାଣୀକରଣ cookie ସମାପ୍ତ ହେବାର ସମୟ। ଡିଫଲ୍ଟ ହେଉଛି ଏବେଠାରୁ ୧୪ ଦିନ। |
| $user_id | `int` | ବ୍ୟବହାରକାରୀ ID। |
| $scheme | `string` | ପ୍ରମାଣୀକରଣ scheme। ମୂଲ୍ୟଗୁଡ଼ିକରେ 'auth' କିମ୍ବା 'secure_auth' ଅନ୍ତର୍ଭୁକ୍ତ। |
| $token | `string` | ଏହି cookie ପାଇଁ ବ୍ୟବହାର କରିବାକୁ ବ୍ୟବହାରକାରୀଙ୍କ session token। |

### ଯେହେତୁ {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### ଉତ୍ସ {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ରେ ୧୨୪ ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
