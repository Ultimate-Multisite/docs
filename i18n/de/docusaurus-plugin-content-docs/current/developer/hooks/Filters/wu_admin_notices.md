---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Ermöglicht Entwicklern, Admin-Benachrichtigungen, die von Ultimate Multisite hinzugefügt wurden, zu filtern.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $notices | `array` | Liste der Benachrichtigungen für dieses spezielle Panel. |
| $all_notices | `array` | Liste der hinzugefügten Benachrichtigungen, getrennt nach Panel. |
| $panel | `string` | Panel, um die Benachrichtigungen abzurufen. |
| $filter | `string` | Ob die abweisbaren Benachrichtigungen herausgefiltert wurden. |
| $dismissed_messages | `array` | Liste der abgewiesenen Benachrichtigungsschlüssel. |

### Seit

- 2.0.0

### Quelle

Definiert in [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) in Zeile 121


## Rückgabe
