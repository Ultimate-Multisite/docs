---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter, ob zusätzliche Passwortregeln durchgesetzt werden sollen.

Wenn true, werden Mindestlänge und Zeichenanforderungen durchgesetzt. Automatisch aktiviert für die Einstellung „Super Strong“ oder wenn die Strong Password-Funktion von Defender Pro aktiv ist.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $enforce_rules | `bool` | Ob zusätzliche Regeln durchgesetzt werden sollen. |
| $strength_setting | `string` | Der Wert der Administratoreinstellung. |
| $defender_active | `bool` | Ob Defender Pro Strong Password aktiv ist. |

### Seit

- 2.4.0

### Quelle

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
