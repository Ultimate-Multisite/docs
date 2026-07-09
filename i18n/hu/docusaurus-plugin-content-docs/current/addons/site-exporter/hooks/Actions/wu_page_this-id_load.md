---
id: wu_page_this-id_load
title: 'Akció - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Engedi a plugin fejlesztőknek, hogy további hook-okat adjanak hozzá egy konkrét oldalhoz.

Használat: A dinamikus részt egy érvényes oldal-ID-vel kell cserélni, például: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Az oldal azonosítója. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A hozzá az oldalhoz generált hook. |

### óta {#since}

- 1.8.2
### Forrás {#source}

Definíciója található [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) fájlban, 301-sorban.
