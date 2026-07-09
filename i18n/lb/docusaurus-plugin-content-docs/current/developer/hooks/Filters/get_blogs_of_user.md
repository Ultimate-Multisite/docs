---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Replizéiert den originelle WP Filter hei, fir Sécherheet.

Filtert d'Lëscht vun de Sitten, zu deenen e Benotzer gehéiert.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $sites | `object[]` | En Array vu Site-Objekter, déi zum Benotzer gehéieren. |
| $user_id | `int` | Benotzer-ID. |
| $all | `bool` | Ob den zeréckginnene Site-Array all Sitten enthalen soll, inklusiv deenen, déi als 'deleted', 'archived' oder 'spam' markéiert sinn. Standard false. |

### Zanter {#since}

- 2.0.11
### Quell {#source}

Definéiert an [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) op der Linn 851
