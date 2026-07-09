---
id: wp_ultimo_render_vars
title: Szűrő - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars {#filter-wpultimorendervars}

Engedi a plugin fejlesztőknek globálisan hozzáadni extra változókat a render kontextushoz.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Egy tömb, amely a render hívás által átadott változókat tartalmazza. |
| $view | `string` | A renderelni kívánt nézet (view) neve. |
| $default_view | `string` | A fallback_view neve. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Megértve a [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) fájlban, 31-edik soron.


## Visszaadja {#returns}
