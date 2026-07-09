---
id: wu_enforce_password_rules
title: Filtre - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtre: wu_enforce_password_rules

Filtra si s’han d’aplicar regles de contrasenya addicionals.

Quan és true, aplica requisits de longitud mínima i de caràcters. S’activa automàticament per a la configuració "Super Strong" o quan la funcionalitat Strong Password de Defender Pro és activa.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $enforce_rules | `bool` | Si s’han d’aplicar regles addicionals. |
| $strength_setting | `string` | El valor de configuració de l’admin. |
| $defender_active | `bool` | Si Defender Pro Strong Password és actiu. |

### Des de

- 2.4.0
### Font

Definit a [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) a la línia 531
