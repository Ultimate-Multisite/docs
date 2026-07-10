---
id: retrieve_password_title
title: Filtro - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Filtra o asunto do correo electrónico de restablecemento do contrasinal.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $title | `string` | Título predeterminado do correo electrónico. |
| $user_login | `string` | O nome de usuario para o usuario. |
| $user_data | `\WP_User` | Obxecto WP_User. |

### Desde {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Fonte {#source}

Definido en [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) na liña 135


## Devolve {#returns}
Título predeterminado do correo electrónico.
