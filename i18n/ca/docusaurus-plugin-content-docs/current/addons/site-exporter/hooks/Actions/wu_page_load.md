---
id: wu_page_load
title: Acció - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Acció: wu_page_load {#action-wupageload}

Permetre als desenvolupadors de plugins afegir *hooks* addicionals a les nostres pàgines.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID d'aquesta pàgina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | El *hook* generat per a aquesta pàgina. |

### Des de {#since}

- 1.8.2
### Font {#source}

Definit a [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) a la línia 289
