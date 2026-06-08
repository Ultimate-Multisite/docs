---
id: wu_enforce_password_rules
title: Филтър - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Филтър, който определя дали да се прилагат допълнителни правила за пароли.

Когато е `true`, прилага изисквания за минимална дължина и символи. Автоматично се активира за настройката "Super Strong" или когато функцията Strong Password на Defender Pro е активна.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Дали да се прилагат допълнителни правила. |
| $strength_setting | `string` | Стойността на настройката в админ панела. |
| $defender_active | `bool` | Дали Strong Password на Defender Pro е активен. |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
