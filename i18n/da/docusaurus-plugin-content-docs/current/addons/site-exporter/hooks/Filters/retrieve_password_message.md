---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtrerer beskedindholdet i e-mailen til nulstilling af adgangskode.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $message | `string` | Standard e-mailbesked. |
| $key | `string` | Aktiveringsnøglen. |
| $user_login | `string` | Brugernavnet for brugeren. |
| $user_data | `\WP_User` | WP_User-objekt. |

### Siden

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Kilde

Defineret i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) på linje 149


## Returnerer
Standard e-mailbesked.
