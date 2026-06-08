---
id: wu_admin_notices
title: Фільтр - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Фільтр: wu_admin_notices

Дозволяє розробникам фільтрувати сповіщення адміністратора, додані Ultimate Multisite.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | Список сповіщень для конкретної панелі. |
| $all_notices | `array` | Список доданих сповіщень, розділений за панелями. |
| $panel | `string` | Панель для отримання сповіщень. |
| $filter | `string` | Чи були відфільтровані сповіщення, які можна закрити. |
| $dismissed_messages | `array` | Список ключів сповіщень, які було відхилено. |

### З версії

- 2.0.0
### Джерело

Визначено в [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) на рядку 121


## Повертає
