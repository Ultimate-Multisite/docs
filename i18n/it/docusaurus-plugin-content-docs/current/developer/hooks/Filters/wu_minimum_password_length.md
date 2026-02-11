---
id: wu_minimum_password_length
title: Filtro - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtra la lunghezza minima della password

Applica solo quando wu_enforce_password_rules è vero.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $min_length | `int` | Lunghezza minima della password. Valore predefinito 12 (coincide con Defender Pro). |
| $defender_active | `bool` | Se Defender Pro Strong Password è attivo. |

### Da

- 2.4.0

### Fonte

Definito in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) alla riga 543
