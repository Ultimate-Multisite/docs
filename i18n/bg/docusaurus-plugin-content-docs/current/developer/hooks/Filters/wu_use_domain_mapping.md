---
id: wu_use_domain_mapping
title: Филтър - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Определете дали трябва да се използва мапинг

Обикновено искате да позволите само активните мапинги. Въпреки това, ако искате да използвате по-сложна логика или да позволите мапинг на неактивни домейни, просто филтрирайте тук.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Трябва ли мапингът да бъде третиран като активен? |
| $mapping | `\Domain` | Мапингът, който изследваме |
| $domain | `string` | |

### Източник

Дефиниран в [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) на ред 391
