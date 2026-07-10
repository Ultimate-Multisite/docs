---
id: get_blogs_of_user
title: Filtrum - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtrum: get_blogs_of_user {#filter-getblogsofuser}

Filtrum originale WP hic replicat, maioris cautelae causa.

Filtrat indicem sitorum quibus usor pertinet.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $sites | `object[]` | Series obiectorum situs ad usorem pertinentium. |
| $user_id | `int` | ID usoris. |
| $all | `bool` | Utrum series sitorum reddita omnia sita continere debeat, etiam ea quae 'deleted', 'archived', aut 'spam' notata sunt. Praedefinitum false. |

### Ab {#since}

- 2.0.11
### Fons {#source}

Definitum in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ad lineam 851
