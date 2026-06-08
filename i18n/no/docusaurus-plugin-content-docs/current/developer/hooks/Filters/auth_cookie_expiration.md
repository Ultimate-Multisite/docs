---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtrerer varigheten av utløpsperioden for autentiseringskaken (cookie).

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $length | `int` | Varigheten av utløpsperioden i sekunder. |
| $user_id | `int` | Bruker-ID. |
| $remember | `bool` | Om man skal huske brukerens pålogging. Standard er `false`. |

### Siden

- 2.8.0
### Kilde

Definert i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) på linje 52
