---
id: get_blogs_of_user
title: Saringan - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Saringan: get_blogs_of_user {#filter-getblogsofuser}

Niron WP Filter asli ing kene, kanggo jaga-jaga.

Nyaring dhaptar situs sing dadi kagungane pangguna.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $sites | `object[]` | Larik obyek situs sing dadi kagungane pangguna. |
| $user_id | `int` | ID pangguna. |
| $all | `bool` | Apa larik situs sing dibalekake kudu ngemot kabeh situs, kalebu sing ditandhani 'deleted', 'archived', utawa 'spam'. Gawané false. |

### Wiwit {#since}

- 2.0.11
### Sumber {#source}

Ditetepake ing [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ing baris 851
