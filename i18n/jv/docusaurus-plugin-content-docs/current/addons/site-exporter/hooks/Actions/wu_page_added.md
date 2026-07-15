---
id: wu_page_added
title: Aksi - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Ngidini pangembang tambahan kanggo nglakokake perkara tambahan nalika kaca didaftar.

Ora kaya wu_page_load, sing mung mlaku nalika kaca tartamtu lagi dideleng, hook iki mlaku nalika registrasi kanggo saben kaca admin sing ditambahake nganggo kode WP Ultimo.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID saka kaca iki. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook sing digawé kanggo kaca iki. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditentokaké ing [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ing larik 203
