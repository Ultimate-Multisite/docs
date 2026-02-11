---
id: wu_domain_mapping_register_filters
title: Действие - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Некоторые плагины сохраняют URL до того, как маппинг был активен, или строят URL другим способом, который не включён в вышеуказанные фильтры.

В таких случаях мы хотим добавить дополнительные фильтры. Второй передаваемый параметр — это обратный вызов `mangle_url`. Мы не рекомендуем использовать этот фильтр напрямую. Вместо этого используйте метод `Domain_Mapping::apply_mapping_to_url`.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Вызовемый объект. |
| $domain_mapper | `self` | Этот объект. |

### Since

- 2.0.0

### Source

Определено в [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) на строке 530
