---
id: wu_page_load
title: Akce - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

Umožňuje vývojářům pluginů přidat další hooks na naše stránky.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID této stránky. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook vytvořený pro tuto stránku. |

### Od

- 1.8.2
### Zdroj

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) na řádku 289
