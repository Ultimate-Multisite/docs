---
id: wu_minimum_password_length
title: Фільтр - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Фільтр: wu_minimum_password_length

Фільтрує мінімальну довжину пароля.

Застосовується лише тоді, коли `wu_enforce_password_rules` встановлено у `true`.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Мінімальна довжина пароля. За замовчуванням 12 (відповідає Defender Pro). |
| $defender_active | `bool` | Чи активний Defender Pro Strong Password. |

### Since {#since}

- 2.4.0
### Source {#source}

Визначено в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) на рядку 543
