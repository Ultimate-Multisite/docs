---
id: wu_should_create_domain_record_for_site
title: Filtro - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtro: wu_should_create_domain_record_for_site

Filtra se Ultimate Multisite debe crear un rexistro de dominio para un sitio recén creado.

Usa este filtro para suprimir ou adiar a creación automática de rexistros de dominio para sitios que usan un dominio base compartido do formulario de finalización da compra, un host interno ou un dominio que outra integración xestionará por separado.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $create | `bool` | Se se debe crear o rexistro de dominio. |
| $site | `WP_Site` | O obxecto do sitio recén creado. |

### Desde {#since}

- 2.13.0

### Fonte {#source}

Definido en `inc/functions/domain.php`.


## Devolve {#returns}

Booleano que indica se se debe crear o rexistro de dominio.
