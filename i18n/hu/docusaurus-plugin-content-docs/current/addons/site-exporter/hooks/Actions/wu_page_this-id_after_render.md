---
id: wu_page_this-id_after_render
title: 'Akció - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Akkor fut ki, amikor egy adott oldalt megjelenítenek.

Használat: A dinamikus részt egy érvényes oldali azonosítóval kell cserélni, pl.: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Az oldal azonosítója. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Az alap Admin Oldal példánat. |

### Desde {#since}

- 1.8.2
### Forrás {#source}

Meghatározva [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) fájlban, 394-edik soron
