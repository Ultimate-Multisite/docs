---
id: wu_page_added
title: ''
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
Aktion: wu_page_added

Erlaubt Plugin-Entwicklern, zusätzliche Dinge auszuführen, wenn Seiten registriert werden.

Im Gegensatz zum wu_page_load, der nur ausgeführt wird, wenn eine bestimmte Seite angezeigt wird, wird dieser Hook bei der Registrierung für jede Admin-Seite ausgeführt, die mit Ultimate Multisite-Code hinzugefügt wird.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $page_id | `string` | Die ID dieser Seite. |
| $page_hook | `string` | Der Hook-Name dieser Seite. |

### Since

- 2.0.0

### Source

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
