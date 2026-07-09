---
id: wu_connector_enforcement_option_keys
title: Фильтр - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Фильтр: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Фильтрует список ключей настроек (option keys) провайдеров ИИ, которые принудительно применяются с основного сайта.

Позволяет добавить ключи настроек для кастомных или сторонних плагинов провайдеров ИИ, чтобы их настройки также наследовывались с основного сайта на дочерние сайты.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Массив имен ключей настроек, которые нужно принудительно применять (уже включает динамически обнаруженные ключи коннекторов и EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Определен в [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) в строке 206
