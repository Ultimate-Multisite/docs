---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Azione: wu_page_added

Consenti agli sviluppatori di plugin di eseguire ulteriori azioni quando le pagine vengono registrate.

A differenza di wu_page_load, che viene eseguito solo quando una pagina specifica viene visualizzata, questo hook viene eseguito alla registrazione per ogni pagina amministrativa aggiunta tramite il codice WP Ultimo.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID di questa pagina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'hook generato per questa pagina. |

### Da

- 2.0.0

### Fonte

Definito in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) alla riga 203
