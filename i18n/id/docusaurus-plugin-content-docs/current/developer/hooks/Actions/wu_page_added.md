---
id: wu_page_added
title: Aksi - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Hook ini memungkinkan pengembang plugin untuk menjalankan fungsi tambahan ketika halaman-halaman didaftarkan.

Berbeda dengan `wu_page_load`, yang hanya berjalan ketika halaman tertentu sedang dilihat, hook ini berjalan saat pendaftaran untuk setiap halaman admin yang ditambahkan menggunakan kode Ultimate Multisite.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID dari halaman ini. |
| $page_hook | `string` | Nama hook dari halaman ini. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
