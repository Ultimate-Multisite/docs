---
id: wu_page_added
title: Acción - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Acción: wu_page_added

Permite aos desenvolvedores de plugins executar cousas adicionais cando se rexistran páxinas.

A diferenza de wu_page_load, que só se executa cando se está a ver unha páxina específica, este hook execútase no rexistro para cada páxina de administración que se engade usando código de Ultimate Multisite.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $page_id | `string` | O ID desta páxina. |
| $page_hook | `string` | O nome do hook desta páxina. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) na liña 228
