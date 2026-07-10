---
id: wu_connector_enforcement_option_keys
title: Филтър - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Филтрира списъка от ключове за настройки на доставчици на AI, които се налагат от основния сайт.

Добавя ключове за настройки за персонализирани или трети страни AI доставчици, така че техните настройки също да се наследяват от основния сайт в подсайтовете.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Имена на ключове за настройки, които да се приложат (вече включва динамично откритите ключове на свързващи модули и EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
