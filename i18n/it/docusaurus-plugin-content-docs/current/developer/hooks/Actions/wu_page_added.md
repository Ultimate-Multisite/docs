---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Azione: wu_page_added

Consenti agli sviluppatori di plugin di eseguire ulteriori azioni quando le pagine vengono registrate.

A differenza di wu_page_load, che viene eseguito solo quando una pagina specifica è visualizzata, questo hook viene eseguito alla registrazione per ogni pagina amministrativa aggiunta tramite il codice di Ultimate Multisite.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $page_id | `string` | L'ID di questa pagina. |
| $page_hook | `string` | Il nome dell'hook di questa pagina. |

### Da

- 2.0.0

### Fonte

Definito in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) alla riga 228
