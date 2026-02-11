---
id: get_blogs_of_user
title: Filtro - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtro: get_blogs_of_user

Replicamos o filtro WP original aqui, por precaução.

Filtra a lista de sites aos quais um usuário pertence.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Um array de objetos de site pertencentes ao usuário. |
| $user_id | `int` | ID do usuário. |
| $all | `bool` | Se o array de sites retornado deve conter todos os sites, incluindo aqueles marcados como 'deleted', 'archived' ou 'spam'. Padrão falso. |

### Since

- 2.0.11

### Source

Definido em [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) na linha 851
