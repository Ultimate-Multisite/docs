---
id: wu_page_added
title: Tindakan - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Membenarkan pembangun plugin untuk menjalankan fungsi tambahan apabila halaman didaftarkan.

Tidak seperti `wu_page_load`, yang hanya berjalan apabila halaman tertentu sedang dilihat, hook ini berjalan semasa pendaftaran untuk setiap halaman admin yang ditambah menggunakan kod WP Ultimo.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID halaman ini. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook yang dijana untuk halaman ini. |

### Since {#since}

- 2.0.0
### Source {#source}

Ditakrifkan dalam [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) pada baris 203
