---
id: wu_page_this-id_after_render
title: 'Aksi - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Dipicu setelah halaman tertentu selesai dirender.

Penggunaan: Bagian dinamis ini perlu diganti dengan ID halaman yang valid, contohnya: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID halaman tersebut. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance Halaman Admin Dasar. |

### Sejak

- 1.8.2
### Sumber

Didefinisikan dalam [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) pada baris 394
