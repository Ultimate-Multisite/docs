---
id: wu_enforce_password_rules
title: Filtar - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtrira treba li provoditi dodatna pravila za lozinke.

Kada je true, provodi zahtjeve za minimalnu duljinu i znakove. Automatski je omogućeno za postavku "Super Strong" ili kada je aktivna značajka Strong Password u Defender Pro.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $enforce_rules | `bool` | Treba li provoditi dodatna pravila. |
| $strength_setting | `string` | Vrijednost administratorske postavke. |
| $defender_active | `bool` | Je li Defender Pro Strong Password aktivan. |

### Od verzije

- 2.4.0
### Izvor

Definirano u [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na retku 531
