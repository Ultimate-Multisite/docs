---
id: get_blogs_of_user
title: Sal-anan - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Gisubli dinhi ang orihinal nga WP Filter, alang sa kasigurohan.

Gisala ang lista sa mga site nga apil ang usa ka user.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $sites | `object[]` | Usa ka array sa mga object sa site nga iya sa user. |
| $user_id | `int` | User ID. |
| $all | `bool` | Kung ang gibalik nga array sa mga site kinahanglan bang maglakip sa tanang site, lakip kadtong gimarkahan nga 'deleted', 'archived', o 'spam'. Default false. |

### Sukad {#since}

- 2.0.11
### Gigikanan {#source}

Gihubit sa [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) sa linya 851
