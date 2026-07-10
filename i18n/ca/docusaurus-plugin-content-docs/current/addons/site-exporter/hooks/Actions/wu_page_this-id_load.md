---
id: wu_page_this-id_load
title: 'Acció - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Acció: wu_page_{$this->id}_load {#action-wupagethis-idload}

Permet als desenvolupadors de plugins afegir hooks addicionals a una pàgina específica.

Ús: La part dinàmica ha de ser substituïda per un ID de pàgina vàlid, per exemple: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $page\_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID d'aquesta pàgina. |
| $page\_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | El hook generat per a aquesta pàgina. |

### Desvingut {#since}

- 1.8.2
### Font {#source}

Definit en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) a la línia 301
