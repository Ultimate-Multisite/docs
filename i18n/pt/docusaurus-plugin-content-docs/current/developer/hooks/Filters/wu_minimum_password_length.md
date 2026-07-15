---
id: wu_minimum_password_length
title: Filtro - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtro: wu_minimum_password_length

Filtra o comprimento mínimo da palavra-passe.

Aplicado apenas quando wu_enforce_password_rules é true.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $min_length | `int` | Comprimento mínimo da palavra-passe. Predefinição 12 (corresponde ao Defender Pro). |
| $defender_active | `bool` | Se o Defender Pro Strong Password está ativo. |

### Desde {#since}

- 2.4.0
### Fonte {#source}

Definido em [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) na linha 543
