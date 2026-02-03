---
id: wu_domain_mapping_register_filters
title: Acción - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
Algunos plugins guardarán la URL antes de que la asignación estuviera activa o construirán URLs de una manera diferente que no está incluida en los filtros anteriores.

En casos como ese, queremos agregar filtros adicionales. El segundo parámetro pasado es el callback mangle_url. Recomendamos no usar este filtro directamente. En su lugar, use el método Domain_Mapping::apply_mapping_to_url.

## Parameters

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $mangle_url | `callable` | El callable de mangle. |
| $domain_mapper | `self` | Este objeto. |

### Since

- 2.0.0

### Source

Definido en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) en la línea 530
