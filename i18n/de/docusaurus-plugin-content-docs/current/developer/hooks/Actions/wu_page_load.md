---
id: wu_page_load
title: Aktion - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Aktion: wu_page_load

Ermöglicht Plugin-Entwicklern, zusätzliche Hooks zu unseren Seiten hinzuzufügen.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $id | `string` | Die ID dieser Seite. |
| $page_hook | `string` | Der Seiten-Hook dieser Seite. |
| $admin_page | `self` | Die Seiteninstanz. |

### Seit

- 1.8.2
- 2.0.4: Dritter Parameter hinzugefügt: die Seiteninstanz.

### Quelle

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) in Zeile 318
