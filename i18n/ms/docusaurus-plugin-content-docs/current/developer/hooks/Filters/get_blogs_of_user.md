---
id: get_blogs_of_user
title: Penapis - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Ini meniru Filter WP asal di sini, sebagai langkah berjaga-jaga.

Menapis senarai tapak (sites) yang dimiliki oleh pengguna tersebut.

## Parameters {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $sites | `object[]` | Satu tatasusunan (array) objek tapak yang dimiliki oleh pengguna. |
| $user_id | `int` | ID Pengguna. |
| $all | `bool` | Sama ada tatasusunan tapak yang dikembalikan perlu mengandungi semua tapak, termasuk yang ditandakan 'deleted', 'archived', atau 'spam'. Lalai (default) adalah palsu (false). |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
