---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Filter of die ingelogde koekie slegs oor HTTPS gestuur moet word.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Bepaal of die ingelogde koekie slegs oor HTTPS gestuur moet word. |
| $user_id | `int` | Die Gebruikers-ID. |
| $secure | `bool` | Bepaal of die autentiseringkoekie slegs oor HTTPS gestuur moet word. |

### Sedert {#since}

- 3.1.0
### Bron {#source}

Begaan in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) op lyn 91
