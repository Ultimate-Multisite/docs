---
id: wu_magic_link_enforce_ip
title: Saringan - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Saringan: wu_magic_link_enforce_ip

Nemtokake apa verifikasi alamat IP kudu ditrapake.

Setel dadi false supaya token bisa digunakake saka jaringan sing beda. Iki nyuda keamanan nanging nambah kagunaan (contone, kanggo pangguna seluler sing ngalih jaringan).

## Paramèter

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $enforce | `bool` | Apa kudu ngetrapake pencocokan alamat IP. |

### Wiwit

- 2.0.0
### Sumber

Ditetepake ing [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) ing baris 422
