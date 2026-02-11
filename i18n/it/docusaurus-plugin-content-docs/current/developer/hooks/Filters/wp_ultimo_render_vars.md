---
id: wp_ultimo_render_vars
title: Filtro - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtro: wp_ultimo_render_vars

Permetti agli sviluppatori di plugin di aggiungere una variabile extra al contesto di rendering a livello globale.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $args | `array` | Array contenente le variabili passate dalla chiamata di rendering. |
| $view | `string` | Nome della vista da renderizzare. |
| $default_view | `string` | Nome del fallback_view |

### Da

- 2.0.0

### Fonte

Definito in [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) alla riga 31

## Restituisce
