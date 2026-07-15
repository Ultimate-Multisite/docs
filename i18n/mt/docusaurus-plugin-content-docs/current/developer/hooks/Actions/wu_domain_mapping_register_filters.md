---
id: wu_domain_mapping_register_filters
title: Azzjoni - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Azzjoni: wu_domain_mapping_register_filters

Xi plugins isalvaw URL qabel ma l-mapping ikun attiv jew jibnu URLs b’mod differenti li mhuwiex inkluż fil-filters ta’ hawn fuq.

F’każijiet bħal dawn, irridu nżidu filters addizzjonali. It-tieni parametru mgħoddi huwa l-callback mangle_url. Nirrakkomandaw li ma tużax dan il-filter direttament. Minflok, uża l-metodu Domain_Mapping::apply_mapping_to_url.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $mangle_url | `callable` | Il-mangle callable. |
| $domain_mapper | `self` | Dan l-oġġett. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Iddefinit f’[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) fil-linja 530
