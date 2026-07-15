---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtrer, om yderligere adgangskoderegler skal håndhæves.

Når true, håndhæves krav til minimumslængde og tegn. Aktiveres automatisk for indstillingen "Super Strong", eller når Defender Pros Strong Password-funktion er aktiv.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $enforce_rules | `bool` | Om yderligere regler skal håndhæves. |
| $strength_setting | `string` | Værdien af administratorindstillingen. |
| $defender_active | `bool` | Om Defender Pro Strong Password er aktiv. |

### Siden {#since}

- 2.4.0
### Kilde {#source}

Defineret i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) på linje 531
