---
id: wu_minimum_password_length
title: Филтер - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Филтер: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Филтрира минималну дужину лозинке.

Примењује се само када је wu_enforce_password_rules true.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Минимална дужина лозинке. Подразумевано 12 (поклапа се са Defender Pro). |
| $defender_active | `bool` | Да ли је Defender Pro Strong Password активан. |

### Од верзије {#since}

- 2.4.0
### Извор {#source}

Дефинисано у [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) у реду 543
