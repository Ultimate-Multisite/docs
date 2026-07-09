---
id: wp_ultimo_render_vars
title: Filtro - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtro: wp_ultimo_render_vars

Permite que programadores de plugins adicionem uma variável extra ao contexto de renderização globalmente.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $args | `array` | Array que contém variáveis passadas pela chamada de renderização. |
| $view | `string` | Nome da view a ser renderizada. |
| $default_view | `string` | Nome da fallback_view |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) na linha 31


## Retorna
