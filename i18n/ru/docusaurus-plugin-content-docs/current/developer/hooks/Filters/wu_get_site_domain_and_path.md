---
id: wu_get_site_domain_and_path
title: Фильтр - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Позволяет разработчикам манипулировать парами домен/путь.

Это может быть полезно для ряда задач, например, реализации решения для промежуточного тестирования, разных серверов и т.д.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Текущий объект, содержащий ключи домена и пути. |
| $path_or_subdomain | `string` | Оригинальный путь/поддомен, переданный в функцию. |

### Since

- 2.0.0

### Source

Определено в [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) на строке 235

## Returns

Объект, содержащий ключи домена и пути.
