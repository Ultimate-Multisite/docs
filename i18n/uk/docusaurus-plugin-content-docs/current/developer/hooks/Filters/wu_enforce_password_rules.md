---
id: wu_enforce_password_rules
title: Фільтр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Визначає, чи потрібно застосовувати додаткові правила для паролів.

Якщо значення `true`, застосовуються вимоги до мінімальної довжини та набору символів. Ця функція автоматично активується для налаштування "Super Strong" або коли функція Strong Password у Defender Pro увімкнена.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Чи потрібно застосовувати додаткові правила. |
| $strength_setting | `string` | Значення налаштування адміністратора. |
| $defender_active | `bool` | Чи активна функція Strong Password у Defender Pro. |

### Since

- 2.4.0
### Source

Визначено в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) на рядку 531
