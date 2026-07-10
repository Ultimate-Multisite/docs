---
id: wu_page_this-id_after_render
title: 'Ficil - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Waxay dhacdaa ka dib marka bog gaar ah la render-gareeyo.

Isticmaalka: Qaybta firfircoon waa in lagu beddelaa page id sax ah, tusaale ahaan add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Halbeegyada {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id-ka bogga. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Shayga Base Admin Page. |

### Laga bilaabo {#since}

- 1.8.2
### Isha {#source}

Waxaa lagu qeexay [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) safka 394
