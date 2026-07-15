---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Ελέγχει αν το cookie प्रमाτογράφησης (auth cookie) πρέπει να αποστέλεται μόνο μέσω HTTPS.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Αν το cookie πρέπει να αποστέλεται μόνο μέσω HTTPS. |
| $user_id | `int` | Ο αναγνωριστικός αριθμός (ID) του χρήστη. |

### Since {#since}

- 3.1.0
### Source {#source}

Ορίζεται στο [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) στην γραμμή 80
