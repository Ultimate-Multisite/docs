---
id: wu_page_get_title_links
title: Filter - wu_page_get_title_links
sidebar_label: wu_page_get_title_links
_i18n_hash: c0ede349078aea8e4fe06e53a12b1c38
---
# Filter: wu_page_get_title_links {#filter-wupagegettitlelinks}

Memungkinkan pengembang plugin, dan kami sendiri, untuk menambahkan tautan aksi ke halaman edit kami.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $action_links | `array\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tautan aksi yang akan ditambahkan. |
| $base_admin_page | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instansi ini. |

### Sejak {#since}

- 1.8.2
### Sumber {#source}

Didefinisikan di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L646) pada baris 646


## Mengembalikan {#returns}
Array tautan aksi.
