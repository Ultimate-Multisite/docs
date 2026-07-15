---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Inatolewa baada ya kuonyesha ukurasa maalum.

**Matumizi:** Sehemu inayobadilika inahitaji kubadilishwa na ID halali ya ukurasa, kwa mfano: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Vigezo {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ya ukurasa. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Mfano wa Base Admin Page. |

### Tangu {#since}

- 1.8.2
### Chanzo {#source}

Imefafanuliwa katika [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) kwenye mstari wa 394
