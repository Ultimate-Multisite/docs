---
id: get_blogs_of_user
title: Сөзгеч - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Фильтр: get_blogs_of_user

Монда, ышанычлылык өчен, оригиналь WP Filter кабатлана.

Кулланучы кергән сайтлар исемлеген сөзә.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $sites | `object[]` | Кулланучыга караган сайт объектлары массивы. |
| $user_id | `int` | Кулланучы ID. |
| $all | `bool` | Кире кайтарылган сайтлар массивы барлык сайтларны, шул исәптән 'deleted', 'archived' яки 'spam' дип тамгаланганнарны да, үз эченә алырга тиешме. Килешү буенча false. |

### Чыгарылыштан башлап

- 2.0.11
### Чыганак

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) эчендә 851 нче юлда билгеләнгән.
