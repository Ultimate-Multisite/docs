---
id: wu_get_site_domain_and_path
title: Фільтр - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Фільтр: wu_get_site_domain_and_path

Дозволяє розробникам маніпулювати парами домен/шлях.

Це може бути корисно для низки завдань, наприклад, для впровадження якогось рішення для стейджингу, використання різних серверів тощо.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Поточний об'єкт, що містить ключі домену та шляху. |
| $path_or_subdomain | `string` | Оригінальний шлях/піддомен, переданий у функцію. |

### Since

- 2.0.0
### Source

Визначено в [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) на рядку 235


## Returns
Об'єкт, що містить ключі домену та шляху.
