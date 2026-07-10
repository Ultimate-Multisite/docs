---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Bu, əsl WP Filter-in funksionallığını təmin etmək üçün bura əlavə edilmişdir.

Bir istifadəçiyə aid olan saytların siyahısını filtrləyir.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $sites | `object[]` | İstifadəçiyə aid sayt obyektlərinin massivi. |
| $user_id | `int` | İstifadəçi ID-si. |
| $all | `bool` | Qaytarılan saytlar massivinin 'silinmiş', 'arxivlənmiş' və ya 'spam' kimi işarələnmiş bütün saytları ehtiva edib etməməsi. Varsayılan dəyər: false. |

### Nə vaxtdan {#since}

- 2.0.11
### Mənbə {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) faylında 851-ci sətirdə təyin edilmişdir.
