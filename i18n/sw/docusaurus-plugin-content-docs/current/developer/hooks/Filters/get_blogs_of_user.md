---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Hii inajirudia (replicates) Filter ya WP ya awali, kwa usalama.

Inachuja orodha ya tovuti ambazo mtumiaji anamiliki.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Ni safu (array) ya vitu vya tovuti (site objects) vinavyomiliki mtumiaji huyu. |
| $user_id | `int` | Kitambulisho cha mtumiaji (User ID). |
| $all | `bool` | Je, safu ya tovuti inayorejeshwa inapaswa kujumuisha tovuti zote, ikiwemo zile zilizotengwa ('deleted'), zilizohifadhiwa ('archived'), au za taka ('spam')? Kiwango cha awali ni 'false'. |

### Since {#since}

- 2.0.11
### Source {#source}

Imefafanuliwa katika [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) kwenye mstari wa 851
