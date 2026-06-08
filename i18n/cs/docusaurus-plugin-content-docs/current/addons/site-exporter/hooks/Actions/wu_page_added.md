---
id: wu_page_added
title: Akce - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Umožňuje vývojářům pluginů spouštět další akce, když jsou stránky registrovány.

Na rozdíl od `wu_page_load`, který se spouští pouze, když je zobrazena konkrétní stránka, tento hook se spouští při registraci pro každou administrační stránku, která je přidána pomocí kódu WP Ultimo.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID této stránky. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook vygenerovaný pro tuto stránku. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) na řádku 203
