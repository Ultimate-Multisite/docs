---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render {#action-wupagethis-idafterrender}

Se declanșează după ce o pagină specifică a fost renderizată.

Utilizare: Partea dinamică trebuie înlocuită cu un ID de pagină valid, de exemplu: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ul paginii. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanța de pagină de administrare de bază (Base Admin Page). |

### De la {#since}

- 1.8.2
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) la linia 394
