---
id: wu_minimum_password_length
title: Filtru - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtru: wu_minimum_password_length

Filtrează lungimea minimă a parolei.

Este aplicat doar dacă `wu_enforce_password_rules` este setat pe `true`.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $min_length | `int` | Lungimea minimă a parolei. Implicită 12 (se potrivește cu Defender Pro). |
| $defender_active | `bool` | Dacă funcția Defender Pro Strong Password este activă. |

### De la versiunea {#since}

- 2.4.0
### Sursă {#source}

Definit în [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) la linia 543
