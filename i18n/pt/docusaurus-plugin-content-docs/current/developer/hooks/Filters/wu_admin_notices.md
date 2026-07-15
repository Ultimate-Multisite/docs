---
id: wu_admin_notices
title: Filtro - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtro: wu_admin_notices

Permite que developers filtrem avisos de admin adicionados pelo Ultimate Multisite.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $notices | `array` | Lista de avisos para esse painel específico. |
| $all_notices | `array` | Lista de avisos adicionados, segregados por painel. |
| $panel | `string` | Painel para obter os avisos. |
| $filter | `string` | Se os avisos dispensáveis foram filtrados. |
| $dismissed_messages | `array` | Lista de chaves de avisos dispensados. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) na linha 121


## Retorna {#returns}
