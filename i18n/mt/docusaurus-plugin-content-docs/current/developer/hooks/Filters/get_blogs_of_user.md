---
id: get_blogs_of_user
title: Filtru - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Jirreplika l-WP Filter oriġinali hawnhekk, għal raġuni tajba.

Jiffiltra l-lista ta' siti li utent jappartjeni għalihom.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Array ta' oġġetti ta' siti li jappartjenu lill-utent. |
| $user_id | `int` | ID tal-utent. |
| $all | `bool` | Jekk l-array tas-siti rritornat għandux ikun fih is-siti kollha, inklużi dawk immarkati bħala 'deleted', 'archived', jew 'spam'. Default false. |

### Minn {#since}

- 2.0.11
### Sors {#source}

Iddefinit f’[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) fil-linja 851
