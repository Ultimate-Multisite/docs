---
id: get_blogs_of_user
title: Filtro - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtro: get_blogs_of_user

Replica aqui o filtro WP original, por precaução.

Filtra a lista de sites aos quais um utilizador pertence.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $sites | `object[]` | Um array de objetos de site pertencentes ao utilizador. |
| $user_id | `int` | ID do utilizador. |
| $all | `bool` | Se o array de sites devolvido deve conter todos os sites, incluindo os marcados como 'deleted', 'archived' ou 'spam'. Predefinição: false. |

### Desde

- 2.0.11
### Fonte

Definido em [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) na linha 851
