---
id: add_user_to_blog
title: Ação - adicionar_user_ao_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Ação: add_user_to_blog

Dispara imediatamente após um utilizador ser adicionado a um site.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $user_id | `int` | ID do utilizador. |
| $role | `string` | Função do utilizador. |
| $blog_id | `int` | ID do blog. |

### Desde

- MU: MU
### Fonte

Definido em [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) na linha 174
