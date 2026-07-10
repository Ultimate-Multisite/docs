---
id: get_blogs_of_user
title: Isihlungi - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Isihlungi: get_blogs_of_user {#filter-getblogsofuser}

Siphinda i-WP Filter yasekuqaleni lapha, ukuze kuqinisekiswe.

Sihlunga uhlu lwamasayithi umsebenzisi ayingxenye yawo.

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $sites | `object[]` | I-array yezinto zamasayithi ezingezomsebenzisi. |
| $user_id | `int` | I-ID yomsebenzisi. |
| $all | `bool` | Ukuthi i-array yamasayithi ebuyiswayo kufanele iqukathe wonke amasayithi, kuhlanganise nalawo amakwe ngokuthi 'deleted', 'archived', noma 'spam'. Okuzenzakalelayo ngu-false. |

### Kusukela {#since}

- 2.0.11
### Umthombo {#source}

Kuchazwe ku-[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) emugqeni 851
