---
id: get_site_url_for_previewer
title: Filtro - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtro: get_site_url_for_previewer

Permitir a los desarrolladores de plugins filtrar la URL utilizada en el visor

## Parámetros

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Dominio predeterminado que se está utilizando en este momento, útil para manipulaciones |
| $domain_options | `array` | Lista de todas las opciones de dominio ingresadas en la Configuración de Ultimate Multisite -> Configuración de la Red -> Opciones de Dominio |

### Desde

- 1.7.2

### Fuente

Definido en [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) en la línea 812

## Devuelve

Nuevo dominio a usar
