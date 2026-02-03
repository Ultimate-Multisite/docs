---
id: retrieve_password_title
title: >-
  Lo siento, pero no veo el contenido del archivo que deseas traducir. Por
  favor, proporciona el texto completo (el Markdown/MDX) y con gusto lo
  traduciré al español.
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtro: retrieve_password_title

Filtra el asunto del correo electrónico de restablecimiento de contraseña.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $title | `string` | Título de correo electrónico predeterminado. |
| $user_login | `string` | El nombre de usuario del usuario. |
| $user_data | `\WP_User` | Objeto WP_User. |

### Desde

- 2.8.0
- 4.4.0: Añadidos los parámetros <code>$user_login</code> y <code>$user_data</code>.

### Fuente

Definido en [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) en la línea 135

## Devuelve

Título de correo electrónico predeterminado.
