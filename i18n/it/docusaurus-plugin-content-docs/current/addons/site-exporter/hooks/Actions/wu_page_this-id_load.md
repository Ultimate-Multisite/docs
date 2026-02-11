---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Azione: wu_page_\{$this->id\}_load

Consenti agli sviluppatori di plugin di aggiungere hook aggiuntivi a una pagina specifica.

Uso: La parte dinamica deve essere sostituita con un ID di pagina valido, ad es. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID di questa pagina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'hook generato per questa pagina. |

### Da

- 1.8.2

### Fonte

Definito in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) alla riga 301
