---
id: wu_page_added
title: Akcia - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Umožňuje vývojárom pluginov spustiť ďalšie veci pri registrácii stránok.

Na rozdiel od wu_page_load, ktorý sa spúšťa iba vtedy, keď sa zobrazuje konkrétna stránka, tento hook sa spúšťa pri registrácii pre každú admin stránku pridávanú pomocou kódu WP Ultimo.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID tejto stránky. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook vygenerovaný pre túto stránku. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) na riadku 203
