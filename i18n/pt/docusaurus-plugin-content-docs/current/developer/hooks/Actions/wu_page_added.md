---
id: wu_page_added
title: Ação - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Permite que os programadores de plugins executem coisas adicionais quando páginas são registadas.

Ao contrário de wu_page_load, que só é executado quando uma página específica está a ser vista, este hook é executado no registo de cada página de admin adicionada usando código Ultimate Multisite.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $page_id | `string` | O ID desta página. |
| $page_hook | `string` | O nome do hook desta página. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) na linha 228
