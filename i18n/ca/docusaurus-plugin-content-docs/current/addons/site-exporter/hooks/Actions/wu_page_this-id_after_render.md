---
id: wu_page_this-id_after_render
title: 'Acció - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render

S'executa després de renderitzar una pàgina específica.

Usatge: La part dinàmica ha de ser substituïda per un ID de pàgina vàlid, per exemple: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID de la pàgina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'instància de la pàgina d'administració base (Base Admin Page). |

### Des: {#since}

- 1.8.2
### Font: {#source}

Definit en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) a la línia 394
