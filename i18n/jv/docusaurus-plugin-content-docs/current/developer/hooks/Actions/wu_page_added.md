---
id: wu_page_added
title: Aksi - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Ngidini pangembang plugin mbukak perkara tambahan nalika kaca didaftarake.

Beda karo wu_page_load, sing mung mlaku nalika kaca tartamtu lagi dideleng, hook iki mlaku nalika registrasi kanggo saben kaca admin sing ditambahake nganggo kode Ultimate Multisite.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $page_id | `string` | ID saka kaca iki. |
| $page_hook | `string` | Jeneng hook saka kaca iki. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepake ing [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ing baris 228
