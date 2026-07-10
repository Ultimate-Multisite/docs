---
id: wu_apc_process_page_content
title: Filtro - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtro: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Permite que desenvolvedores mexam no conteúdo final

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $content | `string` | Content after replacements. |
| $content_before_processing | `string` | Content pre replecements. |
| $to_replace | `array` | Array containing the placeholders hold. |
| $placeholder_count | `int` | Number of placeholders found. |

### Desde {#since}

- 1.4.0
### Fonte {#source}

Definido em [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) na linha 46


## Retorna {#returns}
Conteúdo após a modificação.
