---
id: get_blogs_of_user
title: Filtro - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtro: get_blogs_of_user {#filter-getblogsofuser}

Replica el filtro WP original aquí, por si acaso.

Filtra la lista de sitios a los que pertenece un usuario.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $sites | `object[]` | Un array de objetos de sitio pertenecientes al usuario. |
| $user_id | `int` | ID de usuario. |
| $all | `bool` | Si el array de sitios devuelto debe contener todos los sitios, incluidos los marcados como 'deleted', 'archived' o 'spam'. Por defecto falso. |

### Desde {#since}

- 2.0.11

### Fuente {#source}

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
