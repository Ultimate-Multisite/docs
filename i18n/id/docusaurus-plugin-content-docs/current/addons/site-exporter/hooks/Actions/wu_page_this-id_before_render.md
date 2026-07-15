---
id: wu_page_this-id_before_render
title: 'Aksi - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

Dipicu sebelum merender halaman tertentu.

Penggunaan: Bagian dinamis perlu diganti dengan ID halaman yang valid, misalnya: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID dari halaman tersebut. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance Base Admin Page. |

### Sejak {#since}

- 1.8.2
### Sumber {#source}

Didefinisikan di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) pada baris 368
