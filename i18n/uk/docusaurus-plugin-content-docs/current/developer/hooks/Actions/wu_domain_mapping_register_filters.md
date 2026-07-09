---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Деякі плагіни можуть зберігати URL-адреси до того, як мапування було активним, або будувати URL-адреси інакше, ніж це включено у вищезгадані фільтри.

У таких випадках ми хочемо додати додаткові фільтри. Другий переданий параметр — це callback `mangle_url`. Ми не рекомендуємо використовувати цей фільтр напряму. Натомість використовуйте метод `Domain_Mapping::apply_mapping_to_url`.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Функція зворотного виклику `mangle`. |
| $domain_mapper | `self` | Цей об'єкт. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) на рядку 530
