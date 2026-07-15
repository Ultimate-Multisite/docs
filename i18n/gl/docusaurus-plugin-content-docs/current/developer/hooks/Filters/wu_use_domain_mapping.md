---
id: wu_use_domain_mapping
title: Filtro - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtro: wu_use_domain_mapping

Determina se se debe usar un mapeo

Normalmente, quererás permitir só o uso de mapeos activos. Porén, se queres usar unha lóxica máis avanzada, ou permitir que tamén se mapeen dominios non activos, simplemente filtra aquí.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $is_active | `bool` | Debe tratarse o mapeo como activo? |
| $mapping | `\Domain` | Mapeo que estamos inspeccionando |
| $domain | `string` |  |

### Fonte {#source}

Definido en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) na liña 391
