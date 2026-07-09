---
id: wu_page_added
title: Tindakan - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Membolehkan pembangun plugin menjalankan fungsi tambahan apabila halaman didaftarkan.

Berbeza dengan `wu_page_load`, yang hanya akan berjalan apabila halaman tertentu sedang dilihat, hook ini berjalan semasa pendaftaran untuk setiap halaman admin yang ditambah menggunakan kod Ultimate Multisite.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID halaman ini. |
| $page_hook | `string` | Nama hook halaman ini. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
