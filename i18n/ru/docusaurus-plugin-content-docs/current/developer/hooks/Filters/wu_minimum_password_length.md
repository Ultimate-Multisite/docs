---
id: wu_minimum_password_length
title: Фильтр - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Фильтр: wu_minimum_password_length

Фильтрует минимальную длину пароля.

Применяется только, когда wu_enforce_password_rules true.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Минимальная длина пароля. По умолчанию 12 (соответствует Defender Pro). |
| $defender_active | `bool` | Определяет, активна ли Defender Pro Strong Password. |

### С версии

- 2.4.0

### Источник

Определено в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) на строке 543
