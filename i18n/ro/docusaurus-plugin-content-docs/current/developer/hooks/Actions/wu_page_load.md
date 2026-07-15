---
id: wu_page_load
title: Acțiune - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Permite dezvoltatorilor de plugin să adauge hook-uri suplimentare paginilor noastre.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID-ul acestei pagini. |
| $page_hook | `string` | Hook-ul paginii. |
| $admin_page | `self` | Instanța paginii. |

### Since {#since}

- 1.8.2
- 2.0.4: Adăugat al treilea parametru: instanța paginii.
### Source {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) la linia 318
