---
id: wu_page_this-id_load
title: 'Akcia - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Umožňuje vývojárom pluginov pridať ďalšie hooky na konkrétnu stránku.

Použitie: Dynamickú časť je potrebné nahradiť platným ID stránky, napr. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID tejto stránky. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook vygenerovaný pre túto stránku. |

### Od verzie {#since}

- 1.8.2
### Zdroj {#source}

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) na riadku 301
