---
id: get_blogs_of_user
title: Фільтр - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Фільтр: get_blogs_of_user

Реалізує оригінальний WP Filter, для надійності.

Фільтрує список сайтів, до яких належить користувач.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Масив об'єктів сайтів, до яких належить користувач. |
| $user_id | `int` | ID користувача. |
| $all | `bool` | Чи має повернений масив сайтів містити всі сайти, включаючи позначені як 'deleted', 'archived' або 'spam'. За замовчуванням `false`. |

### Since {#since}

- 2.0.11
### Source {#source}

Визначено в [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) на рядку 851
