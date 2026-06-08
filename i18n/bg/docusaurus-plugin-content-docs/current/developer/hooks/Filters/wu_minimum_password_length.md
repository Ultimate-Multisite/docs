---
id: wu_minimum_password_length
title: Филтър - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Филтър: wu_minimum_password_length

Филтрира минималната дължина на паролата.

Работи само когато `wu_enforce_password_rules` е зададено на `true`.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $min_length | `int` | Минимална дължина на паролата. По подразбиране е 12 (съответства на Defender Pro). |
| $defender_active | `bool` | Дали Defender Pro Strong Password е активен. |

### От версия

- 2.4.0
### Източник

Дефиниран в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) на линия 543
