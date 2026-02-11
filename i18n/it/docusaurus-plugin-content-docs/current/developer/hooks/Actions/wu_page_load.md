---
id: wu_page_load
title: Azione - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Allow plugin developers to add additional hooks to our pages.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $id | `string` | L'ID di questa pagina. |
| $page_hook | `string` | Il hook della pagina. |
| $admin_page | `self` | TThe istanza della pagina. |

### Dal

- 1.8.2
- 2.0.4: Aggiunto il terzo parametro: l'istanza della pagina.

### Fonte

Definito in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) alla riga 318
