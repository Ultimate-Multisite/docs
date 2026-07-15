---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtrira da li se moraju primjenjivati dodatna pravila lozinke.

Kada je postavljeno na true, prisiljava minimalnu dužinu i zahtjeve za znakove. Automatski je omogućeno za podešavanje "Super Strong" ili kada je funkcija Strong Password u Defender Pro-u aktivna.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Da li se moraju primjenjivati dodatna pravila. |
| $strength_setting | `string` | Vrijednost administrativnog podešavanja. |
| $defender_active | `bool` | Da li je Defender Pro Strong Password aktivno. |

### Since {#since}

- 2.4.0
### Source {#source}

Definisano u [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na liniji 531
