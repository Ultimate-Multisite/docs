---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Някои плагини ще запазят URL адреси преди мапингът да е активен или ще изграждат URL адреси по друг начин, който не е включен в горните филтри.

В такива случаи, искаме да добавим допълнителни филтри. Вторият предаващ параметър е `mangle_url` callback. Препоръчваме да не използвате този филтър директно. Вместо това, използвайте метода `Domain_Mapping::apply_mapping_to_url`.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $mangle_url | `callable` | Функцията за манглиране (mangle callable). |
| $domain_mapper | `self` | Този обект. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) на ред 530
