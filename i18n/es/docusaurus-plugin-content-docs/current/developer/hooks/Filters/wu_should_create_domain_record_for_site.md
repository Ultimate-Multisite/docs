---
id: wu_should_create_domain_record_for_site
title: Filtro - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtro: wu_should_create_domain_record_for_site

Filtra si Ultimate Multisite debe crear un registro de dominio para un sitio recién creado.

Usa este filtro para suprimir o diferir la creación automática del registro de dominio para sitios que usan un dominio base compartido de formulario de checkout, un host interno o un dominio que otra integración gestionará por separado.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $create | `bool` | Si se debe crear el registro de dominio. |
| $site | `WP_Site` | El objeto del sitio recién creado. |

### Desde {#since}

- 2.13.0

### Fuente {#source}

Definido en `inc/functions/domain.php`.


## Devuelve {#returns}

Booleano que indica si se debe crear el registro de dominio.
