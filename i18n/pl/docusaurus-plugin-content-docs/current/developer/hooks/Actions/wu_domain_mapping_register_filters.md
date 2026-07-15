---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Niektóre wtyczki mogą zapisywać adresy URL, zanim mapowanie było aktywne, lub mogą budować adresy URL w sposób, który nie jest uwzględniony w powyższych filtrach.

W takich przypadkach chcemy dodać dodatkowe filtry. Drugim parametrem, który jest przekazywany, jest callback `mangle_url`. Nie zalecamy używania tego filtra bezpośrednio. Zamiast tego, użyj metody `Domain_Mapping::apply_mapping_to_url`.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $mangle_url | `callable` | Callback do modyfikacji (mangle). |
| $domain_mapper | `self` | Ten obiekt. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na linii 530
