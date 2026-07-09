---
id: get_blogs_of_user
title: Filtro - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtro: get_blogs_of_user

Replica aquí o filtro orixinal de WP, por se acaso.

Filtra a lista de sitios aos que pertence un usuario.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $sites | `object[]` | Un array de obxectos de sitio pertencentes ao usuario. |
| $user_id | `int` | ID de usuario. |
| $all | `bool` | Se o array de sitios devolto debe conter todos os sitios, incluídos os marcados como 'deleted', 'archived' ou 'spam'. Por defecto, false. |

### Desde

- 2.0.11
### Fonte

Definido en [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) na liña 851
