---
id: wu_domain_mapping_register_filters
title: Гамәл - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Гамәл: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Кайбер plugin-нар URL-ны mapping актив булганчы саклаячак яки URL-ларны югарыдагы filters эченә кермәгән башка ысул белән төзиячәк.

Мондый очракларда без өстәмә filters өстәргә телибез. Тапшырылган икенче параметр — mangle_url callback. Без бу filter-ны турыдан-туры кулланмаска киңәш итәбез. Моның урынына Domain_Mapping::apply_mapping_to_url методын кулланыгыз.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | Бу объект. |

### Версиядән бирле {#since}

- 2.0.0
### Чыганак {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) эчендә 530 нчы юлда билгеләнгән
