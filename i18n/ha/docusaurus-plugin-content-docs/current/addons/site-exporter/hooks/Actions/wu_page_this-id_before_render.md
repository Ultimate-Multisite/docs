---
id: wu_page_this-id_before_render
title: 'Aiki - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Yana faruwa kafin a nuna wani takamaiman shafi.

Amfani: Ana bukatar a maye gurbin sashen dynamic da sahihin id na shafi, misali add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Sigogi

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id na shafin. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Misalin Base Admin Page. |

### Tun daga

- 1.8.2
### Tushe

An ayyana a cikin [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) a layi na 368
