---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Bir eşləşdirmənin (mapping) istifadə edilməli olub-olmaması haqqında qərar verin

Adətən, yalnız aktiv eşləşdirmələrin istifadə edilməsinə icazə vermək istəyirsiniz. Lakin, daha mürəkkəb bir məntiq istifadə etmək və ya aktiv olmayan domenlərin də eşləşdirilməsinə icazə vermək istəyirsinizsə, sadəcə buradan filtre edin.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Eşləşdirmə aktiv kimi qəbul edilməlidirmi? |
| $mapping | `\Domain` | Yoxladığımız eşləşdirmə |
| $domain | `string` | |

### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) faylında 391-ci sətirdə təyin edilmişdir.
