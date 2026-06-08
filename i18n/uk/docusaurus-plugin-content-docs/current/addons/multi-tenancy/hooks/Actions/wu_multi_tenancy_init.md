---
id: wu_multi_tenancy_init
title: Action - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Дія: wu_multi_tenancy_init

Виконується після того, як додаток для багатоорендності буде повністю ініціалізовано.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | Екземпляр додатку. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ є стандартним префіксом для WP Ultimo. |

### Починаючи з

- 1.0.0
### Джерело

Визначено у [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) на рядку 124
