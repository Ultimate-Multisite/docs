---
id: wu_page_this-id_before_render
title: 'Çalakî - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Berî nîşandana rûpelekî taybet tê xebitandin.

Bikaranîn: Beşa dînamîk divê bi page id-eke derbasdar were guherandin, mînak add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametre

| Nav | Cure | Danasîn |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id-ya rûpelê. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Nimûneya Base Admin Page. |

### Ji demê ve

- 1.8.2
### Çavkanî

Di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) de, li rêza 368 hatiye danasîn.
