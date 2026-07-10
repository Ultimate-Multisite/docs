---
id: wu_get_site_domain_and_path
title: Filtro - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtro: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Permite aos desenvolvedores manipular os pares dominio/ruta.

Isto pode ser útil para varias cousas, como implementar algún tipo de solución de staging, servidores diferentes, etc.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $d | `object` | O obxecto actual que contén chaves de dominio e ruta. |
| $path_or_subdomain | `string` | A ruta/subdominio orixinal pasado á función. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) na liña 235


## Devolve {#returns}
Un obxecto que contén chaves de dominio e ruta.
