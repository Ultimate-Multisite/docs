---
id: wu_domain_mapping_register_filters
title: Acción - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Acción: wu_domain_mapping_register_filters

Algúns plugins gardarán o URL antes de que o mapping estivese activo ou crearán URLs dun xeito diferente que non está incluído nos filtros anteriores.

En casos así, queremos engadir filtros adicionais. O segundo parámetro que se pasa é o callback mangle_url. Recomendamos non usar este filtro directamente. No seu lugar, usa o método Domain_Mapping::apply_mapping_to_url.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $mangle_url | `callable` | O callable mangle. |
| $domain_mapper | `self` | Este obxecto. |

### Desde

- 2.0.0
### Fonte

Definido en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na liña 530
