---
id: wu_connector_enforcement_option_keys
title: Филтер - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Филтрирајте листу кључева опција AI провајдера који се принудно примењују са главног сајта.

Додајте кључеве опција за прилагођене или независне plugin-ове AI провајдера како би се њихова подешавања такође наслеђивала са главног сајта на подсајтовима.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Називи кључева опција за принудну примену (већ укључује динамички откривене кључеве конектора и EXTRA_PROVIDER_OPTIONS). |

### Од верзије {#since}

- 1.2.0
### Извор {#source}

Дефинисано у [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) у реду 206
