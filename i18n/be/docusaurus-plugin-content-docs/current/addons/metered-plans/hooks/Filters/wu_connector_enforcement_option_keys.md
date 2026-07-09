---
id: wu_connector_enforcement_option_keys
title: Фільтр - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Фільтруе спіс ключаў настаўленняў (option keys) пастаўшчыка AI, якія ўводзяцца з галоўнага сайта.

Додавайце ключы настаўленняў для карыстальніцкіх або сторонніх плагінаў пастаўшчыкоў AI, каб іх настаўленні таксама спадчываліся з галоўнага сайта на субсайтах.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $keys | `string[]` | Назвавыя ключы настаўленняў, якія трэба ўводзіць (ужо ўключае выяўленыя ключы канектара і EXTRA_PROVIDER_OPTIONS). |

### З {#since}

- 1.2.0
### Вынікнення {#source}

Вызначаны ў [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) у 206-й кропцы
