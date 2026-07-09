---
id: wu_use_domain_mapping
title: Фільтр - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Фільтр: wu_use_domain_mapping {#filter-wuusedomainmapping}

Визначає, чи слід використовувати мапування

Зазвичай ви захочете дозволити використовувати лише активні мапування. Однак, якщо ви хочете застосувати більш складну логіку або дозволити мапувати й неактивні домени, просто відфільтруйте це тут.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Чи слід вважати мапування активним? |
| $mapping | `\Domain` | Мапування, яке ми перевіряємо |
| $domain | `string` |  |

### Джерело {#source}

Визначено в [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) на рядку 391
