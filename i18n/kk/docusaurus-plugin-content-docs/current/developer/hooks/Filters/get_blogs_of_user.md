---
id: get_blogs_of_user
title: Сүзгі - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Сүзгі: get_blogs_of_user {#filter-getblogsofuser}

Мұнда бастапқы WP Filter-ді сенімділік үшін қайталайды.

Пайдаланушы тиесілі сайттар тізімін сүзеді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $sites | `object[]` | Пайдаланушыға тиесілі сайт объектілерінің массиві. |
| $user_id | `int` | Пайдаланушы ID-і. |
| $all | `bool` | Қайтарылатын сайттар массивінде барлық сайттар, соның ішінде 'deleted', 'archived' немесе 'spam' деп белгіленгендері де болуы керек пе. Әдепкі мәні false. |

### Бастап {#since}

- 2.0.11
### Дереккөзі {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ішінде 851-жолда анықталған.
