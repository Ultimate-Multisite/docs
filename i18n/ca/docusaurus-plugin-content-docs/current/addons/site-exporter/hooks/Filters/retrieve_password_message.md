---
id: retrieve_password_message
title: Filtre - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtre: retrieve_password_message

Filtra el cos del missatge de l'e-mail de reseteo de contrasenya.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $message | `string` | Missatge d'e-mail predeterminat. |
| $key | `string` | La clau d'activació. |
| $user_login | `string` | L'usuari (username) de l'usuari. |
| $user_data | `\WP_User` | Objecte WP_User. |

### Des de

- 2.8.0
- 4.1.0: S'afegeixen els paràmetres <code>$user_login</code> i <code>$user_data</code>.
### Font

Definit en [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) a la línia 149


## Retorn
Missatge d'e-mail predeterminat.
