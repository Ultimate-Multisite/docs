---
id: wu_page_this-id_load
title: 'Aksi - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Memungkinkan pengembang plugin untuk menambahkan hook tambahan ke halaman tertentu.

Penggunaan: Bagian dinamis ini perlu diganti dengan ID halaman yang valid, misalnya: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID dari halaman ini. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook yang dihasilkan untuk halaman ini. |

### Sejak {#since}

- 1.8.2
### Sumber {#source}

Didefinisikan di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) pada baris 301
