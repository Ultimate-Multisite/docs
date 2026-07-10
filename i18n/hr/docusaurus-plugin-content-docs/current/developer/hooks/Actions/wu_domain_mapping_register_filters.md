---
id: wu_domain_mapping_register_filters
title: Akcija - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Neki plugini spremit će URL prije nego što je mapiranje bilo aktivno ili će izgraditi URL-ove na drukčiji način koji nije uključen u gore navedene filtere.

U takvim slučajevima želimo dodati dodatne filtere. Drugi proslijeđeni parametar je mangle_url callback. Ne preporučujemo izravno korištenje ovog filtera. Umjesto toga, upotrijebite metodu Domain_Mapping::apply_mapping_to_url.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Mangle callable. |
| $domain_mapper | `self` | Ovaj objekt. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na retku 530
