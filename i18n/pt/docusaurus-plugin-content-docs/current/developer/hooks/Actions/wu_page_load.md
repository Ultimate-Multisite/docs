---
id: wu_page_load
title: Ação - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Permite que developers de plugins adicionem hooks adicionais às nossas páginas.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $id | `string` | O ID desta página. |
| $page_hook | `string` | O hook de página desta página. |
| $admin_page | `self` | A instância da página. |

### Desde

- 1.8.2
- 2.0.4: Adicionado terceiro parâmetro: a instância da página.
### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) na linha 318
