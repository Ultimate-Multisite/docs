---
id: wu_connector_enforcement_option_keys
title: Фільтр - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Фільтр: wu_connector_enforcement_option_keys

Фільтрує список ключів налаштувань (option keys) провайдерів ШІ, які застосовуються з головного сайту.

Додайте ключі налаштувань для кастомних або сторонніх плагінів провайдерів ШІ, щоб їхні налаштування також успадковувалися з головного сайту на сабсайтах.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Імена ключів налаштувань, які потрібно застосувати (вже включає динамічно виявлені ключі коннекторів та EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Визначено в [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) на рядку 206
