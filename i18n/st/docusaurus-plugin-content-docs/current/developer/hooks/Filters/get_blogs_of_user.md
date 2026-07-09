---
id: get_blogs_of_user
title: Sefe - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Sefe: get_blogs_of_user {#filter-getblogsofuser}

E etsisa WP Filter ya mantlha mona, bakeng sa bonnete.

E sefa lenane la disaete tseo mosebedisi a leng ho tsona.

## Dipharamethara {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $sites | `object[]` | Letoto la di-object tsa saete tse leng tsa mosebedisi. |
| $user_id | `int` | ID ya mosebedisi. |
| $all | `bool` | Hore na letoto la disaete tse kgutliswang le lokela ho ba le disaete tsohle, ho kenyeletswa tse tshwailweng e le 'deleted', 'archived', kapa 'spam'. Ya kamehla ke false. |

### Ho tloha {#since}

- 2.0.11
### Mohlodi {#source}

E hlalositswe ho [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) moleng wa 851
