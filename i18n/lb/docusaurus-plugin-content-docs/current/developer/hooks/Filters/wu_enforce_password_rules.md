---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtert, ob zousätzlech Passwuertreegelen duerchgesat solle ginn.

Wann true, ginn d'Mindestlängt an d'Zeechefuerderungen duerchgesat. Automatesch aktivéiert fir d'Astellung "Super Strong" oder wann d'Funktioun Strong Password vu Defender Pro aktiv ass.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $enforce_rules | `bool` | Ob zousätzlech Reegele duerchgesat solle ginn. |
| $strength_setting | `string` | De Wäert vun der Admin-Astellung. |
| $defender_active | `bool` | Ob Defender Pro Strong Password aktiv ass. |

### Zanter

- 2.4.0
### Quell

Definéiert an [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) op Linn 531
