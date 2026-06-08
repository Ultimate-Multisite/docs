---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filter die duur van die verlooptyd van die autentiseringkoekie.

## Parameters

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $length | `int` | Die duur van die verlooptyd in sekondes. |
| $user_id | `int` | Gebruiker-ID. |
| $remember | `bool` | Of die gebruikersaanmelding onthou moet word. Standaard is vals. |

### Sedert

- 2.8.0
### Bron

Word gedefinieer in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) op lyn 52
