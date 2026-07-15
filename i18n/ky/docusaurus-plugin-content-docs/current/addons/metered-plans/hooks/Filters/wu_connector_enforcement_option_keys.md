---
id: wu_connector_enforcement_option_keys
title: Чыпка - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Негизги сайттан мажбурлап колдонулуучу AI провайдеринин option ачкычтарынын тизмесин чыпкалоо.

Ыңгайлаштырылган же үчүнчү тарап AI провайдер plugin'дери үчүн option ачкычтарын кошуңуз, ошондо алардын орнотуулары да субсайттарда негизги сайттан мурасталат.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $keys | `string[]` | Мажбурлап колдонулуучу option ачкыч аттары (буга динамикалык түрдө табылган connector ачкычтары жана EXTRA_PROVIDER_OPTIONS мурунтан эле кирет). |

### Версиядан бери {#since}

- 1.2.0
### Булак {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) ичинде 206-сапта аныкталган.
