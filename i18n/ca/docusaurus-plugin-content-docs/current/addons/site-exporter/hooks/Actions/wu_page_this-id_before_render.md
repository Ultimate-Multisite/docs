---
id: wu_page_this-id_before_render
title: 'Acció - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

S'executa abans de renderitzar una pàgina específica.

**Ús:** La part dinàmica ha de substituir-se per un ID de pàgina vàlid, per exemple: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $page\_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID de la pàgina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'instància de Base Admin Page. |

### Desvinguts {#since}

- 1.8.2
### Font {#source}

Definit en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) a la línia 368
