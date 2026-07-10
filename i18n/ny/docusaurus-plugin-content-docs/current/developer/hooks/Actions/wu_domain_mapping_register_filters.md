---
id: wu_domain_mapping_register_filters
title: Chochita - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Zochita: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Ma plugin ena adzasunga URL mapping isanakhale yogwira ntchito kapena adzapanga ma URL m'njira yosiyana yomwe siyikuphatikizidwa mu ma filter ali pamwambawa.

M'mikhalidwe ngati imeneyo, tikufuna kuwonjezera ma filter ena. Parameter yachiwiri yoperekedwa ndi callback ya mangle_url. Tikulangiza kuti musagwiritse ntchito filter iyi mwachindunji. M'malo mwake, gwiritsani ntchito njira ya Domain_Mapping::apply_mapping_to_url.

## Ma Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Callable ya mangle. |
| $domain_mapper | `self` | Object iyi. |

### Kuyambira {#since}

- 2.0.0
### Gwero {#source}

Yafotokozedwa mu [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) pa mzere 530
