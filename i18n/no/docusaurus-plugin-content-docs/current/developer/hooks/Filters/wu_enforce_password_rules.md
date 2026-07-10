---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filtrerer om man skal håndheve ekstra passordregler.

Når den er satt til true, håndhever den krav til minimum lengde og tegn. Slås automatisk på for innstillingen "Super Strong" eller når Defender Pros funksjon for sterkt passord er aktiv.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Om man skal håndheve ekstra regler. |
| $strength_setting | `string` | Admin-innstillingens verdi. |
| $defender_active | `bool` | Om Defender Pro Strong Password er aktiv. |

### Since {#since}

- 2.4.0
### Source {#source}

Definert i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) på linje 531
