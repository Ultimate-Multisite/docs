---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Ginagaya nito ang orihinal na WP Filter dito, para masigurado.

Sinusala nito ang listahan ng mga site na kabilang sa isang user.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Isang array ng mga site object na pag-aari ng user. |
| $user_id | `int` | User ID. |
| $all | `bool` | Kung ang ibabalik na array ng sites ay dapat maglalaman ng lahat ng sites, kasama na ang mga minarkahang 'deleted', 'archived', o 'spam'. Default: false. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
