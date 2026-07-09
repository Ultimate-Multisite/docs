---
id: wu_page_this-id_after_render
title: 'Gnìomh - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Thèid a chur an gnìomh às dèidh duilleag shònraichte a renderadh.

Cleachdadh: Feumar am pàirt dinimigeach a chur an àite le id duilleige dligheach, m.e. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id na duilleige. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instans Base Admin Page. |

### Bho {#since}

- 1.8.2
### Tùs {#source}

Air a mhìneachadh ann an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) aig loidhne 394
