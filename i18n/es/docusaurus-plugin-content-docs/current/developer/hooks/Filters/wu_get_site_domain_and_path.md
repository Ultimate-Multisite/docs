---
id: wu_get_site_domain_and_path
title: Filtro - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtro: wu_get_site_domain_and_path

Permitir a los desarrolladores manipular los pares dominio/camino.

Esto puede ser útil para varias cosas, como implementar algún tipo de solución de staging, servidores diferentes, etc.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $d | `object` | El objeto actual que contiene las claves dominio y ruta. |
| $path_or_subdomain | `string` | La ruta/subdominio original pasada a la función. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) en la línea 235

## Devuelve
Un objeto que contiene las claves dominio y ruta.
