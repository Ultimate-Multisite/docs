---
id: wu_page_this-id_before_render
title: 'Ficil - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Waxay shaqaysaa ka hor inta aan la render-gareyn bog gaar ah.

Isticmaalka: Qaybta dynamic-ga ah waa in lagu beddelaa id bog oo sax ah, tusaale add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Halbeegyada

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id-ga bogga. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance-ka Base Admin Page. |

### Tan iyo

- 1.8.2
### Isha

Waxaa lagu qeexay [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) safka 368
