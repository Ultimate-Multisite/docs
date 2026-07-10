---
id: wp_ultimo_render_vars
title: Filtre - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtre: wp_ultimo_render_vars {#filter-wpultimorendervars}

Permet aux développeurs de plugins d'ajouter une variable supplémentaire au contexte de rendu globalement.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Array containing variables passed by the render call. |
| $view | `string` | Name of the view to be rendered. |
| $default_view | `string` | Name of the fallback_view |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) à la ligne 31


## Returns {#returns}
