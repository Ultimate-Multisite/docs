---
id: wu_minimum_password_length
title: Filtro - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtro: wu_minimum_password_length

Filtrar o comprimento mínimo da senha.

Somente aplicado quando wu_enforce_password_rules é verdadeiro.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Comprimento mínimo da senha. Padrão 12 (corresponde ao Defender Pro). |
| $defender_active | `bool` | Se o Defender Pro Strong Password está ativo. |

### Desde

- 2.4.0

### Fonte

Definido em [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) na linha 543
