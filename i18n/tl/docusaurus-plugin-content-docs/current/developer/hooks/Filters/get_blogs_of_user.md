---
id: get_blogs_of_user
title: Pansala - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Ginagaya rito ang orihinal na WP Filter, para sa katiyakan.

Sinasala ang listahan ng mga website na kinabibilangan ng isang gumagamit.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $sites | `object[]` | Isang array ng mga object ng website na pag-aari ng gumagamit. |
| $user_id | `int` | ID ng gumagamit. |
| $all | `bool` | Kung dapat maglaman ang ibinalik na array ng mga website ng lahat ng website, kabilang ang mga minarkahang 'deleted', 'archived', o 'spam'. Default false. |

### Mula noong {#since}

- 2.0.11
### Pinagmulan {#source}

Tinukoy sa [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) sa linya 851
