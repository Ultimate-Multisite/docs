---
id: wu_page_this-id_before_render
title: 'Kitendo - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Inatokea kabla ya kurangiwa (rendering) kurasa maalum.

Matumizi: Sehemu ya kiotomatiki (dynamic) inahitaji kubadilishwa na ID halali ya kurasa, kwa mfano: add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Vigezo {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ya kurasa. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tohari (instance) ya Base Admin Page. |

### Tangu {#since}

- 1.8.2
### Chanzo {#source}

Imefafanuliwa katika [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) kwenye mstari wa 368
