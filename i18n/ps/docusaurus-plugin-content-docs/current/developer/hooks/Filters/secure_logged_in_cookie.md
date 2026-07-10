---
id: secure_logged_in_cookie
title: فلټر - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# فلټر: secure_logged_in_cookie {#filter-secureloggedincookie}

فلټر کوي چې ایا د ننوتلي کارن کوکي باید یوازې د HTTPS له لارې واستول شي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ایا د ننوتلي کارن کوکي باید یوازې د HTTPS له لارې واستول شي. |
| $user_id | `int` | د کارن پېژند. |
| $secure | `bool` | ایا د auth کوکي باید یوازې د HTTPS له لارې واستول شي. |

### له نسخې راهیسې {#since}

- 3.1.0
### سرچینه {#source}

په [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) کې په ۹۱ کرښه تعریف شوی.
