---
id: wu_minimum_password_length
title: Filtras - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtras: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtruoja minimalų slaptažodžio ilgį.

Taikoma tik tada, kai wu_enforce_password_rules yra true.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $min_length | `int` | Minimalus slaptažodžio ilgis. Numatytoji reikšmė 12 (atitinka Defender Pro). |
| $defender_active | `bool` | Ar Defender Pro Strong Password yra aktyvus. |

### Nuo {#since}

- 2.4.0
### Šaltinis {#source}

Apibrėžta [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) 543 eilutėje
