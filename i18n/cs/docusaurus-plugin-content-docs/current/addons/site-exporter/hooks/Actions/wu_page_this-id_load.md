---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Umožňuje vývojářům pluginů přidat další hooks na konkrétní stránku.

Použití: Dynamickou část je třeba nahradit platným ID stránky, např. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID této stránky. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook vytvořený pro tuto stránku. |

### Od

- 1.8.2
### Zdroj

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) na řádku 301
