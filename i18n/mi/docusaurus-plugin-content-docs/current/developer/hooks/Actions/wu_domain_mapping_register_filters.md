---
id: wu_domain_mapping_register_filters
title: Hohenga - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Ka tiaki ētahi mono i te URL i mua i te whakahohe o te maherenga, ka waihanga rānei i ngā URL mā tētahi āhua rerekē kāore i whakaurua ki ngā tātari o runga ake nei.

I ngā āhuatanga pēnei, e hiahia ana mātou ki te tāpiri tātari anō. Ko te tawhā tuarua ka tukuna ko te callback mangle_url. Ka tūtohu mātou kia kaua e whakamahi tōtika i tēnei tātari. Engari, whakamahia te tikanga Domain_Mapping::apply_mapping_to_url.

## Ngā tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $mangle_url | `callable` | Te callable mangle. |
| $domain_mapper | `self` | Tēnei ahanoa. |

### Mai i

- 2.0.0
### Pūtake

Kua tautuhia ki [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) i te rārangi 530
