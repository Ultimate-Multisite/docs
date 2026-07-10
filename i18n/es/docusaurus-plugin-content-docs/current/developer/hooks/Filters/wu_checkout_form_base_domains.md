---
id: wu_checkout_form_base_domains
title: Filtro - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtro: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtra los dominios base de formulario de checkout compartidos que no deben convertirse en registros de dominio asignado.

Usa este filtro cuando una integración proporciona dominios base adicionales para los campos **Site URL** del formulario de checkout. Los dominios devueltos por este filtro se tratan como hosts de registro compartidos en lugar de dominios personalizados por sitio.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $domains | `array` | Dominios base compartidos recopilados desde la configuración del formulario de checkout. |

### Desde {#since}

- 2.13.0

### Fuente {#source}

Definido en `inc/functions/domain.php`.


## Devuelve {#returns}

Array de dominios base de formulario de checkout normalizados.
