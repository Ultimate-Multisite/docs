---
id: get_blogs_of_user
title: Филтър - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Репликира оригиналния WP Филтър тук, за сигурност.

Филтрира списъка от сайтове, към които потребителят принадлежи.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $sites | `object[]` | Масив от обекти на сайтове, към които потребителят принадлежи. |
| $user_id | `int` | ID на потребителя. |
| $all | `bool` | Дали масивът от върнати сайтове трябва да съдържа всички сайтове, включително тези, маркирани като 'deleted', 'archived' или 'spam'. По подразбиране е false. |

### От {#since}

- 2.0.11
### Източник {#source}

Дефиниран в [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) на ред 851
