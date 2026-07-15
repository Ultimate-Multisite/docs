---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filtrira minimalnu dužinu lozinke.

Ovo se primjenjuje samo kada je `wu_enforce_password_rules` postavljeno na `true`.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $min_length | `int` | Minimalna dužina lozinke. Podrazumevano je 12 (što odgovara Defender Pro). |
| $defender_active | `bool` | Da li je Defender Pro Strong Password aktivan. |

### Od {#since}

- 2.4.0
### Izvor {#source}

Definisano u [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) na liniji 543
