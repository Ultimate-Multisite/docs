---
id: secure_logged_in_cookie
title: Φίλτρο - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Φιλτράρει αν το cookie σύνδεσης πρέπει να αποστέλλεται μόνο μέσω HTTPS.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Αν το cookie σύνδεσης πρέπει να αποστέλλεται μόνο μέσω HTTPS. |
| $user_id | `int` | ID χρήστη. |
| $secure | `bool` | Αν το cookie प्रमाणीποίησης πρέπει να αποστέλλεται μόνο μέσω HTTPS. |

### Since

- 3.1.0
### Source

Ορίζεται στο [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) στην γραμμή 91
