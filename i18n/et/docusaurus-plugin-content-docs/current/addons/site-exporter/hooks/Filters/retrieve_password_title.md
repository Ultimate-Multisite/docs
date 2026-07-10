---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Filtreerib parooli lähtestamise e-kirja teema.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $title | `string` | Vaikimisi e-kirja pealkiri. |
| $user_login | `string` | Kasutaja kasutajanimi. |
| $user_data | `\WP_User` | WP_User objekt. |

### Alates {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Allikas {#source}

Määratletud failis [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) real 135


## Tagastab {#returns}
Vaikimisi e-kirja pealkiri.
