---
id: wu_domain_mapping_register_filters
title: Аракет - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Айрым plugin-дер mapping активдүү болгонго чейин URL сактап коёт же жогорудагы фильтрлерге кирбеген башка ыкма менен URL түзөт.

Мындай учурларда биз кошумча фильтрлерди кошкубуз келет. Өткөрүлгөн экинчи параметр — mangle_url callback. Бул фильтрди түз колдонбоону сунуштайбыз. Анын ордуна Domain_Mapping::apply_mapping_to_url методун колдонуңуз.

## Параметрлер

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | Бул объект. |

### Баштап

- 2.0.0
### Булак

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ичинде 530-сапта аныкталган
