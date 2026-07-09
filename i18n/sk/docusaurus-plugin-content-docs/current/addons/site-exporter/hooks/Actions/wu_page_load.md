---
id: wu_page_load
title: Akcia - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Akcia: wu_page_load

Umožňuje vývojárom pluginov pridať na naše stránky ďalšie hooky.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID tejto stránky. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook vygenerovaný pre túto stránku. |

### Od verzie

- 1.8.2
### Zdroj

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) na riadku 289
