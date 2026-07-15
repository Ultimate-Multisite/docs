---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtreerib parooli lähtestamise e-kirja sõnumi sisu.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $message | `string` | Vaikimisi e-kirja sõnum. |
| $key | `string` | Aktiveerimisvõti. |
| $user_login | `string` | Kasutaja kasutajanimi. |
| $user_data | `\WP_User` | WP_User objekt. |

### Alates {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Allikas {#source}

Määratletud failis [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) real 149


## Tagastab {#returns}
Vaikimisi e-kirja sõnum.
