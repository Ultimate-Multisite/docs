---
id: secure_logged_in_cookie
title: Suodatin - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Suodatin: secure_logged_in_cookie

Suodattaa, lähetetäänkö sisäänkirjautumisen eväste vain HTTPS:n kautta.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Lähetetäänkö sisäänkirjautumisen eväste vain HTTPS:n kautta. |
| $user_id | `int` | Käyttäjän ID. |
| $secure | `bool` | Lähetetäänkö auth-eväste vain HTTPS:n kautta. |

### Alkaen versiosta {#since}

- 3.1.0
### Lähde {#source}

Määritelty tiedostossa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) rivillä 91
