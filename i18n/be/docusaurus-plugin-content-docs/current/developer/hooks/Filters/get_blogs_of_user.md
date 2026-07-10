---
id: get_blogs_of_user
title: Фільтр - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Паўтарэнне арыгінальнага WP Filter тут, для паўнаты.

Фільтруе спіс сайтаў, да якіх прыналежыць карыстальнік.

## Параметры {#parameters}

| Назва | Тып | Опісанне |
|------|------|-------------|
| $sites | `object[]` | Массив аб'ектаў сайтаў, да якіх прыналежыць карыстальнік. |
| $user_id | `int` | ID карыстальніка. |
| $all | `bool` | Ці павінен вяртаны масив сайтаў змяшчаць усе сайты, у тым ліку ў адпавіданні 'deleted', 'archived' або 'spam'. Па спільнага - `false`. |

### Since {#since}

- 2.0.11
### Source {#source}

Вызначаны ў [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) на 851-й кропцы
