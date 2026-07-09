---
id: get_blogs_of_user
title: Saringan - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Saringan: get_blogs_of_user {#filter-getblogsofuser}

Ngareplikasi WP Filter aslina di dieu, pikeun leuwih merenah.

Nyaring daptar situs anu dipiboga ku hiji pamaké.

## Paraméter {#parameters}

| Ngaran | Tipe | Déskripsi |
|------|------|-------------|
| $sites | `object[]` | Hiji array objék situs anu dipiboga ku pamaké. |
| $user_id | `int` | ID pamaké. |
| $all | `bool` | Naha array situs anu dibalikeun kudu ngandung sakabéh situs, kaasup anu ditandaan 'deleted', 'archived', atawa 'spam'. Default false. |

### Ti saprak {#since}

- 2.0.11
### Sumber {#source}

Ditetepkeun dina [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) dina garis 851
