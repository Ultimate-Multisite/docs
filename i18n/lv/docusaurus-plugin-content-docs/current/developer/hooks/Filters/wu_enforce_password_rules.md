---
id: wu_enforce_password_rules
title: Filtrs - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtrs: wu_enforce_password_rules

Filtrē, vai piemērot papildu paroles noteikumus.

Ja vērtība ir true, piemēro minimālā garuma un rakstzīmju prasības. Automātiski iespējots iestatījumam "Super Strong" vai kad Defender Pro Strong Password funkcija ir aktīva.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $enforce_rules | `bool` | Vai piemērot papildu noteikumus. |
| $strength_setting | `string` | Administratora iestatījuma vērtība. |
| $defender_active | `bool` | Vai Defender Pro Strong Password ir aktīvs. |

### Kopš {#since}

- 2.4.0
### Avots {#source}

Definēts [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) 531. rindā
