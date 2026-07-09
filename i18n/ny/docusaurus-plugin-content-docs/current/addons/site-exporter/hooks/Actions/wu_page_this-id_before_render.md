---
id: wu_page_this-id_before_render
title: 'Chochita - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Imayamba isanasonyeze tsamba lapadera.

Kagwiritsidwe: Gawo losintha liyenera kusinthidwa ndi id yovomerezeka ya tsamba, mwachitsanzo add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Ma Parameter

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id ya tsambalo. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance ya Base Admin Page. |

### Kuyambira

- 1.8.2
### Gwero

Yatanthauzidwa mu [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) pa mzere 368
