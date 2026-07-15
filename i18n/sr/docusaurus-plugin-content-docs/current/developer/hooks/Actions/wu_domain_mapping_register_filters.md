---
id: wu_domain_mapping_register_filters
title: Радња - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Неки plugin-и ће сачувати URL пре него што је мапирање било активно или ће градити URL-ове на другачији начин који није укључен у горње филтере.

У таквим случајевима желимо да додамо додатне филтере. Други прослеђени параметар је mangle_url callback. Не препоручујемо директно коришћење овог филтера. Уместо тога, користите метод Domain_Mapping::apply_mapping_to_url.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | Овај објекат. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) у реду 530
