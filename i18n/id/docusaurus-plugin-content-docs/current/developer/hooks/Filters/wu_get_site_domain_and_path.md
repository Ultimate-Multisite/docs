---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Memungkinkan pengembang untuk memanipulasi pasangan domain/path.

Ini bisa berguna untuk berbagai hal, seperti menerapkan semacam solusi *staging*, server yang berbeda, dan lain-lain.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $d | `object` | Objek saat ini yang berisi kunci domain dan path. |
| $path_or_subdomain | `string` | Path/subdomain asli yang diteruskan ke fungsi. |

### Sejak

- 2.0.0
### Sumber

Didefinisikan di [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) pada baris 235.


## Mengembalikan
Sebuah objek yang berisi kunci domain dan path.
