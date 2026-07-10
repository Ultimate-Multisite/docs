---
id: wu_minimum_password_length
title: Filtro - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtro: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtra a lonxitude mínima do contrasinal.

Só se aplica cando wu_enforce_password_rules é true.

## Parámetros {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Lonxitude mínima do contrasinal. Predeterminado 12 (coincide con Defender Pro). |
| $defender_active | `bool` | Se Defender Pro Strong Password está activo. |

### Desde {#since}

- 2.4.0
### Fonte {#source}

Definido en [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) na liña 543
