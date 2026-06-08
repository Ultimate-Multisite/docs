---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

Inaruhusu watengenezaji wa plugin kuongeza *hooks* (viunganishi) vingine kwenye ukurasa mahususi.

**Matumizi:** Sehemu ya *dynamic* (inayobadilika) inahitaji kubadilishwa na kitambulisho halali cha ukurasa, kwa mfano: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Viparametrika

| Jina | Aina | Maelezo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Kitambulisho cha ukurasa huu. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | *Hook* iliyoanzishwa kwa ukurasa huu. |

### Tangu

- 1.8.2
### Chanzo

Imeainishwa katika [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) kwenye mstari wa 301
