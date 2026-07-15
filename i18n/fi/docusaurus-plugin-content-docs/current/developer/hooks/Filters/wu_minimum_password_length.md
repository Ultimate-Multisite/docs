---
id: wu_minimum_password_length
title: Suodatin - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Suodata salasanan vähimmäispituus.

Pakotetaan vain, kun wu_enforce_password_rules on true.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $min_length | `int` | Salasanan vähimmäispituus. Oletus 12 (vastaa Defender Prota). |
| $defender_active | `bool` | Onko Defender Pro Strong Password aktiivinen. |

### Alkaen {#since}

- 2.4.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) rivillä 543
