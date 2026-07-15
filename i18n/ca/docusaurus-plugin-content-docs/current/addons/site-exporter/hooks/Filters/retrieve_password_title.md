---
id: retrieve_password_title
title: Filtre - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtre: retrieve_password_title

Filtra el subject de l'e-mail de reseteo de contrasenya.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $title | `string` | Títol predeterminat de l'e-mail. |
| $user_login | `string` | L'usuari (username) de l'usuari. |
| $user_data | `\WP_User` | Objecte WP_User. |

### Després de {#since}

- 2.8.0
- 4.4.0: S'afegeu els paràmetres <code>$user_login</code> i <code>$user_data</code>.
### Font {#source}

Definit a [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) a la línia 135


## Retorn {#returns}
Títol predeterminat de l'e-mail.
