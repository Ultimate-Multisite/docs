---
id: wu_page_load
title: Tindakan - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

Membenarkan pembangun plugin untuk menambah *hook* tambahan pada halaman kami.

## Parameter

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID halaman ini. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | *Hook* yang dijana untuk halaman ini. |

### Sejak

- 1.8.2
### Sumber

Didefinisikan dalam [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) pada baris 289
