---
id: wu_page_added
title: Aksi - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Memungkinkan pengembang plugin menjalankan kode tambahan saat halaman didaftarkan.

Berbeda dengan `wu_page_load`, yang hanya berjalan saat halaman tertentu sedang dilihat, hook ini berjalan saat pendaftaran untuk setiap halaman admin yang ditambahkan menggunakan kode WP Ultimo.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID dari halaman ini. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook yang dibuat untuk halaman ini. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) pada baris 203
