---
id: wu_minimum_password_strength
title: Filtro - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtro: wu_minimum_password_strength

Filtra la forza minima della password richiesta (punteggio zxcvbn).

Livelli di forza: - 0, 1: Molto debole - 2: Debole - 3: Medio - 4: Forte (predefinito)

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $min_strength | `int` | Il livello minimo di forza richiesto. |
| $strength_setting | `string` | Il valore delle impostazioni amministrative (medium, strong, super_strong). |

### Da

- 2.4.0

### Fonte

Definito in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) alla riga 516
