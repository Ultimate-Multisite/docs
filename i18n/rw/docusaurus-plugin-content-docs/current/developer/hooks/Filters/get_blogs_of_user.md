---
id: get_blogs_of_user
title: Akayunguruzo - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Muyunguruzi: get_blogs_of_user {#filter-getblogsofuser}

Isubiramo WP Filter y’umwimerere hano, kugira ngo bibe byiza.

Iyungurura urutonde rwa site umukoresha abarizwamo.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $sites | `object[]` | Urutonde rw’ibintu bya site by’umukoresha. |
| $user_id | `int` | ID y’umukoresha. |
| $all | `bool` | Niba urutonde rwa site rusubizwa rugomba kuba rurimo site zose, harimo izashyizweho ikimenyetso cya 'deleted', 'archived', cyangwa 'spam'. Mburabuzi ni false. |

### Kuva {#since}

- 2.0.11
### Inkomoko {#source}

Byasobanuwe muri [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ku murongo wa 851
