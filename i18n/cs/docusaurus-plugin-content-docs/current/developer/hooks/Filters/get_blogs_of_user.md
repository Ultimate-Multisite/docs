---
id: get_blogs_of_user
title: Filtrační funkce - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Zkopíruje původní WP Filter pro jistotu.

Filtruje seznam webových stránek, ke kterým uživatel patří.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $sites | `object[]` | Pole objektů webových stránek, ke kterým uživatel patří. |
| $user_id | `int` | ID uživatele. |
| $all | `bool` | Zda má vrácené pole webových stránek obsahovat všechny webové stránky, včetně těch označených jako 'deleted', 'archived' nebo 'spam'. Výchozí hodnota je false. |

### Od {#since}

- 2.0.11
### Zdroj {#source}

Definováno v [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) na řádku 851
