---
id: wu_minimum_password_length
title: Filtar - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filtrirajte minimalnu duljinu lozinke.

Primjenjuje se samo kada je wu_enforce_password_rules true.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $min_length | `int` | Minimalna duljina lozinke. Zadano 12 (odgovara Defender Pro). |
| $defender_active | `bool` | Je li Defender Pro Strong Password aktivan. |

### Od

- 2.4.0
### Izvor

Definirano u [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) u retku 543
