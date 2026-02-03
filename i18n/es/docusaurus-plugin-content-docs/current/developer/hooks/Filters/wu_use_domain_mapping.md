---
id: wu_use_domain_mapping
title: Filtro - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtro: wu_use_domain_mapping

Determina si se debe usar un mapeo

Normalmente, solo querrás permitir que se usen los mapeos activos. Sin embargo, si deseas usar una lógica más avanzada, o permitir que se asignen también dominios no activos, simplemente filtra aquí.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $is_active | `bool` | ¿Debe tratarse el mapeo como activo? |
| $mapping | `\Domain` | Mapeo que estamos inspeccionando |
| $domain | `string` |  |

### Fuente

Definido en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) en la línea 391
