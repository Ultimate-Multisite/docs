---
id: get_blogs_of_user
title: Sía - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Sía: get_blogs_of_user {#filter-getblogsofuser}

Endurtekur upprunalegu WP-síuna hér, til öryggis.

Síar listann yfir vefi sem notandi tilheyrir.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $sites | `object[]` | Fylki af vefhlutum sem tilheyra notandanum. |
| $user_id | `int` | Notandaauðkenni. |
| $all | `bool` | Hvort skilaða vefjafylkið ætti að innihalda alla vefi, þar á meðal þá sem eru merktir 'deleted', 'archived' eða 'spam'. Sjálfgefið false. |

### Frá útgáfu {#since}

- 2.0.11
### Uppruni {#source}

Skilgreint í [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) í línu 851
