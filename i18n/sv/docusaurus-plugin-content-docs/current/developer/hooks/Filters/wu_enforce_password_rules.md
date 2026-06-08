---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Bestäm om man ska tvinga fram ytterligare lösenordregler.

Om detta är sant (true) så krävs ett minimumlängd och specifika tecken. Funktionen aktiveras automatiskt om inställningen är "Super Strong" eller om Defender Pros funktionen för starka lösenord är aktiv.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $enforce_rules | `bool` | Om ytterligare regler ska tvingas fram. |
| $strength_setting | `string` | Admin-inställningsvärdet. |
| $defender_active | `bool` | Om Defender Pro Strong Password är aktivt. |

### Sedan

- 2.4.0
### Källa

Definieras i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) på rad 531
