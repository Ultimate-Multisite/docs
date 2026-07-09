---
id: wu_enforce_password_rules
title: Филтер - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Филтер: wu_enforce_password_rules

Филтрира дали да се спроведат дополнителни правила за лозинка.

Кога е true, спроведува барања за минимална должина и знаци. Автоматски е овозможено за поставката „Super Strong“ или кога е активна функцијата Strong Password на Defender Pro.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $enforce_rules | `bool` | Дали да се спроведат дополнителни правила. |
| $strength_setting | `string` | Вредноста на администраторската поставка. |
| $defender_active | `bool` | Дали Defender Pro Strong Password е активна. |

### Од верзија

- 2.4.0
### Извор

Дефинирано во [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) на ред 531
