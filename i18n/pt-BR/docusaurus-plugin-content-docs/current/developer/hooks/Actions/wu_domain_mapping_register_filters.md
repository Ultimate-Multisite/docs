---
id: wu_domain_mapping_register_filters
title: Ação - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Ação: wu_domain_mapping_register_filters

Alguns plugins salvarão URLs antes que o mapeamento estivesse ativo ou construirão URLs de maneira diferente que não está incluída nos filtros acima.

Em casos como esse, queremos adicionar filtros adicionais. O segundo parâmetro passado é o callback mangle_url. Recomendamos não usar este filtro diretamente. Em vez disso, use o método Domain_Mapping::apply_mapping_to_url.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | O callable de mangle. |
| $domain_mapper | `self` | Este objeto. |

### Since

- 2.0.0

### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
