---
id: wu_page_this-id_after_render
title: 'Çalakî - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Piştî nîşandana rûpeleke taybet tê xebitandin.

Bikaranîn: Beşa dynamic divê bi id-yeke rûpelê ya derbasdar were guherandin, mînak add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametre

| Nav | Cure | Danasîn |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id-ya rûpelê. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Nimûneya Base Admin Page. |

### Ji

- 1.8.2
### Çavkanî

Di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) de li rêza 394 hatiye danasîn
