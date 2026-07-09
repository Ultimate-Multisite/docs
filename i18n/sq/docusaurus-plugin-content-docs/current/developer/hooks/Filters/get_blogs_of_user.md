---
id: get_blogs_of_user
title: Filtër - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtër: get_blogs_of_user {#filter-getblogsofuser}

Riprodhon WP Filter origjinal këtu, për siguri.

Filtron listën e sajteve ku bën pjesë një përdorues.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $sites | `object[]` | Një varg objektesh sajtesh që i përkasin përdoruesit. |
| $user_id | `int` | ID-ja e përdoruesit. |
| $all | `bool` | Nëse vargu i sajteve të kthyera duhet të përmbajë të gjitha sajtet, përfshirë ato të shënuara si 'deleted', 'archived' ose 'spam'. Parazgjedhja është false. |

### Që nga {#since}

- 2.0.11
### Burimi {#source}

Përcaktuar në [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) në rreshtin 851
