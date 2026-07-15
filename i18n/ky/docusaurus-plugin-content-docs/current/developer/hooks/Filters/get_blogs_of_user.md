---
id: get_blogs_of_user
title: Фильтр - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Керек болуп калсын деп, бул жерде баштапкы WP Filter кайталанат.

Колдонуучу таандык болгон сайттардын тизмесин чыпкалайт.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $sites | `object[]` | Колдонуучуга таандык сайт объекттеринин массиви. |
| $user_id | `int` | Колдонуучунун ID'си. |
| $all | `bool` | Кайтарылган сайттар массиви бардык сайттарды, анын ичинде 'deleted', 'archived' же 'spam' деп белгиленгендерди да камтышы керекпи. Баштапкы мааниси false. |

### Баштап {#since}

- 2.0.11
### Булак {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ичинде 851-сапта аныкталган.
