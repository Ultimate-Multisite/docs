---
id: wu_domain_mapping_register_filters
title: Gníomh - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Gníomh: wu_domain_mapping_register_filters

Sábhálfaidh roinnt breiseán URL sula raibh an mhapáil gníomhach, nó tógfaidh siad URLanna ar bhealach difriúil nach bhfuil san áireamh sna scagairí thuas.

I gcásanna mar sin, ba mhaith linn scagairí breise a chur leis. Is é an dara paraiméadar a chuirtear ar aghaidh ná aisghlao mangle_url. Molaimid gan an scagaire seo a úsáid go díreach. Ina ionad sin, úsáid modh Domain_Mapping::apply_mapping_to_url.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $mangle_url | `callable` | An callable mangle. |
| $domain_mapper | `self` | An réad seo. |

### Ó

- 2.0.0
### Foinse

Sainithe in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ag líne 530
