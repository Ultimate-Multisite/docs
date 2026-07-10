---
id: wu_domain_mapping_register_filters
title: Akcija - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Neki pluginovi mogu sačuvati URL prije nego što je mapiranje bilo aktivno ili mogu kreirati URL-ove na drugačiji način koji nije pokriven gore navedenim filterima.

U takvim slučajevima, želiemo dodati dodatne filtere. Drugi proslijeđeni parametar je `mangle_url` callback. Preporučujemo da ne koristite ovaj filter direktno. Umjesto toga, koristite metodu `Domain_Mapping::apply_mapping_to_url`.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $mangle_url | `callable` | Callback za "mangle" operaciju. |
| $domain_mapper | `self` | Ovaj objekat. |

### Od {#since}

- 2.0.0
### Izvorni kod {#source}

Definisano u [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na liniji 530
