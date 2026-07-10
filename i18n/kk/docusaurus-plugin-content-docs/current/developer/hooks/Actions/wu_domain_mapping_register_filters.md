---
id: wu_domain_mapping_register_filters
title: Әрекет - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Әрекет: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Кейбір plugin-дер URL-ді mapping белсенді болғанға дейін сақтайды немесе URL-дерді жоғарыдағы filter-лерге кірмейтін басқа тәсілмен құрастырады.

Осындай жағдайларда біз қосымша filter-лер қосуды қалаймыз. Берілетін екінші parameter — mangle_url callback. Бұл filter-ді тікелей қолданбауды ұсынамыз. Оның орнына Domain_Mapping::apply_mapping_to_url method-ын қолданыңыз.

## Parameter-лер {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | Осы object. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ішінде 530-жолда анықталған
