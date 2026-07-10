---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Menyaring URL pengalihan yang terjadi setelah sebuah domain ditetapkan sebagai domain utama.

Ini memungkinkan developer untuk menyesuaikan ke mana pengguna akan dialihkan setelah berhasil menetapkan domain sebagai domain utama. Secara *default*, pengalihan akan diarahkan ke URL saat ini di situs utama, atau ke URL admin dari situs yang sedang diubah.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $redirect_url | `string` | URL pengalihan *default*. Bisa berupa URL saat ini (jika situs utama) atau URL admin dari situs saat ini. |
| $current_site | `int` | ID situs yang domainnya sedang dijadikan utama. |
| $domain | `\Domain` | Objek domain yang telah dijadikan utama. |
| $old_primary_domains | `array` | Array ID domain yang sebelumnya sudah utama. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) pada baris 639


## Mengembalikan {#returns}
URL pengalihan yang sudah disaring.
