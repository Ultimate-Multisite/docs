---
id: wu_domain_mapping_register_filters
title: Ação - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Ação: wu_domain_mapping_register_filters

Alguns plugins irão guardar o URL antes de o mapeamento estar ativo ou irão criar URLs de uma forma diferente que não está incluída nos filtros acima.

Em casos como esse, queremos adicionar filtros adicionais. O segundo parâmetro passado é o callback mangle_url. Recomendamos não usar este filtro diretamente. Em vez disso, use o método Domain_Mapping::apply_mapping_to_url.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $mangle_url | `callable` | O callable mangle. |
| $domain_mapper | `self` | Este objeto. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na linha 530
