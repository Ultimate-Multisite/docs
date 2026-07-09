---
id: wu_minimum_password_length
title: Filter – wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filtruje minimálnu dĺžku hesla.

Uplatňuje sa iba vtedy, keď je wu_enforce_password_rules true.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $min_length | `int` | Minimálna dĺžka hesla. Predvolená hodnota 12 (zhoduje sa s Defender Pro). |
| $defender_active | `bool` | Či je aktívne silné heslo Defender Pro. |

### Od verzie

- 2.4.0
### Zdroj

Definované v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) na riadku 543
